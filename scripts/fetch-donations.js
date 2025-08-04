const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

// PayPal API Configuration
const PAYPAL_API_BASE =
  process.env.PAYPAL_SANDBOX === "true"
    ? "https://api-m.sandbox.paypal.com"
    : "https://api-m.paypal.com";

const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

// Donation packages mapping - used to categorize donations
const PACKAGE_KEYWORDS = {
  kabinen: ["kabine", "cabin", "umkleide", "changing"],
  fassade: ["fassade", "facade", "fenster", "window", "außen", "outside"],
  waschkueche: ["wasch", "wash", "trockner", "dryer", "laundry", "wäsche"],
};

class PayPalDonationFetcher {
  constructor() {
    this.accessToken = null;
    this.dataFilePath = path.join(
      __dirname,
      "..",
      "src",
      "data",
      "donationData.json"
    );
  }

  async authenticate() {
    try {
      console.log("🔐 Authenticating with PayPal API...");

      const auth = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
        "base64"
      );

      const response = await axios.post(
        `${PAYPAL_API_BASE}/v1/oauth2/token`,
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: `Basic ${auth}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      this.accessToken = response.data.access_token;
      console.log("✅ PayPal authentication successful");
      return true;
    } catch (error) {
      console.error(
        "❌ PayPal authentication failed:",
        error.response?.data || error.message
      );
      return false;
    }
  }

  async fetchRecentDonations() {
    try {
      console.log("📥 Fetching recent donations...");

      // Get donations from the last 7 days
      const endDate = new Date().toISOString();
      const startDate = new Date(
        Date.now() - 7 * 24 * 60 * 60 * 1000
      ).toISOString();

      const response = await axios.get(
        `${PAYPAL_API_BASE}/v1/reporting/transactions`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
            "Content-Type": "application/json",
          },
          params: {
            start_date: startDate,
            end_date: endDate,
            fields: "all",
            page_size: 500,
            page: 1,
          },
        }
      );

      const transactions = response.data.transaction_details || [];
      console.log(`📊 Found ${transactions.length} transactions`);

      return this.filterDonations(transactions);
    } catch (error) {
      console.error(
        "❌ Failed to fetch donations:",
        error.response?.data || error.message
      );
      return [];
    }
  }

  filterDonations(transactions) {
    return transactions.filter((transaction) => {
      // Filter for completed donations to our donation button
      return (
        transaction.transaction_info?.transaction_status === "S" && // Success
        transaction.transaction_info?.transaction_amount?.value > 0 &&
        (transaction.transaction_info?.transaction_subject?.includes(
          "SC Konstanz-Wollmatingen"
        ) ||
          transaction.transaction_info?.custom_field?.includes("renovation"))
      );
    });
  }

  categorizeDonation(transaction) {
    const subject = (
      transaction.transaction_info?.transaction_subject || ""
    ).toLowerCase();
    const note = (
      transaction.transaction_info?.transaction_note || ""
    ).toLowerCase();
    const custom = (
      transaction.transaction_info?.custom_field || ""
    ).toLowerCase();

    const fullText = `${subject} ${note} ${custom}`;

    // Check for package keywords in the donation text
    for (const [packageName, keywords] of Object.entries(PACKAGE_KEYWORDS)) {
      if (keywords.some((keyword) => fullText.includes(keyword))) {
        return packageName;
      }
    }

    // Default categorization logic - distribute evenly if no specific package mentioned
    const transactionId = transaction.transaction_info?.transaction_id || "";
    const hash = transactionId.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);

    const packages = ["kabinen", "fassade", "waschkueche"];
    return packages[Math.abs(hash) % packages.length];
  }

  formatDonor(transaction) {
    const payer = transaction.payer_info || {};
    const amount = parseFloat(
      transaction.transaction_info?.transaction_amount?.value || 0
    );
    const date =
      transaction.transaction_info?.transaction_initiation_date?.split("T")[0];

    // Extract donor name (anonymize if requested)
    let name = "";
    if (payer.payer_name) {
      const fullName = `${payer.payer_name.given_name || ""} ${
        payer.payer_name.surname || ""
      }`.trim();
      name = fullName || "Anonymous";
    } else {
      name = "Anonymous";
    }

    // Check if donor requested anonymity
    const isAnonymous =
      (transaction.transaction_info?.transaction_note || "")
        .toLowerCase()
        .includes("anonym") ||
      (transaction.transaction_info?.custom_field || "")
        .toLowerCase()
        .includes("anonym") ||
      !payer.payer_name;

    return {
      name: isAnonymous ? "Anonymous" : name,
      amount,
      comment: transaction.transaction_info?.transaction_note || "",
      date,
      anonymous: isAnonymous,
      paypalTransactionId: transaction.transaction_info?.transaction_id,
    };
  }

  async loadCurrentData() {
    try {
      const data = await fs.readFile(this.dataFilePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      console.log("📄 No existing donation data found, creating new structure");
      return {
        lastUpdated: new Date().toISOString(),
        totalGoal: 28000,
        packages: {
          kabinen: { goal: 8000, current: 0, donors: [] },
          fassade: { goal: 15000, current: 0, donors: [] },
          waschkueche: { goal: 5000, current: 0, donors: [] },
        },
      };
    }
  }

  async updateDonationData(newDonations) {
    const currentData = await this.loadCurrentData();
    let hasUpdates = false;

    // Get existing transaction IDs to avoid duplicates
    const existingTxnIds = new Set();
    Object.values(currentData.packages).forEach((pkg) => {
      pkg.donors.forEach((donor) => {
        if (donor.paypalTransactionId) {
          existingTxnIds.add(donor.paypalTransactionId);
        }
      });
    });

    // Process new donations
    for (const transaction of newDonations) {
      const donor = this.formatDonor(transaction);
      const packageName = this.categorizeDonation(transaction);

      // Skip if we already have this transaction
      if (existingTxnIds.has(donor.paypalTransactionId)) {
        continue;
      }

      // Add to appropriate package
      if (currentData.packages[packageName]) {
        currentData.packages[packageName].donors.push(donor);
        currentData.packages[packageName].current += donor.amount;
        hasUpdates = true;

        console.log(
          `💰 New donation: ${donor.name} (${donor.amount}€) → ${packageName}`
        );
      }
    }

    // Update timestamp
    currentData.lastUpdated = new Date().toISOString();

    // Save updated data
    if (hasUpdates) {
      await fs.writeFile(
        this.dataFilePath,
        JSON.stringify(currentData, null, 2),
        "utf8"
      );
      console.log("✅ Donation data updated successfully");

      // Log summary
      Object.entries(currentData.packages).forEach(([name, pkg]) => {
        const progress = ((pkg.current / pkg.goal) * 100).toFixed(1);
        console.log(
          `📊 ${name}: ${pkg.current}€ / ${pkg.goal}€ (${progress}%)`
        );
      });
    } else {
      console.log("ℹ️ No new donations found");
    }

    return hasUpdates;
  }

  async run() {
    try {
      console.log("🚀 Starting donation data update...");

      // Check required environment variables
      if (!CLIENT_ID || !CLIENT_SECRET) {
        throw new Error(
          "Missing PayPal API credentials. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET secrets."
        );
      }

      // Authenticate with PayPal
      const authenticated = await this.authenticate();
      if (!authenticated) {
        throw new Error("PayPal authentication failed");
      }

      // Fetch recent donations
      const donations = await this.fetchRecentDonations();

      // Update local data
      const hasUpdates = await this.updateDonationData(donations);

      if (hasUpdates) {
        console.log("🎉 Donation data update completed successfully!");
      } else {
        console.log("✨ Donation data is up to date");
      }
    } catch (error) {
      console.error("💥 Error during donation update:", error.message);
      process.exit(1);
    }
  }
}

// Run the fetcher
const fetcher = new PayPalDonationFetcher();
fetcher.run();

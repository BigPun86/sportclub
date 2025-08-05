import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// ES Module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Donation packages mapping
const PACKAGE_KEYWORDS = {
  kabinen: ["kabine", "cabin", "umkleide", "changing"],
  fassade: ["fassade", "facade", "fenster", "window", "außen", "outside"],
  waschkueche: ["wasch", "wash", "trockner", "dryer", "laundry", "wäsche"],
};

class PayPalWebhookHandler {
  constructor() {
    this.dataFilePath = path.join(
      __dirname,
      "..",
      "src",
      "data",
      "donationData.json"
    );
  }

  async handleWebhook(webhookData) {
    console.log("🎣 Processing PayPal webhook...");
    console.log("Webhook Event Type:", webhookData.event_type);

    // Only process payment capture completed events
    if (webhookData.event_type !== "PAYMENT.CAPTURE.COMPLETED") {
      console.log("ℹ️ Ignoring webhook - not a completed payment");
      return;
    }

    const resource = webhookData.resource;
    const amount = parseFloat(resource.amount?.value || 0);
    const currency = resource.amount?.currency_code || "EUR";
    const payerId = resource.payer?.payer_id;
    const customFields = resource.custom_fields || [];
    const note = resource.note_to_payee || "";

    // Skip if amount is too small (probably not a donation)
    if (amount < 5) {
      console.log("ℹ️ Amount too small, probably not a donation");
      return;
    }

    console.log(`💰 Processing donation: ${amount} ${currency}`);

    const donation = {
      name: this.extractDonorName(resource),
      amount: amount,
      comment: note || this.extractComment(customFields),
      date: new Date().toISOString().split("T")[0],
      paypalTransactionId: resource.id,
      anonymous: this.checkAnonymous(note, customFields),
    };

    const packageKey = this.categorizeDonation(note, customFields);
    console.log(`📦 Categorized as: ${packageKey}`);

    await this.updateDonationData(packageKey, donation);
  }

  extractDonorName(resource) {
    const payer = resource.payer;
    if (payer?.name) {
      return `${payer.name.given_name || ""} ${
        payer.name.surname || ""
      }`.trim();
    }
    if (payer.email_address) {
      return payer.email_address.split("@")[0];
    }
    return "Anonymous";
  }

  extractComment(customFields) {
    for (const field of customFields) {
      if (
        field.label?.toLowerCase().includes("comment") ||
        field.label?.toLowerCase().includes("nachricht")
      ) {
        return field.value;
      }
    }
    return "";
  }

  checkAnonymous(note, customFields) {
    const text = (
      note +
      " " +
      customFields.map((f) => f.value).join(" ")
    ).toLowerCase();
    return (
      text.includes("anonymous") ||
      text.includes("anonym") ||
      text.includes("privat")
    );
  }

  categorizeDonation(note, customFields) {
    const text = (
      note +
      " " +
      customFields.map((f) => f.value).join(" ")
    ).toLowerCase();

    for (const [packageKey, keywords] of Object.entries(PACKAGE_KEYWORDS)) {
      for (const keyword of keywords) {
        if (text.includes(keyword.toLowerCase())) {
          return packageKey;
        }
      }
    }

    // Default: distribute evenly across all packages
    const packages = Object.keys(PACKAGE_KEYWORDS);
    const randomIndex = Math.floor(Math.random() * packages.length);
    return packages[randomIndex];
  }

  async updateDonationData(packageKey, donation) {
    try {
      // Load current data
      const currentData = JSON.parse(
        await fs.readFile(this.dataFilePath, "utf8")
      );

      // Check for duplicates
      const existingDonors = currentData.packages[packageKey].donors;
      const isDuplicate = existingDonors.some(
        (d) => d.paypalTransactionId === donation.paypalTransactionId
      );

      if (isDuplicate) {
        console.log("⚠️ Duplicate donation detected, skipping");
        return;
      }

      // Add new donation
      currentData.packages[packageKey].donors.push(donation);
      currentData.packages[packageKey].current += donation.amount;
      currentData.lastUpdated = new Date().toISOString();

      // Save updated data
      await fs.writeFile(
        this.dataFilePath,
        JSON.stringify(currentData, null, 2)
      );

      console.log(`✅ Updated ${packageKey} with ${donation.amount}€ donation`);
      console.log(`💰 New total: ${currentData.packages[packageKey].current}€`);
    } catch (error) {
      console.error("❌ Error updating donation data:", error);
      throw error;
    }
  }
}

// GitHub Actions webhook handler
async function handleGitHubWebhook() {
  const webhookPayload = process.env.GITHUB_WEBHOOK_PAYLOAD;

  if (!webhookPayload) {
    console.error("❌ No webhook payload found");
    process.exit(1);
  }

  try {
    const webhookData = JSON.parse(webhookPayload);
    const handler = new PayPalWebhookHandler();
    await handler.handleWebhook(webhookData);
    console.log("🎉 Webhook processed successfully");
  } catch (error) {
    console.error("💥 Error processing webhook:", error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  handleGitHubWebhook();
}

export default PayPalWebhookHandler;

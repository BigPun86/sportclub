# 🚀 Automated PayPal Donation Tracking Setup

This guide explains how to set up automated donation tracking that updates your website every hour with real PayPal donation data.

## 📋 Overview

The system works by:

1. **GitHub Actions** runs every hour (8 AM - 8 PM CET)
2. **Fetches donations** from PayPal API
3. **Categorizes donations** by package (Kabinen, Fassade, Waschküche)
4. **Auto-commits** updated data to your repository
5. **Website automatically shows** new donations and progress

## 🔧 Setup Instructions

### Step 1: Get PayPal API Credentials

1. **Go to PayPal Developer Console:**

   - Visit: https://developer.paypal.com/
   - Login with your PayPal business account

2. **Create a new App:**

   - Click "Create App"
   - App Name: `SCKW Donation Tracker`
   - Choose your business account
   - Select "Server" application type
   - Enable these features:
     - ✅ Transaction Search
     - ✅ Reporting

3. **Get your credentials:**
   - Copy `Client ID`
   - Copy `Client Secret`
   - Note: Keep these secure! Never share them publicly.

### Step 2: Configure GitHub Secrets

1. **Go to your GitHub repository:**

   - Navigate to `Settings` → `Secrets and variables` → `Actions`

2. **Add these Repository Secrets:**

   ```
   PAYPAL_CLIENT_ID: your_paypal_client_id_here
   PAYPAL_CLIENT_SECRET: your_paypal_client_secret_here
   PAYPAL_SANDBOX: false
   ```

   **For testing (optional):**

   - Set `PAYPAL_SANDBOX: true` to test with PayPal sandbox
   - Use sandbox credentials for testing

### Step 3: Test the Automation

1. **Manual Test:**

   - Go to `Actions` tab in your GitHub repository
   - Find "Update Donation Data" workflow
   - Click "Run workflow" → "Run workflow"

2. **Check the results:**
   - Watch the workflow run (takes ~2-3 minutes)
   - Check if `src/data/donationData.json` was updated
   - Verify your website shows the latest data

### Step 4: Customize Donation Categorization

The system automatically categorizes donations based on keywords in the donation message:

```javascript
// Keywords for each package
kabinen: ["kabine", "cabin", "umkleide", "changing"];
fassade: ["fassade", "facade", "fenster", "window", "außen", "outside"];
waschkueche: ["wasch", "wash", "trockner", "dryer", "laundry", "wäsche"];
```

**To customize keywords:**

1. Edit `scripts/fetch-donations.js`
2. Modify the `PACKAGE_KEYWORDS` object
3. Commit and push changes

## 📊 How Donation Categorization Works

### 1. **Keyword-based Categorization:**

If a donor includes keywords in their PayPal note:

- "Für die Kabinen" → Goes to **Kabinen** package
- "Fassade renovieren" → Goes to **Fassade** package
- "Neue Waschmaschine" → Goes to **Waschküche** package

### 2. **Default Distribution:**

If no keywords are found, donations are distributed evenly across all packages using a hash of the transaction ID.

### 3. **Anonymous Donations:**

Donors can request anonymity by:

- Including "anonym" in their PayPal note
- Not providing a name in PayPal

## 🔄 Automation Schedule

- **Runs every hour:** 8 AM - 8 PM (CET)
- **Checks last 7 days** of transactions
- **Prevents duplicates** using transaction IDs
- **Auto-commits** only when new donations are found

## 🛠️ Troubleshooting

### ❌ "PayPal authentication failed"

- Check if `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET` are correct
- Verify your PayPal app has "Transaction Search" enabled
- Make sure you're using a PayPal Business account

### ❌ "No donations found"

- Ensure your donation button is using the correct PayPal account
- Check if donations are completed (not pending)
- Verify donation subject includes "SC Konstanz-Wollmatingen"

### ❌ "Permission denied" during commit

- GitHub Actions has write permissions by default
- Check repository permissions in Settings → Actions → General

### ❌ Website not updating

- Check if the JSON file was updated in the repository
- Clear your browser cache
- Verify the website is deployed from the main branch

## 📈 Monitoring

### GitHub Actions Logs

- Go to `Actions` tab → "Update Donation Data"
- Click on any run to see detailed logs
- Look for messages like:
  - ✅ "PayPal authentication successful"
  - 💰 "New donation: Name (Amount€) → package"
  - 📊 "kabinen: 1200€ / 8000€ (15%)"

### Donation Data File

- Check `src/data/donationData.json` for updates
- Look at the `lastUpdated` timestamp
- Verify donor information is correct

## 🔒 Security

- ✅ **API credentials are encrypted** in GitHub Secrets
- ✅ **Never exposed** in client-side code
- ✅ **Automatic transaction deduplication** prevents double-counting
- ✅ **Privacy-friendly** anonymous donation support

## 🎯 Next Steps

1. **Test thoroughly** with small donations first
2. **Monitor the first few automatic runs** to ensure accuracy
3. **Customize donation categories** based on actual donor behavior
4. **Set up notifications** (optional) to get alerts for new donations

## 💡 Pro Tips

### Encourage Specific Donations

Tell your donors to include keywords in their PayPal notes:

- "Für die Kabinen - SC Konstanz-Wollmatingen"
- "Fassade renovieren - SCKW"
- "Neue Waschmaschine - Fürstenberg"

### Monitor Performance

- Check donation progress weekly
- Adjust goals if needed by updating `donationData.json`
- Share progress updates on social media

### Backup Data

The donation data is automatically backed up in your Git history, but consider:

- Periodic exports of the JSON data
- Screenshots of donation progress for social media

## 🆘 Support

If you encounter issues:

1. Check the GitHub Actions logs first
2. Verify all secrets are set correctly
3. Test with the PayPal sandbox environment
4. Review the categorization keywords

**The system is designed to be robust and handle edge cases, but monitoring the first few weeks of operation is recommended!** 🎉

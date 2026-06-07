/**
 * Holt Social-Media-Statistiken von der Meta Graph API (v25.0)
 * und schreibt sie nach public/social-stats.json.
 *
 * Benötigte Env-Vars (als GitHub Secrets):
 *   META_ACCESS_TOKEN      – Long-lived Page Access Token (60 Tage, wird refreshed)
 *   INSTAGRAM_ACCOUNT_ID   – IG Business Account ID (z.B. 17841400...)
 *   FACEBOOK_PAGE_ID       – FB Page ID
 *
 * Metriken (Graph API v25.0):
 *   IG: views (account-level), reach, follower_count
 *   FB: page_media_view, page_follows
 */

import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, "../public/social-stats.json");
const API_BASE = "https://graph.facebook.com/v25.0";

const TOKEN = process.env.META_ACCESS_TOKEN;
const IG_ID = process.env.INSTAGRAM_ACCOUNT_ID;
const FB_ID = process.env.FACEBOOK_PAGE_ID;

if (!TOKEN || !IG_ID || !FB_ID) {
  console.error(
    "Fehlende Env-Vars: META_ACCESS_TOKEN, INSTAGRAM_ACCOUNT_ID, FACEBOOK_PAGE_ID"
  );
  process.exit(1);
}

function daysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return Math.floor(d.getTime() / 1000);
}

async function graphGet(path, params = {}) {
  const url = new URL(`${API_BASE}${path}`);
  url.searchParams.set("access_token", TOKEN);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }
  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Graph API ${res.status}: ${body}`);
  }
  return res.json();
}

// Sum daily metric values over a date range
function sumDailyValues(data) {
  if (!data?.data) return 0;
  let total = 0;
  for (const metric of data.data) {
    if (metric.values) {
      for (const v of metric.values) {
        total += v.value ?? 0;
      }
    } else if (metric.total_value) {
      total += metric.total_value.value ?? 0;
    }
  }
  return total;
}

async function fetchIGInsights(since, until) {
  const [viewsData, reachData] = await Promise.all([
    graphGet(`/${IG_ID}/insights`, {
      metric: "views",
      period: "day",
      metric_type: "total_value",
      since: String(since),
      until: String(until),
    }),
    graphGet(`/${IG_ID}/insights`, {
      metric: "reach",
      period: "day",
      metric_type: "total_value",
      since: String(since),
      until: String(until),
    }),
  ]);

  return {
    views: sumDailyValues(viewsData),
    reach: sumDailyValues(reachData),
  };
}

async function fetchIGProfile() {
  const data = await graphGet(`/${IG_ID}`, {
    fields: "followers_count,media_count,name,username",
  });
  return {
    followers: data.followers_count ?? 0,
    posts: data.media_count ?? 0,
    username: data.username ?? "",
  };
}

async function fetchFBInsights(since, until) {
  const data = await graphGet(`/${FB_ID}/insights`, {
    metric: "page_media_view",
    period: "day",
    since: String(since),
    until: String(until),
  });
  return { views: sumDailyValues(data) };
}

async function fetchFBProfile() {
  const data = await graphGet(`/${FB_ID}`, {
    fields: "followers_count,fan_count,name",
  });
  return {
    followers: data.followers_count ?? data.fan_count ?? 0,
    name: data.name ?? "",
  };
}

function formatNumber(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(".", ",")} Mio.`;
  if (n >= 1_000) return `${Math.round(n / 1_000).toLocaleString("de-DE")}.000`;
  return n.toLocaleString("de-DE");
}

async function main() {
  const now = Math.floor(Date.now() / 1000);
  const periods = {
    days_28: { since: daysAgo(28), until: now },
    days_90: { since: daysAgo(90), until: now },
    days_365: { since: daysAgo(365), until: now },
  };

  console.log("Fetching Instagram & Facebook stats...");

  const [igProfile, fbProfile, ig28, ig90, ig365, fb28, fb90, fb365] =
    await Promise.all([
      fetchIGProfile(),
      fetchFBProfile(),
      fetchIGInsights(periods.days_28.since, periods.days_28.until),
      fetchIGInsights(periods.days_90.since, periods.days_90.until),
      fetchIGInsights(periods.days_365.since, periods.days_365.until),
      fetchFBInsights(periods.days_28.since, periods.days_28.until),
      fetchFBInsights(periods.days_90.since, periods.days_90.until),
      fetchFBInsights(periods.days_365.since, periods.days_365.until),
    ]);

  const combined28 = ig28.views + fb28.views;
  const combined365 = ig365.views + fb365.views;

  const stats = {
    fetchedAt: new Date().toISOString(),
    instagram: {
      username: igProfile.username,
      followers: igProfile.followers,
      posts: igProfile.posts,
      days_28: ig28,
      days_90: ig90,
      days_365: ig365,
    },
    facebook: {
      name: fbProfile.name,
      followers: fbProfile.followers,
      days_28: fb28,
      days_90: fb90,
      days_365: fb365,
    },
    combined: {
      days_28: { views: combined28 },
      days_90: { views: ig90.views + fb90.views },
      days_365: { views: combined365 },
    },
    // Vorformatierte KPIs für die Website
    kpis: [
      {
        value: formatNumber(combined365),
        label: "Social-Media-Views / Saison",
        description: `IG ${formatNumber(ig365.views)} + FB ${formatNumber(fb365.views)} (letzte 12 Monate)`,
      },
      {
        value: formatNumber(combined28),
        label: "Views / Monat aktuell",
        description: `IG ${formatNumber(ig28.views)} + FB ${formatNumber(fb28.views)} (letzte 28 Tage)`,
      },
      {
        value: formatNumber(ig28.reach),
        label: "Personen erreicht / Monat",
        description: "Instagram Reach (letzte 28 Tage)",
      },
      {
        value: formatNumber(igProfile.followers + fbProfile.followers),
        label: "Follower gesamt",
        description: `IG ${formatNumber(igProfile.followers)} + FB ${formatNumber(fbProfile.followers)}`,
      },
    ],
  };

  // Fallback beibehalten falls vorhanden
  let existing = {};
  try {
    existing = JSON.parse(readFileSync(OUTPUT_PATH, "utf-8"));
  } catch {
    // Datei existiert noch nicht
  }

  writeFileSync(OUTPUT_PATH, JSON.stringify(stats, null, 2), "utf-8");
  console.log(`Stats geschrieben: ${OUTPUT_PATH}`);
  console.log(
    `Combined: ${combined28.toLocaleString()} (28d) / ${combined365.toLocaleString()} (365d)`
  );
}

main().catch((err) => {
  console.error("Fehler:", err.message);
  process.exit(1);
});

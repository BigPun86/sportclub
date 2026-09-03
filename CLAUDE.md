> **Session-Start (Pflicht):** Lies `/Users/agrimm/Dev/CLAUDE.md` — Workflow, Tool-Routing, Review-Gate, Memory. Erst danach mit dem Task beginnen.

# sckw-sponsoring — Claude Context

Eigenes Projekt fuer Adels Fussballverein (SCKW).
Adel ist sportlicher Leiter und treibt Sponsoring voran.
Kein Kunde — persoenliches Projekt fuer den Verein.

## Stack

- Vite + React 19 + TypeScript + styled-components
- Routing: react-router-dom v7
- Deployment: GitHub Pages (gh-pages) → partner.sckw.de
- CI: GitHub Actions (Social-Stats-Cron)
- Zahlung: nur Ueberweisung (PayPal Sep 2026 entfernt, Gebuehren)

## Kontext

Sponsoring-Plattform/-Tool fuer den Verein.
Bei Unklarheiten ueber Features oder Anforderungen: Adel direkt fragen.

## Verein

- SC Konstanz-Wollmatingen e.V. (gegr. 1930)
- **Meister 2025/26 — Aufstieg in die Verbandsliga Suedbaden ab Saison 26/27**
- Social Media (Stand Jun 2026, 28 Tage): ~310K Views (IG 230K + FB 81K kombiniert), 21.4K Reach
- Social Media (Saison Jul 25 – Jun 26): ~1,3 Mio. Views, 100% organisch

## Sponsoring-Struktur (3-Saeulen-Modell)

1. **Exklusiv-Partnerschaften**: Hauptsponsor (15k), Stadionname (12k), Co-Sponsor I (9.5k, Trikot-Ruecken), Co-Sponsor II (8k, Trikot-Aermel)
2. **Werbeflaechen**: Banden (600/1.000), Banner (1.200/2.000), Buswerbung (600–2.000)
3. **Spieltag & Medien**: Ballspende (150/Spiel), Spielpraesentator (ab 250), Magazin-Inserate (250–1.000)

## Offene Aufgaben

### Meta Graph API Integration (Prioritaet: hoch, wartet auf Token)

- Script steht: `scripts/fetch-social-stats.mjs` (Meta Graph API v25.0)
- GitHub Actions Cron steht: `.github/workflows/fetch-social-stats.yml` (taeglich 08:30)
- Fallback-JSON: `public/social-stats.json` (hardcoded Werte, wird von API ueberschrieben)
- SponsoringV2Page laedt bereits aus JSON, faellt auf hardcoded zurueck
- **Fehlend**: 3 GitHub Secrets anlegen sobald Meta-App-Zugang da ist:
  - `META_ACCESS_TOKEN` (Long-Lived Page Token, 60 Tage, braucht Refresh-Logik)
  - `INSTAGRAM_ACCOUNT_ID`
  - `FACEBOOK_PAGE_ID`
- Danach Workflow manuell testen via Actions → Run workflow
- KPIs in `sponsoringData.ts` sind aktuell hardcoded als Fallback (Stand Jun 2026)

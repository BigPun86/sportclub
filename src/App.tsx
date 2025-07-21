import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SponsorBox from "./components/SponsorBox";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <h2 className="text-3xl font-bold text-center">Sponsoring 2025/2026</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SponsorBox
            title="🏆 Hauptsponsor"
            price="15.000 €/Jahr"
            status="✅ Vergeben"
            color="bg-yellow-100"
            benefits={[
              "Trikotbrust 1. Mannschaft",
              "2 Banden (3x1 m)",
              "Logo auf Präsentationsanzügen",
              "Großfläche am Eingang",
              "Anzeige im Stadionheft (U2/U4)",
              "5 Stadiondurchsagen",
              "Sichtbarkeit: Social, Print, Google",
            ]}
          />

          <SponsorBox
            title="🏟 Stadionpartner"
            price="10.000 €/Jahr"
            status="🟩 1 verfügbar"
            color="bg-blue-100"
            benefits={[
              "Namensrecht Stadion",
              "1 Bande + Werbeplane",
              "2 Social Media Posts/Monat",
              "1/1 Seite im Stadionheft",
              "Stadionansage jedes Heimspiel",
            ]}
          />

          <SponsorBox
            title="🥈 Co-Sponsor"
            price="8.000 €/Jahr"
            status="🟧 1 vergeben · 2 verfügbar"
            color="bg-orange-100"
            benefits={[
              "Trikotärmel",
              "1 Bande (3x1 m)",
              "1/2 Seite im Stadionheft",
              "2 Stadiondurchsagen",
              "Social Media je Spiel",
            ]}
          />

          <SponsorBox
            title="🥉 Silber"
            price="5.000 €/Jahr"
            status="🟧 1 vergeben · 3 verfügbar"
            color="bg-green-100"
            benefits={[
              "1 Bande (3x1 m, 6 Monate)",
              "1/4 Seite im Stadionheft",
              "Social Media-Erwähnung",
              "Werbeplane am Gelände",
            ]}
          />

          <SponsorBox
            title="🟫 Bronze"
            price="2.000 €/Jahr"
            status="🟩 Verfügbar"
            benefits={[
              "1 Bande (3x1 m, 6 Monate)",
              "Logo & Link auf Website",
              "Optional: CL-Abende + Social Media",
            ]}
          />

          <SponsorBox
            title="🟧 Bandenwerbung"
            price="800 €/Jahr"
            status="🟧 11 vergeben · ~19 verfügbar"
            benefits={[
              "3x1 m Bande am Hauptspielfeld",
              "Sichtbarkeit bei allen Heimspielen",
              "Option: Website-Link",
              "Einmalkosten: 70€/lfd. Meter für Herstellung",
            ]}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

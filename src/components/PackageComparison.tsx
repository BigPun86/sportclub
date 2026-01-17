import { useState } from "react";
import styled from "styled-components";
import sponsoringPakete from "../data/sponsoringPakete.json";
import SponsoringTable from "./SponsoringTable";

const ComparisonContainer = styled.div`
  margin-top: 2.5rem;
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #f0f0f0;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? "#e10073" : "transparent")};
  color: ${({ $active }) => ($active ? "white" : "#666")};
  border: none;
  padding: 0.875rem 1.5rem;
  font-weight: ${({ $active }) => ($active ? "800" : "600")};
  font-size: 0.95rem;
  cursor: pointer;
  border-radius: 8px 8px 0 0;
  transition: all 0.2s ease;
  position: relative;
  border-bottom: ${({ $active }) =>
    $active ? "3px solid #e10073" : "3px solid transparent"};

  &:hover {
    background: ${({ $active }) => ($active ? "#e10073" : "#f8f9fa")};
    color: ${({ $active }) => ($active ? "white" : "#e10073")};
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.75rem 1.2rem;
  }
`;

const TabContent = styled.div`
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TabNote = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 1.5rem;
  line-height: 1.5;
`;

type TabKey = "premium" | "lokal" | "starter";

const premiumPackages = sponsoringPakete.filter((pkg) =>
  ["15.000 €/Jahr", "12.000 €/Jahr", "9.500 €/Jahr"].includes(pkg.price)
);
const lokalPackages = sponsoringPakete.filter((pkg) =>
  ["5.000 €/Jahr", "2.000 €/Jahr", "800 €/Jahr"].includes(pkg.price)
);
const starterPackages = sponsoringPakete.filter((pkg) =>
  ["150 €/pro Spiel", "500 €/5 Spiele"].includes(pkg.price)
);

export default function PackageComparison() {
  const [activeTab, setActiveTab] = useState<TabKey>("premium");

  const tabs = [
    { key: "premium" as TabKey, label: "🏆 Premium", packages: premiumPackages },
    { key: "lokal" as TabKey, label: "🏢 Lokal", packages: lokalPackages },
    { key: "starter" as TabKey, label: "🌟 Starter", packages: starterPackages },
  ];

  const currentTab = tabs.find((t) => t.key === activeTab);

  return (
    <ComparisonContainer>
      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      <TabContent>
        {currentTab && <SponsoringTable packages={currentTab.packages} />}
        <TabNote>
          {activeTab === "premium" &&
            "Premium-Pakete kombinieren Trikot/Banner, Magazin-Präsenz und maximale Social-Media-Sichtbarkeit. ALLE Premium-Sponsoren erhalten Banner + Website."}
          {activeTab === "lokal" &&
            "Lokale Pakete bieten starke Sichtbarkeit bei Heimspielen + regelmäßige Online-Präsenz."}
          {activeTab === "starter" &&
            "Starter-Pakete sind ideal für den Einstieg ins Sponsoring - mit direkter Spieltags-Sichtbarkeit."}
        </TabNote>
      </TabContent>
    </ComparisonContainer>
  );
}

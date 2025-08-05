import styled from "styled-components";
import { useState, useEffect } from "react";
import donationDataJson from "../data/donationData.json";

// Types for donation data
interface DonationData {
  kabinen: {
    current: number;
    goal: number;
    donors: DonorComment[];
  };
  fassade: {
    current: number;
    goal: number;
    donors: DonorComment[];
  };
  waschkueche: {
    current: number;
    goal: number;
    donors: DonorComment[];
  };
}

interface DonorComment {
  name: string;
  amount: number;
  comment?: string;
  date?: string;
  anonymous?: boolean;
}

const TrackerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PackageTracker = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.15);
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProgressInfo = styled.div`
  margin-bottom: 1.5rem;
`;

const ProgressAmount = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;

  span:first-child {
    color: #059669;
  }
  span:last-child {
    color: #6b7280;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background-color: #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  background: linear-gradient(90deg, #10b981 0%, #059669 100%);
  width: ${(props) => Math.min(props.$progress, 100)}%;
  transition: width 0.8s ease-in-out;
  border-radius: 6px;
`;

const ProgressPercent = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
`;

const DonorsSection = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;

const DonorsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DonorsList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
`;

const DonorItem = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const DonorInfo = styled.div`
  flex: 1;
`;

const DonorName = styled.div`
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const DonorAmount = styled.span`
  font-weight: 600;
  color: #374151;
`;

const DonorComment = styled.div`
  color: #64748b;
  font-style: italic;
  line-height: 1.4;
`;

const DonorDate = styled.div`
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`;

const NoDonors = styled.div`
  text-align: center;
  color: #9ca3af;
  font-style: italic;
  padding: 1rem;
`;

const RefreshButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
  }
`;

const LastUpdateInfo = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  color: #6b7280;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    font-size: 0.7rem;
    padding: 0.4rem 0.8rem;
  }
`;

// Convert JSON data to component format
const convertDonationData = (): DonationData => {
  const data = donationDataJson;
  return {
    kabinen: {
      current: data.packages.kabinen.current,
      goal: data.packages.kabinen.goal,
      donors: data.packages.kabinen.donors,
    },
    fassade: {
      current: data.packages.fassade.current,
      goal: data.packages.fassade.goal,
      donors: data.packages.fassade.donors,
    },
    waschkueche: {
      current: data.packages.waschkueche.current,
      goal: data.packages.waschkueche.goal,
      donors: data.packages.waschkueche.donors,
    },
  };
};

interface DonationTrackerProps {
  data?: DonationData;
  realTime?: boolean;
}

export default function DonationTracker({
  data = convertDonationData(),
  realTime = false,
}: DonationTrackerProps) {
  const [donationData, setDonationData] = useState<DonationData>(data);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Function to fetch latest data from GitHub
  const fetchLatestData = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/BigPun86/sportclub/main/src/data/donationData.json",
        {
          cache: "no-cache",
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
          },
        }
      );

      if (response.ok) {
        const freshData = await response.json();
        const convertedData = {
          kabinen: {
            current: freshData.packages.kabinen.current,
            goal: freshData.packages.kabinen.goal,
            donors: freshData.packages.kabinen.donors,
          },
          fassade: {
            current: freshData.packages.fassade.current,
            goal: freshData.packages.fassade.goal,
            donors: freshData.packages.fassade.donors,
          },
          waschkueche: {
            current: freshData.packages.waschkueche.current,
            goal: freshData.packages.waschkueche.goal,
            donors: freshData.packages.waschkueche.donors,
          },
        };

        setDonationData(convertedData);
        setLastUpdate(new Date());
        console.log("✅ Spendendaten aktualisiert!");
      }
    } catch (error) {
      console.error("❌ Fehler beim Laden der Spendendaten:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Auto-refresh for real-time mode
  useEffect(() => {
    if (!realTime) return;

    const interval = setInterval(() => {
      fetchLatestData();
    }, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, [realTime]);

  const getPackageIcon = (packageKey: string): string => {
    switch (packageKey) {
      case "kabinen":
        return "🔧";
      case "fassade":
        return "🎨";
      case "waschkueche":
        return "🧺";
      default:
        return "💰";
    }
  };

  const getPackageName = (packageKey: string): string => {
    switch (packageKey) {
      case "kabinen":
        return "Kabinen sanieren";
      case "fassade":
        return "Fassade & Fenster";
      case "waschkueche":
        return "Waschküche modernisieren";
      default:
        return packageKey;
    }
  };

  return (
    <>
      <TrackerContainer>
        {Object.entries(donationData).map(([packageKey, packageData]) => {
          const progress = (packageData.current / packageData.goal) * 100;

          return (
            <PackageTracker key={packageKey}>
              <PackageTitle>
                {getPackageIcon(packageKey)} {getPackageName(packageKey)}
              </PackageTitle>

              <ProgressInfo>
                <ProgressAmount>
                  <span>{packageData.current.toLocaleString("de-DE")} €</span>
                  <span>{packageData.goal.toLocaleString("de-DE")} €</span>
                </ProgressAmount>
                <ProgressBar>
                  <ProgressFill $progress={progress} />
                </ProgressBar>
                <ProgressPercent>
                  {Math.round(progress)}% erreicht
                </ProgressPercent>
              </ProgressInfo>

              <DonorsSection>
                <DonorsTitle>
                  💝 Spender ({packageData.donors.length})
                </DonorsTitle>
                <DonorsList>
                  {packageData.donors.length > 0 ? (
                    packageData.donors
                      .slice()
                      .reverse()
                      .map((donor: DonorComment, index: number) => (
                        <DonorItem key={index}>
                          <DonorInfo>
                            <DonorName>
                              {donor.anonymous
                                ? "Anonymer Spender"
                                : donor.name}
                            </DonorName>
                            {donor.comment && (
                              <DonorComment>"{donor.comment}"</DonorComment>
                            )}
                            {donor.date && <DonorDate>{donor.date}</DonorDate>}
                          </DonorInfo>
                          <DonorAmount>
                            {donor.amount.toLocaleString("de-DE")} €
                          </DonorAmount>
                        </DonorItem>
                      ))
                  ) : (
                    <NoDonors>Noch keine Spenden 🤗</NoDonors>
                  )}
                </DonorsList>
              </DonorsSection>
            </PackageTracker>
          );
        })}
      </TrackerContainer>

      <RefreshButton
        onClick={fetchLatestData}
        disabled={isRefreshing}
        title="Spendendaten aktualisieren"
      >
        {isRefreshing ? "🔄" : "🔄"}
        {isRefreshing ? "Lade..." : "Aktualisieren"}
      </RefreshButton>

      <LastUpdateInfo>
        Letztes Update: {lastUpdate.toLocaleTimeString("de-DE")}
      </LastUpdateInfo>
    </>
  );
}

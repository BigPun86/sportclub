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
  date: string;
  anonymous?: boolean;
}

const TrackerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const PackageTracker = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border: 2px solid #e2e8f0;
`;

const PackageTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #059669;
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
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ $progress: number }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, #059669, #10b981);
  transition: width 0.3s ease;
`;

const ProgressPercent = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #64748b;
  margin-top: 0.5rem;
`;

const DonorsSection = styled.div`
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`;

const DonorsTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`;

const DonorsList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const DonorItem = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 0.75rem;
  font-size: 0.9rem;
`;

const DonorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const DonorName = styled.span`
  font-weight: 600;
  color: #059669;
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
  const [donationData] = useState<DonationData>(data);

  // Simulate real-time updates (replace with actual PayPal API calls)
  useEffect(() => {
    if (!realTime) return;

    const interval = setInterval(() => {
      // Here you would fetch from your PayPal API
      // Future implementation: fetchDonationData().then(setDonationData);
      console.log("Fetching donation updates...");
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
                💚 Unterstützer ({packageData.donors.length})
              </DonorsTitle>
              <DonorsList>
                {packageData.donors.length > 0 ? (
                  packageData.donors.map(
                    (donor: DonorComment, index: number) => (
                      <DonorItem key={index}>
                        <DonorHeader>
                          <DonorName>
                            {donor.anonymous ? "🕶️ Anonymous" : donor.name}
                          </DonorName>
                          <DonorAmount>{donor.amount} €</DonorAmount>
                        </DonorHeader>
                        {donor.comment && (
                          <DonorComment>"{donor.comment}"</DonorComment>
                        )}
                        <DonorDate>
                          {new Date(donor.date).toLocaleDateString("de-DE")}
                        </DonorDate>
                      </DonorItem>
                    )
                  )
                ) : (
                  <NoDonors>Seien Sie der erste Spender! 🌟</NoDonors>
                )}
              </DonorsList>
            </DonorsSection>
          </PackageTracker>
        );
      })}
    </TrackerContainer>
  );
}

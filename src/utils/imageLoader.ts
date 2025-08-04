// Central image management system using import.meta.glob
// This loads all images from assets and organizes them by category

// Load all gallery images
const galleryModules = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,gif,webp}",
  { eager: true, import: "default" }
);

// Load all sponsor images
const sponsorModules = import.meta.glob(
  "../assets/sponsors/*.{jpg,jpeg,png,gif,webp}",
  { eager: true, import: "default" }
);

// Load all renovation images
const renovationModules = import.meta.glob(
  "../assets/renovation/*.{jpg,jpeg,png,gif,webp}",
  { eager: true, import: "default" }
);

// Utility function to get filename from path
const getFilename = (path: string): string => {
  return path.split("/").pop()?.toLowerCase() || "";
};

// Utility function to get folder name from gallery path
const getGalleryFolder = (path: string): string => {
  const match = path.match(/gallery\/(.*?)\//);
  return match ? match[1] : "Sonstige";
};

// Shuffle function for randomizing images
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Gallery Images - organized by folder with shuffling and custom sorting
export const getGalleryImages = (): Record<string, string[]> => {
  const groups: Record<string, string[]> = {};
  Object.entries(galleryModules).forEach(([path, url]) => {
    const folder = getGalleryFolder(path);
    if (!groups[folder]) groups[folder] = [];
    groups[folder].push(url as string);
  });

  // Shuffle images within each folder
  Object.keys(groups).forEach((folder) => {
    groups[folder] = shuffleArray(groups[folder]);
  });

  // Sort folders in specified order: JFV, Cheerleading, Damen, Herren
  const sortedGroups: Record<string, string[]> = {};
  const folderOrder = ["jfv", "cheerleading", "damen", "herren"];

  // Add folders in specified order
  folderOrder.forEach((folder) => {
    if (groups[folder]) {
      sortedGroups[folder] = groups[folder];
    }
  });

  // Add any remaining folders that weren't in the specified order
  Object.keys(groups).forEach((folder) => {
    if (!folderOrder.includes(folder.toLowerCase())) {
      sortedGroups[folder] = groups[folder];
    }
  });

  return sortedGroups;
};

// Sponsor Images - organized by filename
export const getSponsorImages = (): Record<string, string> => {
  const sponsors: Record<string, string> = {};
  Object.entries(sponsorModules).forEach(([path, url]) => {
    const filename = getFilename(path);
    sponsors[filename] = url as string;
  });
  return sponsors;
};

// Renovation Images - organized by category
export const getRenovationImages = (): Record<
  string,
  Array<{ src: string; alt: string }>
> => {
  const images: Record<string, Array<{ src: string; alt: string }>> = {
    kabinen: [],
    fassade: [],
    waschkueche: [],
  };

  Object.entries(renovationModules).forEach(([path, url]) => {
    const filename = getFilename(path);

    if (filename.includes("sitting")) {
      images.kabinen.push({
        src: url as string,
        alt: "Sitzbereich in den Kabinen",
      });
    } else if (
      filename.includes("outside") ||
      filename.includes("cabin-window")
    ) {
      if (filename.includes("outside")) {
        images.fassade.push({
          src: url as string,
          alt: "Außenfassade des Fürstenberg",
        });
      } else if (filename.includes("cabin-window")) {
        images.fassade.push({
          src: url as string,
          alt: "Fenster in den Kabinen",
        });
      }
    } else if (
      filename.includes("toilet") ||
      filename.includes("shower") ||
      filename.includes("wash")
    ) {
      if (filename.includes("toilet")) {
        images.waschkueche.push({ src: url as string, alt: "Toilette" });
      } else if (filename.includes("shower")) {
        images.waschkueche.push({ src: url as string, alt: "Dusche" });
      } else {
        images.waschkueche.push({ src: url as string, alt: "Waschküche" });
      }
    }
  });

  return images;
};

// Hero Background Images - get specific hero images by name
export const getHeroImage = (imageName: string): string => {
  const heroModules = import.meta.glob(
    "../assets/gallery/**/*.{jpg,jpeg,png,gif,webp}",
    { eager: true, import: "default" }
  );

  const found = Object.entries(heroModules).find(([path]) =>
    path.includes(imageName)
  );

  return found ? (found[1] as string) : "";
};

// Convenience function to get a specific gallery hero image
export const getGalleryHeroImage = (
  folder: string,
  imageNumber: number
): string => {
  return getHeroImage(`${folder}/${folder}_${imageNumber}.jpg`);
};

// Export all images as a single object for easy access
export const images = {
  gallery: getGalleryImages(),
  sponsors: getSponsorImages(),
  renovation: getRenovationImages(),
  getHero: getHeroImage,
  getGalleryHero: getGalleryHeroImage,
};

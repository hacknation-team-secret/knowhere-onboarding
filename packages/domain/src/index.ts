export type ProfileDraft = {
  firstName: string;
  homeCity: string;
  email: string;
  passportProfile: string;
  instagramProfile: string;
  tiktokProfile: string;
};

export type PassportArtifact = {
  travelerName: string;
  brandName: string;
  vibeLine: string[];
  preferredDestination: string;
  issueDate: string;
  expiryDate: string;
  credo: string;
  visitedCities: string[];
  savedPlaces: string[];
  socialHandles: string[];
  machineLineOne: string;
  machineLineTwo: string;
};

export const defaultProfileDraft: ProfileDraft = {
  firstName: "",
  homeCity: "",
  email: "",
  passportProfile: "",
  instagramProfile: "",
  tiktokProfile: ""
};

function extractVibes(passportProfile: string) {
  const lower = passportProfile.toLowerCase();
  const vibes: string[] = [];

  if (lower.includes("bike") || lower.includes("cycling")) vibes.push("Route Chaser");
  if (lower.includes("coffee") || lower.includes("cafe")) vibes.push("Cafe Scout");
  if (lower.includes("book") || lower.includes("bookstore")) vibes.push("Story Collector");
  if (lower.includes("local")) vibes.push("Local Seeker");
  if (lower.includes("food") || lower.includes("restaurant")) vibes.push("Table Wanderer");
  if (lower.includes("museum") || lower.includes("gallery")) vibes.push("Culture Hunter");
  if (lower.includes("walk")) vibes.push("Slow Roamer");
  if (lower.includes("night")) vibes.push("Afterglow Finder");
  if (lower.includes("beach") || lower.includes("ocean") || lower.includes("water")) vibes.push("Water Lover");

  return vibes.slice(0, 3);
}

function normalizeHandle(value: string) {
  return value
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/^instagram\.com\//, "@")
    .replace(/^tiktok\.com\/@/, "@")
    .replace(/\/$/, "");
}

export function buildPassportArtifact(profile: ProfileDraft): PassportArtifact {
  const vibes = extractVibes(profile.passportProfile);
  const socialHandles = [profile.instagramProfile, profile.tiktokProfile]
    .filter(Boolean)
    .map(normalizeHandle);
  const fallbackVibes = ["City Dreamer", "Detour Ready", "Memory Maker"];
  const travelerName = profile.firstName.trim().toUpperCase() || "TRAVELER";
  const preferredDestination = profile.homeCity.trim() ? "Anywhere\nEverywhere" : "Anywhere\nEverywhere";
  const issueDate = "Always";

  const primaryVibes = vibes.length > 0 ? vibes : fallbackVibes;
  const machineName = travelerName.replace(/\s+/g, "<");
  const machineVibes = primaryVibes.join("<").toUpperCase().replace(/\s+/g, "");

  return {
    travelerName,
    brandName: "KNOWHERE",
    vibeLine: primaryVibes,
    preferredDestination,
    issueDate,
    expiryDate: "Never",
    credo: "collecting moments not things",
    visitedCities: [profile.homeCity || "Boston", "Boston"],
    savedPlaces: ["First Detour pending", "City rituals loading"],
    socialHandles,
    machineLineOne: `P<KNOWHERE<<${machineName}<<<<<<<<<<<<`,
    machineLineTwo: `${machineVibes}<<<<<<<<<<<<<<<<<<<<`
  };
}

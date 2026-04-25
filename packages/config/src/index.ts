export const launchCity = {
  id: "boston",
  displayName: "Boston",
  reasons: ["dense and walkable", "tech-savvy users", "complex transit system"]
} as const;

export const roadmapPhases = [
  {
    id: "phase-1",
    name: "Discovery",
    focus: "Chat and map parity with lightweight personalization"
  },
  {
    id: "phase-2",
    name: "Intelligence",
    focus: "Memory engine and social signals"
  },
  {
    id: "phase-3",
    name: "Execution",
    focus: "Bookings, transport orchestration, and routing"
  },
  {
    id: "phase-4",
    name: "Wallet",
    focus: "Payments, passes, identity, and city access"
  },
  {
    id: "phase-5",
    name: "City OS",
    focus: "Incentives, city integrations, and intelligence loops"
  }
] as const;

export const featureFlags = {
  walletWaitlistEnabled: true,
  socialLayerPreview: true,
  cityIncentivesPreview: false
} as const;

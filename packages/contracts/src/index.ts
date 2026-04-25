export type ApiEnvelope<T> = {
  data: T;
  requestId: string;
  timestamp: string;
};

export type ChatMessageRequest = {
  userId: string;
  message: string;
  location?: {
    lat: number;
    lng: number;
  };
};

export type PlaceDiscoveryRequest = {
  userId: string;
  query?: string;
  mood?: string;
  maxResults?: number;
};

export type WalletPayRequest = {
  userId: string;
  merchantId: string;
  amountCents: number;
  currency: string;
};

export type CreateProfileRequest = {
  firstName: string;
  homeCity: string;
  email: string;
  travelFrequency: "weekly" | "monthly" | "occasionally";
  onboardingAnswers: Record<string, string>;
};

export type NavigationOptionsRequest = {
  userId: string;
  origin: string;
  destination: string;
  modePreference?: "walk" | "transit" | "bike" | "rideshare";
};

export type BookingReserveRequest = {
  userId: string;
  placeId: string;
  partySize: number;
  scheduledFor: string;
};

export type UserMemorySnapshot = {
  preferences: string[];
  recentVisits: string[];
  spendingStyle: string;
  trustMode: string;
};

export const endpoints = {
  chatMessage: "/chat/message",
  placeDiscover: "/places/discover",
  walletPay: "/wallet/pay",
  walletPasses: "/wallet/passes",
  navigationOptions: "/navigation/options",
  bookingsReserve: "/bookings/reserve",
  userMemory: "/user/memory",
  profileCreate: "/user/profile"
} as const;

export type PersonaId =
  | "urban-explorer"
  | "efficient-professional"
  | "tourist"
  | "budget-optimizer";

export type OnboardingQuestionId =
  | "persona"
  | "city-goal"
  | "mobility-style"
  | "budget-comfort"
  | "wallet-readiness"
  | "privacy-trust";

export type OnboardingOption = {
  id: string;
  label: string;
  description: string;
};

export type OnboardingQuestion = {
  id: OnboardingQuestionId;
  title: string;
  description: string;
  options: OnboardingOption[];
};

export type OnboardingAnswerMap = Record<OnboardingQuestionId, string>;

export type ProfileDraft = {
  firstName: string;
  homeCity: string;
  email: string;
  travelFrequency: "weekly" | "monthly" | "occasionally";
};

export const personas: Array<{ id: PersonaId; label: string; focus: string }> = [
  {
    id: "urban-explorer",
    label: "Urban Explorer",
    focus: "Spontaneous discovery with strong local flavor and social proof"
  },
  {
    id: "efficient-professional",
    label: "Efficient Professional",
    focus: "Fast, low-friction decisions between meetings, commutes, and plans"
  },
  {
    id: "tourist",
    label: "Tourist",
    focus: "Guided city confidence without needing to know local context"
  },
  {
    id: "budget-optimizer",
    label: "Budget Optimizer",
    focus: "Transparent pricing, rewards, and value-aware movement"
  }
];

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "persona",
    title: "How do you usually show up in a city?",
    description: "We use this as the starting lens for recommendations and pacing.",
    options: personas.map((persona) => ({
      id: persona.id,
      label: persona.label,
      description: persona.focus
    }))
  },
  {
    id: "city-goal",
    title: "What do you want Knowhere to optimize first?",
    description: "This tells the copilot what a great day feels like for you.",
    options: [
      {
        id: "discover-hidden-gems",
        label: "Find local gems",
        description: "Prioritize surprising places with strong local signal."
      },
      {
        id: "save-time",
        label: "Save time",
        description: "Reduce decision fatigue and keep every move efficient."
      },
      {
        id: "stretch-budget",
        label: "Stretch my budget",
        description: "Surface rewards, lower-cost routing, and value-first options."
      }
    ]
  },
  {
    id: "mobility-style",
    title: "How do you prefer moving through the city?",
    description: "Mobility preference shapes routing and execution choices.",
    options: [
      {
        id: "walk-transit",
        label: "Walk + transit",
        description: "Lean on trains, buses, and short walks."
      },
      {
        id: "bike-micromobility",
        label: "Bike + micromobility",
        description: "Prefer scooters, bikes, and flexible short hops."
      },
      {
        id: "rideshare-first",
        label: "Rideshare first",
        description: "Optimize around ride dispatch and tight timing."
      }
    ]
  },
  {
    id: "budget-comfort",
    title: "What spending style fits you best?",
    description: "We use this to tune recommendations without making them feel generic.",
    options: [
      {
        id: "value-led",
        label: "Value led",
        description: "Good options that feel smart and affordable."
      },
      {
        id: "balanced",
        label: "Balanced",
        description: "Mix convenience with price awareness."
      },
      {
        id: "premium",
        label: "Premium convenience",
        description: "Pay a bit more when the experience is worth it."
      }
    ]
  },
  {
    id: "wallet-readiness",
    title: "How ready are you for one-tap city payments?",
    description: "Knowhere's wallet will eventually unify transport, venues, and rewards.",
    options: [
      {
        id: "ready-now",
        label: "Ready now",
        description: "I want payments, passes, and rewards in one place."
      },
      {
        id: "curious",
        label: "Curious but cautious",
        description: "Show me the value before I connect everything."
      },
      {
        id: "not-yet",
        label: "Not yet",
        description: "Discovery first, payments later."
      }
    ]
  },
  {
    id: "privacy-trust",
    title: "What level of personalization feels right?",
    description: "Trust matters. This helps us set the right default privacy posture.",
    options: [
      {
        id: "full-context",
        label: "Full context",
        description: "Use my history to make the experience feel deeply personalized."
      },
      {
        id: "smart-defaults",
        label: "Smart defaults",
        description: "Use recent context, but keep the profile lightweight."
      },
      {
        id: "minimal-data",
        label: "Minimal data",
        description: "Keep storage lean and ask before sharing more."
      }
    ]
  }
];

export const defaultProfileDraft: ProfileDraft = {
  firstName: "",
  homeCity: "",
  email: "",
  travelFrequency: "monthly"
};

export const travelFrequencyOptions: Array<{
  id: ProfileDraft["travelFrequency"];
  label: string;
  description: string;
}> = [
  {
    id: "weekly",
    label: "Weekly",
    description: "I move through cities constantly and want speed."
  },
  {
    id: "monthly",
    label: "Monthly",
    description: "I travel enough that memory and personalization matter."
  },
  {
    id: "occasionally",
    label: "Occasionally",
    description: "I want confidence when I show up somewhere unfamiliar."
  }
];

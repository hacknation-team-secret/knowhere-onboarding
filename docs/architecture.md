# Knowhere architecture notes

## Product framing

Knowhere is built around a single loop:

Intent -> Recommendation -> Decision -> Transaction -> Movement -> Feedback -> Learning

The onboarding flow in this repo captures the first durable inputs that power that loop:

- user archetype
- exploration style
- mobility preferences
- budget comfort
- wallet readiness
- privacy posture

## Frontend

- Mobile-first React Native app
- Persistent conversational entry point after onboarding
- Map home, chat, wallet, place detail, and transport as the primary future surfaces

## Shared packages

- `@knowhere/domain`: source of truth for personas, onboarding steps, and product language
- `@knowhere/contracts`: request and response shapes for chat, places, wallet, navigation, bookings, and memory
- `@knowhere/config`: launch settings for Boston, product roadmap phases, and experimental flags
- `@knowhere/ui`: reusable components and design tokens

## Planned services

- User Service
- AI Orchestration
- Memory Engine
- Places Service
- Wallet Service
- Payment Service
- Booking Service
- Navigation Service
- Social Service
- City Data Service

## First integration path

1. Finish onboarding persistence
2. Connect onboarding output to profile creation
3. Add chat handoff after completion
4. Light up personalized map home
5. Add wallet setup and payment instrumentation


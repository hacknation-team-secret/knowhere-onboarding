# Knowhere

Knowhere is an AI-native city interface that turns intent into action across discovery, movement, payments, booking, and urban services.

This repo starts with onboarding and profile creation, plus the shared package boundaries we will need as the product grows into the broader city OS described in the PRD.

## Workspace

- `apps/mobile`: React Native onboarding and profile creation experience
- `packages/ui`: shared presentational primitives and tokens
- `packages/domain`: product concepts, personas, and onboarding state
- `packages/contracts`: API contracts for the first backend boundaries
- `packages/config`: launch city, product phases, and feature flags
- `docs/architecture.md`: service map and implementation notes from the PRD

## Product focus

This first milestone is optimized around onboarding users into Knowhere's core promise and turning that into a usable profile:

- tell us who you are
- tell us how you move through a city
- capture preference and budget signals
- create a lightweight account profile
- set up wallet readiness
- earn trust around privacy and personalization

## Getting started

1. Install dependencies with `npm.cmd install`
2. Start the mobile app with `npm.cmd run dev:mobile`

## Assumptions in this scaffold

- Frontend is React Native via Expo
- Product surface starts on mobile
- Onboarding is the first working vertical
- Backend services remain contract-first for now

---
name: product-designer
description: Use when designing or refining Knowhere consumer product surfaces, especially Passport onboarding, the generated passport artifact, City Pulse, saved-place flows, and other brand-sensitive mobile UI. Apply this skill when the work needs to follow Knowhere's warm travel-scrapbook aesthetic, product language, and passport-specific interaction rules.
---

# Product Designer

Use this skill when working on Knowhere's consumer-facing product experience.

## Goals

- Make Knowhere feel like a personal city passport: part travel scrapbook, part local guide, part quietly intelligent city companion.
- Keep the product sunlit, collected, personal, slightly magical, and useful without feeling corporate.
- Treat the passport as a memory artifact, not a profile card or dashboard widget.

## Brand Signals

- Core line: `Know where to go.`
- Emotional tone: warm, curious, practical, lightly poetic.
- Avoid generic AI, SaaS, or chatbot-first aesthetics.
- Avoid neon gradients, heavy purple/blue palettes, and overly polished luxury travel styling.

## Visual Rules

- Backgrounds should stay warm and light.
- Let photography carry the emotion.
- Prefer paper textures, passport-stamp cues, ticket-stub details, and collected-memory layouts.
- Use serif typography sparingly for special moments and sans-serif for utility UI.
- The passport should feel tactile and ceremonial, not like a settings panel.

## Color Use

- `#F7F2E8` Passport Paper: app foundation
- `#FFFBF3` Soft Paper: cards and sheets
- `#1D1B16` Deep Ink: primary text
- `#68645B` Faded Ink: secondary text
- `#DDD4C5` Fine Line: borders and dividers
- `#2F7F86` Ocean Glass: primary interactive color
- `#7FA6C7` Harbor Blue: calm secondary surfaces
- `#556B3E` Moss Green: nature and saved states
- `#D8A84F` Sunlit Gold: highlights and stamps
- `#C45A43` Stamp Coral: stamp moments and energetic accents
- `#A55436` Canyon Clay: warm travel accents
- `#8B2F49` Jewel Ruby: rare discovery accents

Use jewel tones sparingly. Keep surfaces mostly warm paper tones.

## Typography

- Brand and display moments: `Fraunces` if available, otherwise `Georgia`
- UI and body: `Inter`, otherwise `system-ui`
- Use serif for hero titles, passport titles, detour titles, and editorial moments only.
- Avoid all-caps except for tiny labels, stamps, or passport metadata.
- Do not use negative letter spacing.

## Product Language

Prefer:

- Passport
- Detour
- Stamp
- City Pulse
- Saved
- Memory
- Ask Knowhere
- Add city
- Mark complete

Avoid:

- Deals
- Coupons
- Campaigns
- Ads
- Merchant marketplace
- User acquisition

## Passport Rules

- The finished passport should take visual inspiration from a real passport page.
- Include a strong photo moment when available.
- Prefer auto-filled social avatar imagery if the product has a social handle.
- Use label/value hierarchy like a travel document.
- Include collectible stamp moments and machine-readable lines.
- Keep the final passport clean: once generated, do not keep onboarding prompt text or social-link form fields visible on the generated passport screen.
- The passport screen should foreground the artifact first and supporting memory data second.

## Onboarding Rules

- Onboarding should feel guided and low-friction.
- The primary action is generating a Knowhere Passport Profile using a prewritten LLM prompt.
- The generated profile is the raw material; the passport artifact is the ceremonial output.
- Forms should be visually softened and broken up with strong hierarchy, not presented as dense admin blocks.

## Layout Patterns

- Mobile first.
- Large visual moments.
- Card stacks should feel like saved objects.
- Passport pages can be framed as stacked paper cards or full-bleed document panels.
- Avoid dashboard density on consumer screens.

## Motion Guidance

- Motion should feel calm and tactile.
- Good examples: card settling, stamp press, route drawing, chips appearing softly.
- Avoid gamified bouncing or flashy tech transitions.

## Workflow

1. Start from the current product surface and identify what feels too corporate, too generic, or too sparse.
2. Rebuild hierarchy around one emotional anchor:
   - Passport artifact
   - Detour card
   - City Pulse context
   - Saved memory grid
3. Tighten typography, spacing, and paper/photo contrast before adding extra decoration.
4. Use stamp, gold, coral, and texture accents only where they make the artifact feel collectible.
5. After implementation, verify that:
   - the screen still works on mobile-sized layouts
   - the final passport state hides onboarding scaffolding
   - the design reads as Knowhere rather than a generic travel app

## Repo Context

- Product requirements live in `docs/PRD.md`.
- The current onboarding and passport UI lives in `apps/mobile/App.tsx`.
- Shared visual primitives live in `packages/ui/src/index.tsx`.

When editing these surfaces, preserve the feeling that the city is opening itself up one Detour at a time.

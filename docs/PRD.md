# Knowhere PRD

This document is the working product requirements document for the `knowhere-onboarding` repo.

Coding agents should treat this file as the main source of truth for product scope, terminology, MVP boundaries, and build order unless a newer product decision explicitly overrides it.

## Hackathon Build Order

1. Create static Boston dataset: city, vendor, events.
2. Fetch or mock Bluebikes station availability.
3. Build Passport onboarding.
4. Build City Pulse / Map Home.
5. Implement structured Detour generation.
6. Build Detour detail and route view.
7. Build Passport tab with QR perk and stamp.
8. Build Merchant Dashboard.
9. Add Ask Knowhere refinement.
10. Polish demo story, visuals, and sample data.

## 1. Executive Summary

Knowhere is an AI-native city interface that helps people know where to go before they search.

It replaces fragmented urban experiences, such as discovery, navigation, offers, bookings, transit, wallet passes, and local recommendations, with one contextual system that understands the user and dynamically orchestrates their movement through a city.

Where traditional apps such as Google Maps, Apple Wallet, Uber, Yelp, and OpenTable operate as disconnected utilities, Knowhere functions as a real-time decision engine plus city wallet.

Knowhere combines:

- Personalized discovery
- Real-time city context
- Detour generation
- Transportation-aware routing
- Local perks and rewards
- Passport-style wallet objects
- Merchant demand tools

### Core Thesis

People do not want more apps. They want outcomes:

What should I do right now, and can you make it happen?

What if your city knew exactly what you needed before you searched for it?

Knowhere makes visitors feel like regulars and helps locals rediscover their city.

### Brand Promise

Know where to go.

### Product Loop

Knowhere handles the full loop:

Intent -> Recommendation -> Decision -> Movement -> Redemption -> Feedback -> Learning

For the MVP, this loop is expressed through personalized Detours, Passport passes, Bluebikes-aware routing, and mock local perks.

## 2. Product Vision

Knowhere should become the operating system for city experiences.

For users:

A personal AI city copilot that helps them decide what to do, where to go, how to get there, and what to redeem.

For cities:

A real-time behavioral intelligence layer that can understand demand, reduce congestion, and incentivize movement.

For businesses:

A demand, identity, and rewards platform that helps local merchants reach nearby people at the right moment.

Long-term:

Knowhere becomes the interface between humans and physical environments.

## 3. Problem Statement

### 3.1 Fragmented Urban Stack

Users jump between disconnected tools:

- Maps for discovery
- Uber/Lyft for rides
- Bluebikes or transit apps for mobility
- OpenTable or Resy for bookings
- Apple Wallet for tickets and passes
- Yelp, TikTok, Reddit, and Google for social proof

No unified system connects discovery, decision-making, movement, redemption, and memory.

### 3.2 No Personalization Layer

Maps show everything, not what matters to the specific user in the specific moment.

Users often have intent before they have a search query:

- "I have 90 minutes before dinner."
- "I want something local, not touristy."
- "It is about to rain."
- "My train is delayed."
- "I want to bike somewhere nearby."
- "I want to find a place my friend and I can meet."

### 3.3 Discovery Does Not Equal Action

Even after finding something, users still need to:

- Compare options
- Navigate
- Book
- Pay
- Redeem
- Coordinate with friends
- Remember where they went

### 3.4 No Meaningful Feedback Loop

Most city apps do not learn deeply from:

- Places visited
- Detours completed
- Offers redeemed
- Preferences over time
- Mobility choices
- Spending, if opted in
- Social signals, if opted in

### 3.5 Cities Lack Real-Time Interfaces

Cities and local businesses struggle to:

- Influence behavior dynamically
- Redistribute demand
- Reduce congestion
- Support small businesses
- Promote under-visited neighborhoods
- Understand local demand in real time

## 4. Product Pillars

### 4.1 Passport Onboarding

Knowhere starts by creating a lightweight city Passport for each user. Onboarding should feel seamless, expressive, and preference-led, not like a form or multi-step quiz.

Primary prompt:

- Describe your travel style

Users can respond by:

- Copying a prewritten Knowhere prompt into the LLM of their choice
- Pasting in saved places, travel notes, memories, lists, restaurant names, neighborhoods, links, social posts, or random vibes
- Bringing the generated profile back into Knowhere
- Linking Instagram and/or TikTok profiles that reflect their travel taste

Lightweight profile fields:

- First name
- Home city
- Email

Output:

- Personalized Knowhere Passport profile
- Generated Passport artifact that becomes the user's source of truth
- Saved LLM-generated traveler profile
- Optional social taste signals
- Initial context chips
- First recommended Detour
- Saved preference memory

Principle:

Users should get value before granting sensitive permissions.

### 4.2 City Context

Knowhere displays context that explains what the city knows right now.

Examples:

- Near Kendall Square
- 90 minutes free
- Weather clear for 2 hours
- Bluebikes available nearby
- Likes coffee and bookstores
- Wants local, not touristy
- Friend nearby
- Dinner booking at 7:30 PM

### 4.3 Detour Generation

Detours are Knowhere's core experience. A Detour is a personalized route through the city based on user preferences and live context.

User can:

- Tap "Generate Detour"
- Receive a proactive Detour from City Pulse
- Ask Knowhere to refine a Detour

A Detour includes:

- Title
- Short rationale
- 2-4 stops
- Estimated duration
- Recommended travel mode
- Pickup and dropoff Bluebikes stations if biking
- Local offer attached to at least one stop
- Passport reward or stamp

Example:

Kendall Local Loop

You have 90 minutes, the weather is clear, and there are bikes available nearby. Start with a short Bluebikes ride along the river, stop for coffee at a local cafe, then finish at an indie bookstore before dinner.

### 4.4 Passport Wallet

The Passport stores the user's city identity, active plans, perks, and memories.

Passport generation should feel like a meaningful onboarding moment. After the user describes their travel style, Knowhere should generate a Passport artifact that feels collectible and personal, similar to a travel document or memory object rather than a plain settings profile.

When available, the Passport should automatically use the user's Instagram profile photo as the lead image for the artifact. If Instagram is not available, a fallback social avatar can be used until a more direct image source is connected.

The Passport includes:

- Active Detour
- Offer passes
- Completed stamps
- Saved places
- Cities visited
- Rewards
- Tickets or entry passes
- Optional transit/payment objects

The wallet should feel like a city-native Apple Wallet meets travel scrapbook.

Preferred product language:

- Generate a Detour
- Add to Passport
- Collect a Stamp
- Redeem a Perk
- Follow the Route
- Ask Knowhere

### 4.5 Merchant Dashboard

Merchants can create context-aware campaigns that appear as perks inside Detours and the Passport.

Merchant inputs:

- Business name
- Goal: fill slow hours, sell inventory, attract riders, event traffic, new customers
- Offer type: discount, bundle, free add-on, loyalty stamp
- Target: nearby users, Bluebike arrivals, tourists, students, lunch crowd
- Time window

AI generates:

- Offer title
- Short copy
- Targeting explanation

Example:

Bluebike Coffee Stop

Dock nearby and get $2 off cold brew for the next 45 minutes.

Targeted to riders ending trips within 0.3 miles during the afternoon lull.

## 5. Target Users

| Persona | Description | Needs |
| --- | --- | --- |
| Urban Explorer | Social, spontaneous citygoer | Discovery, novelty, social proof |
| Efficient Professional | Time-constrained user | Fast decisions, reliable execution |
| Tourist | New to the city | Guided, frictionless local experience |
| Budget Optimizer | Price-sensitive user | Cost transparency, perks, rewards |
| Student | Flexible, mobile, often budget-conscious | Cheap food, study spots, events, transit/bike routes |
| Business Owner | Local merchant | Demand generation, campaign tools, customer insight |
| City Operator | Government or civic partner | Behavioral insights, congestion management, local economic support |

### MVP Primary User

The MVP should focus on the tourist / urban explorer in Boston.

Why:

- Easy demo narrative
- Strong fit with Passport and Detours
- Does not require deep historical user data
- Bluebikes, local businesses, and time-boxed exploration are easy to demonstrate

Secondary MVP user:

Local merchant creating a simple perk for nearby users or Bluebike riders.

## 6. Launch Strategy

### City 1: Boston

Reasoning:

- Dense and walkable
- Strong university and tourist populations
- Bluebikes availability
- Complex transit and neighborhood structure
- Tech-savvy users
- Rich local business ecosystem

### Expansion Rule

Do not scale to additional cities until Knowhere proves:

- Strong retention
- High recommendation relevance
- Passport usage
- Merchant campaign repeat usage
- Reliable city data ingestion

## 7. Core Features

### 7.1 Passport Onboarding

Knowhere starts by creating a lightweight city Passport for the user. Onboarding should feel visual, fast, and narrative-led, not like filling out a form.

MVP scope:

- Required: one prewritten prompt for external LLM use
- Required: pasted `KNOWHERE PASSPORT PROFILE` output
- Optional signals: Instagram profile, TikTok profile
- Lightweight profile basics: first name, home city, email
- Deferred: calendar, friends, saved links import, wallet/spending, deep social ingestion, in-app voice capture

Outputs:

- Knowhere Passport profile
- Generated Passport artifact
- LLM-generated traveler profile
- Optional social taste handles
- Initial context chips
- First recommended Detour
- Saved preference memory

Important principle:

The user should get value before granting sensitive permissions.

### 7.2 City Pulse

City Pulse is Knowhere's primary entry point: a personalized city surface that shows what is relevant right now, before the user searches.

City Pulse combines:

- User location
- Time of day
- Weather
- Bluebikes availability
- Nearby events
- Merchant offers
- User preferences
- Saved places
- Passport history

The user sees a small set of high-signal recommendations, such as:

- "You have 90 minutes before dinner. Take a river Detour by bike."
- "Rain starts soon. Save this indoor cafe and gallery route."
- "Bluebikes are available nearby. This route earns a local stamp."

MVP scope:

- Show context chips
- Show one primary Detour recommendation
- Show a curated map with limited pins
- Include a persistent "Ask Knowhere" refinement bar

Deferred:

- Real proactive notifications
- Friend proximity
- Personal history beyond current session

### 7.3 Detour Generator

The Detour Generator is Knowhere's core experience. It turns real-time context into personalized routes through the city.

A Detour includes:

- 2-4 stops
- Estimated duration
- Route map
- Recommended mobility mode
- Bluebikes pickup/dropoff stations when relevant
- Local perk or offer
- Passport stamp
- "Why this Detour" explanation

Users can generate Detours by:

- Tapping "Generate Detour"
- Selecting context chips
- Choosing a mood or vibe
- Asking Knowhere to refine or regenerate

MVP scope:

- Generate one structured Detour from profile + context + merchant data + Bluebikes availability
- Return deterministic JSON for UI rendering
- Support 2-3 preset neighborhoods, such as Kendall, Seaport, and Harvard/Central

Deferred:

- Multi-city generation
- Fully dynamic event ingestion
- Advanced route optimization

### 7.4 Passport Wallet

The Passport Wallet stores the user's city identity, active Detours, perks, stamps, and saved places.

Components:

- Identity: tourist, resident, student, commuter
- Active Detours
- Saved places
- QR redemption passes
- Event tickets
- Entry passes
- Transit or mobility perks
- Discounts
- Rewards
- Completed stamps

MVP scope:

- Active Detour pass
- QR perk redemption
- Completed stamp after mock completion
- Saved places

Deferred:

- Real payment cards
- Real transit passes
- NFC access
- Official ticketing integrations

### 7.5 Personalization Engine

The personalization engine is Knowhere's core moat. It learns what each user likes, avoids, saves, completes, and returns to.

Signals:

- Explicit preferences
- Saved places
- Completed Detours
- Mobility choices
- Budget
- Time-of-day behavior
- Offer redemptions
- Optional spending/wallet activity
- Optional social signals

Memory types:

- Structured memory: facts like preferred budget, dietary restrictions, favorite neighborhoods, mobility preference, and user type
- Semantic memory: embeddings from past searches, saves, feedback, and completed experiences

MVP scope:

- Structured profile preferences
- Session-level saves and completed Detours
- Simple scoring based on preference fit and context

Deferred:

- Long-term semantic memory
- Spending-based personalization
- Social graph influence

### 7.6 Personalized Map Layer

Knowhere's map is not a directory. It should show a curated view of the city based on the user's current context.

Requirements:

- Show approximately 10-15 relevant places, not hundreds
- Rank by intent, context, proximity, availability, quality, and personal fit
- Include Detour routes, stops, perks, and Bluebikes stations
- Explain why places appear when helpful
- Let users save places directly to Passport

MVP scope:

- Curated pins from static merchant/place data
- Bluebikes pickup/dropoff pins from live or mocked GBFS
- Simple route visualization

Deferred:

- Full search index
- Real-time crowd ranking
- Personalized heatmaps

### 7.7 Real-Time Context Engine

Knowhere uses live and mocked context to recommend timely Detours, perks, and places.

Context inputs:

- Time
- Location
- Weather
- Crowd density
- Transit status
- Bluebikes availability
- Nearby events
- Merchant offers
- Merchant inventory
- Calendar or bookings, if opted in
- Friend proximity, if opted in

MVP scope:

- Live or mocked Bluebikes station availability
- Current time
- User-selected location
- Mocked weather, events, merchant inventory, and booking context

Deferred:

- Live crowd density
- Calendar ingestion
- Friend proximity
- Transit disruption ingestion

### 7.8 Execution Layer

Knowhere helps users act on recommendations.

Execution actions:

- Add Detour to Passport
- Redeem QR perk
- Open directions
- Reserve restaurant
- Join waitlist
- Book activity
- Save event ticket
- Launch Bluebikes or transit handoff
- Open Uber/Lyft handoff
- Pay through wallet, where supported

MVP scope:

- Add Detour to Passport
- Mock QR redemption
- External map/directions handoff
- Mock Bluebikes handoff

Deferred:

- Real bookings
- Real payments
- Real restaurant waitlists
- Uber/Lyft API integration

### 7.9 Incentive Engine

The incentive engine lets cities and businesses shape demand through targeted rewards.

Examples:

- "Visit this neighborhood and get 20% off."
- "Dock a Bluebike nearby and earn a stamp."
- "Come during the afternoon lull for a free add-on."
- "Choose this less crowded route for a transit credit."

MVP scope:

- Merchant-created perks attached to Detours
- Mock targeting rules, such as "Bluebike riders within 0.3 miles" or "students near Kendall."

Deferred:

- Real city incentive budgets
- Dynamic congestion pricing
- Automated bidding
- Civic policy integrations

### 7.10 Social Layer

The social layer helps users discover through people they trust.

Features:

- Friends map
- Shared Detours
- Shared plans
- Loved places
- "Friends have been here" signals
- Lightweight activity feed
- Group planning

MVP scope:

- Mock social proof on place detail, such as "popular with students" or "friends saved this"

Deferred:

- Friend graph
- Shared planning sessions
- Live location sharing
- Activity feed

### 7.11 Ask Knowhere

Ask Knowhere is a persistent assist layer, not the primary product surface.

Use cases:

- Refine a Detour
- Ask follow-up questions
- Change constraints
- Explain recommendations
- Generate alternatives
- Search by natural language when needed

Example prompts:

- "Make this cheaper."
- "Swap the museum for something outdoors."
- "Avoid hills."
- "Add a coffee stop."
- "Make it friendlier for biking."

MVP scope:

- Text-only refinement of the current Detour
- Inline cards for Detours, places, offers, and transport options

Deferred:

- Voice input
- Persistent chat memory
- Full conversational planning

## 8. UX / UI Overview

### 8.1 Core Experience Model

Knowhere should feel like the city quietly arranging itself around the user's current moment.

Primary flow:

Onboard -> See City Context -> Generate Detour -> Add to Passport -> Follow Route -> Redeem Perk -> Collect Stamp

The app should not open as a blank chatbot. It should open as a contextual city surface: a map/feed/passport hybrid with a persistent "Ask Knowhere" bar for refinement.

### 8.2 Visual Identity

Knowhere should feel like:

- A city-native wallet
- A travel scrapbook
- A passport full of stamps and memories
- A curated local guide
- A little magical, but still useful

Visual cues:

- Masonry-style image grids
- Film-like travel photography
- Passport stamps
- Ticket stubs
- Rounded photo cards
- Soft sunlit colors
- Ocean blues, moss greens, warm coral, passport ink, and jewel accents

### 8.3 Core Screens

#### 1. Map Home / City Pulse

The Map Home is the primary screen.

Purpose:

- Show what is relevant nearby
- Surface current context chips
- Recommend one primary Detour

UI requirements:

- Minimal pins, approximately 10-15 max
- Context chips at top
- Primary Detour card
- Persistent "Ask Knowhere" bar
- Quick actions: Generate Detour, Save Place, Add to Passport

#### 2. Ask Knowhere

Ask Knowhere is a persistent assist layer, not the main product surface.

Users can use it to:

- Refine a Detour
- Ask for alternatives
- Change constraints
- Search by natural language
- Explain recommendations

The interface can include inline cards for:

- Places
- Detours
- Bookings
- Offers
- Transport options

#### 3. Passport Tab

The Passport is the user's wallet and memory layer.

Includes:

- Active Detour
- Offer passes
- QR redemption codes
- Completed stamps
- Saved places
- Rewards
- Tickets or entry passes
- Optional payments/transit objects

#### 4. Place Detail

Place Detail should lead with personalized reasoning, not generic business information.

Information hierarchy:

- Why this place is recommended
- Fit with user context
- Current offer or perk
- Social signals
- Practical details: hours, distance, price, wait, directions

Example:

Recommended because it is a 6-minute walk, matches your coffee/bookstore preference, and fits before your 7:30 dinner.

#### 5. Transport Screen

The Transport Screen helps users execute the route.

Includes:

- Walking route
- Bluebikes pickup/dropoff
- Transit option
- Uber/Lyft handoff
- Estimated time
- Estimated price
- Weather or comfort note
- One-tap execution where available

For MVP:

Bluebikes station availability can be live or mocked.
Payments and bookings can be simulated with QR codes or external links.

#### 6. Merchant Dashboard

The Merchant Dashboard is separate from the consumer flow but important for the demo.

Includes:

- Campaign creation form
- Offer preview
- AI-generated copy
- Targeting settings
- Mock performance metrics

Primary merchant action:

Create perk for nearby users or Bluebike riders.

## 9. MVP Scope

### 9.1 MVP Goal

Prove that Knowhere can generate a personalized, context-aware Boston Detour and turn it into a Passport experience with a local perk.

### 9.2 MVP User Story

Maya is visiting Boston. She has 90 minutes before dinner, likes coffee and bookstores, wants something local, and prefers biking. Knowhere sees that she is near Kendall, the weather is clear, and Bluebikes are available. It generates a Detour, adds it to her Passport, and gives her a QR perk at a local cafe.

### 9.3 MVP Must-Haves

- Passport onboarding with one prewritten LLM prompt
- Paste-back flow for the generated profile
- Optional Instagram/TikTok profile inputs
- City Pulse home screen
- Context chips
- Generate Detour flow
- Bluebikes-aware pickup/dropoff station display
- Curated map with places and route
- Passport tab with active Detour
- QR perk redemption
- Completed stamp
- Merchant dashboard for creating a perk
- Ask Knowhere text refinement

### 9.4 MVP Nice-to-Haves

- Live Bluebikes GBFS data
- Weather API
- External maps handoff
- Multiple neighborhoods
- Shareable Detour link
- Simple analytics for merchant mock dashboard

### 9.5 Explicitly Out of Scope for MVP

- Real payments
- Real bookings
- Real Bluebikes unlocking
- Official Bluebikes account integration
- Friend location sharing
- Calendar integration
- Long-term semantic memory
- WebSockets
- Native mobile app
- City government dashboard
- Multi-city support

## 10. Functional Requirements

### MVP Requirements

- Detour generation should complete in under 10 seconds
- Ask Knowhere refinement should stream or respond in under 5 seconds
- User can complete onboarding in under 60 seconds
- User can add a Detour to Passport
- User can redeem a mock QR perk
- Merchant can create a mock campaign in under 60 seconds
- Recommendations must include a "why this" explanation

### Future Requirements

- Secure payments
- Real-time transaction support
- Live updates via WebSockets
- Shared planning sessions
- Real booking and ticketing integrations
- Identity and eligibility verification

## 11. System Architecture

### 11.1 MVP Architecture

Recommended hackathon stack:

- Frontend: React / Next.js, deployed on Vercel
- Backend: Next.js API routes or lightweight Node service
- Database: Supabase or Neon Postgres
- AI Layer: LLM endpoint for structured Detour generation and offer copy
- Data: static place/merchant dataset, live or mocked Bluebikes GBFS

### 11.2 Future Architecture

Long-term architecture:

- Frontend: React Native or cross-platform mobile app
- Backend: microservices
- AI Layer: LLM orchestration
- Database: PostgreSQL plus vector database
- Realtime: WebSockets

### 11.3 Core Services

MVP services:

- User/Profile Service
- Detour Generation Service
- Places Service
- Passport Service
- Merchant Offer Service
- Bluebikes Data Service

Future services:

- Wallet Service
- Payment Service
- Booking Service
- Navigation Service
- Social Service
- City Data Service
- Memory Engine

### 11.4 Wallet Architecture

MVP wallet:

- Passport pass objects
- QR redemption
- Stamps
- Saved places

Future wallet:

- Identity Service
- Payment Processor, such as Stripe or Adyen
- Pass Management System
- QR / NFC Access Layer
- Transit and ticketing integrations

### 11.5 Data Sources

MVP:

- Bluebikes GBFS, live or mocked
- Static merchant/place data
- Mock weather, events, transit, and inventory

Future:

- Google Places
- City APIs
- Event APIs
- Transit APIs
- Payment data, if opted in
- Social data, if opted in

## 12. API Design

### MVP Endpoints

- `POST /api/onboarding/profile`
- `GET /api/context`
- `POST /api/detours/generate`
- `POST /api/detours/refine`
- `GET /api/places`
- `GET /api/bluebikes/stations`
- `POST /api/passport/add`
- `POST /api/passport/redeem`
- `POST /api/merchant/offers`

### Future Endpoints

- `POST /api/chat/message`
- `POST /api/wallet/pay`
- `GET /api/wallet/passes`
- `GET /api/navigation/options`
- `POST /api/bookings/reserve`
- `GET /api/user/memory`
- `POST /api/social/share`

## 13. Privacy & Trust

Principles:

- Opt-in data sharing
- User-owned data
- Transparent recommendations
- Anonymized city insights
- No sensitive integrations required for first value
- Clear controls for deleting memory and disconnecting sources

Recommendation language should be transparent:

Recommended because you are near Kendall, have 90 minutes free, prefer biking, and the weather is clear.

Avoid creepy phrasing:

- "We know you always..."
- "We tracked that you..."
- "Based on your spending behavior..."

## 14. Monetization

### Phase 1

- Free consumer product
- Hackathon/demo focus

### Phase 2

- Business dashboards
- Merchant campaign tools
- Sponsored discovery with clear labeling

### Phase 3

- Transaction fees
- City partnerships
- Loyalty ecosystem
- White-labeled city/tourism products

## 15. Success Metrics

### MVP Demo Metrics

- Onboarding completion under 60 seconds
- Detour generation under 10 seconds
- At least one relevant Bluebikes-aware Detour
- At least one local perk attached to a Detour
- User can add Detour to Passport
- User can redeem QR perk
- Merchant can create a campaign

### Product Metrics

- D30 retention >= 35%
- Recommendation relevance >= 75%
- Passport adoption >= 40% of users
- Detour save rate
- Detour completion rate
- Offer redemption rate
- Merchant repeat campaign rate
- DAU/MAU >= 40%

## 16. Roadmap

### Phase 1: MVP Discovery Loop

- Passport onboarding
- City Pulse
- Detour generation
- Curated map
- Passport pass
- QR perk
- Merchant campaign demo

### Phase 2: Intelligence

- Better personalization
- Memory engine
- Social signals
- More neighborhoods
- Better context ingestion

### Phase 3: Execution

- Booking links
- Transport handoffs
- Event ticketing
- Better route optimization

### Phase 4: Wallet

- Payments
- Passes
- Identity
- Eligibility and benefits

### Phase 5: City OS

- Incentives
- City integrations
- Congestion management
- Demand redistribution
- Civic dashboards

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite + TypeScript, Tailwind CSS v4, and ui-sdk.dev (`@ui-sdk/react`, `@ui-sdk/core`). UI showcase only: no real backend, no authentication, no real payment, no real exam engine. Interactions run on client-side demo data. Stack confirmed by the user brief.

## Users

Primary: QA professionals and test engineers preparing for ISTQB certifications (CTFL, CT-GenAI), often studying alongside a job. They need to know whether QApte will help them pass with confidence — clear exam coverage, realistic practice, and useful explanations.

Secondary: trainers and training organizations running ISTQB prep groups; they need a simple way to give mock exams and debrief weak areas together.

Tertiary (this showcase): the founder/friend and design/engineering peers evaluating the redesign craft. The page should feel sharp, credible, and memorable.

## Product Purpose

QApte is an independent French platform for ISTQB certification preparation. It offers original mock exams, detailed corrections, targeted reinforcement, and an optional AI coach (Testéo) so candidates can practice under exam conditions and understand every answer. Success means a visitor starts a free mock exam, understands the offer, or chooses a paid pack/coach option with confidence.

This artifact is a front-end showcase: exam flows, scores, progress, and Testéo conversations are illustrative and must be clearly labelled where a visitor could mistake them for real user data or a live AI service.

## Positioning

A calm, rigorous ISTQB preparation studio — not a generic course marketplace. QApte's edge is the loop: timed exam, explained correction, targeted reinforcement, then coaching. It feels independent, precise, and respectful of the candidate's time.

## Operating Context

Candidates evaluate prep tools by trust, realism, and clarity: does it match the exam format, are questions original and quality-checked, can I understand why an answer is right or wrong, and is the pricing straightforward? QApte is independent (not affiliated/approved/accredited by ISTQB, CFTL, or GASQ). The certification exam itself is not included.

## Capabilities and Constraints

- CTFL v4.0: 10 mock exams, 40 questions, 60 minutes.
- CT-GenAI v1.1: 10 mock exams, 40 questions, 60 minutes, 46 points.
- Free entry points: 1 free Foundation exam; 10 free CT-GenAI questions.
- Learning loop: timed exam, result, detailed correction, targeted reinforcement, optional Testéo AI coach.
- Testéo: AI revision coach, 150 exchanges, 60 days, per certification, after coach offer purchase. Helps clarify notions with hints/examples.
- Trainer offer: 149€ TTC per promo, 10 places, 60 days; run a mock exam with a group and debrief difficult questions.
- Pricing shown publicly: 9,90€ single exam; 19,99€ Foundation/GenAI exam pack; 29,99€ Exams + Testéo; 149€ TTC trainer promo. Payment one-time, no subscription. Secure Stripe payment stated by site.
- Progress tracking after sign-in; account access by email link (no password). Purchases tied to account.
- This artifact is UI only. No real auth, payment, exam persistence, AI, or backend.
- Demo scores, progress, and chat must be clearly labelled illustrative.
- Use only publicly stated QApte facts. Do not invent pass rates, user counts, testimonials, partnerships, or official ISTQB endorsement.

## Brand Commitments

- Name: QApte (preserve recognizability). Company/rights: Logos IT.
- Contact: contact@qapte.com.
- Preserve independence/legal posture: independent training platform; not affiliated, approved, or accredited by ISTQB, CFTL, or GASQ; ISTQB is a registered trademark of International Software Testing Qualifications Board; mock exams are original questions, not official exams; certification registration not included unless explicitly contracted.
- Real product names/features/pricing may be referenced as publicly stated.
- The user explicitly wants a major redesign, not a faithful reskin; the incumbent visual identity is anti-reference, not authority.

## Evidence on Hand

- Public home/pricing/method/Testeo content reviewed from qapte.com on 2026-11-25. Fresh capture pass requested on 2026-11-25.
- Screenshots captured in `/tmp/qapte-home.png`, `/tmp/qapte-home-full.png`, `/tmp/qapte-tarifs-real.png`, `/tmp/qapte-examens.png`, `/tmp/qapte-testeo.png` and related scrolled captures.
- No logo assets, testimonials, real user data, or case studies provided. Do not fabricate them; use typographic identity, realistic but clearly synthetic exam UI, and honest product copy.

## Product Principles

1. Clarity earns trust: exam format, pricing, and outcomes should be obvious in seconds.
2. Practice is the product: show the exam/correction/reinforcement loop, not marketing abstractions.
3. Calm over cram: reduce anxiety with structure, rhythm, and honest guidance.
4. Independence is visible: keep legal/independence signals clear without making them loud.
5. Craft matters: the showcase should feel as deliberate as the learning experience it sells.

## Accessibility & Inclusion

Standard web accessibility expected: semantic structure, keyboard-operable interactions, visible focus, reduced-motion support, sufficient contrast, and French-language content with `lang="fr"` where appropriate.

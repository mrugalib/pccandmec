# Careons Reference Recreation — Design Ground Truth

This project is a **faithful, editable recreation** of the reference at <https://careons.framer.website/>. Fidelity to the reference’s composition, imagery treatment, navigation hierarchy, content order, and responsive behavior is the governing design rule. Where original assets are brand-owned or externally hosted, the implementation keeps them replaceable and notes the substitution.

## Chosen Approach: Editorial Humanitarian Storytelling

### Reference Ground Truth

The original is a cinematic nonprofit landing page built around full-bleed documentary photography, a compact transparent header, a dark charcoal foundation, bright green calls to action, oversized white editorial headlines, and editorial information blocks. Its visual rhythm alternates immersive photographs with roomy dark sections, restrained type, soft rounded image masks, and a warm, human documentary tone.

### Design Movement

**Contemporary editorial nonprofit design**: restrained Swiss-style composition interpreted through cinematic documentary photography and campaign-style typography.

### Core Principles

1. **Humanity before decoration.** Documentary imagery must carry the emotional weight; the interface must not compete with it.
2. **Cinematic contrast.** Near-black foundations and image overlays create a calm, high-contrast setting for white editorial type and green actions.
3. **Asymmetric editorial pacing.** Full-width visual moments, aligned content gutters, cropped panels, and staggered cards create movement without visual clutter.
4. **Visible purpose.** Each section clearly answers a mission, impact, cause, programme, contribution, or story question.

### Color Philosophy

The site uses a charcoal-black base to make real-world photography feel immediate, gallery-like, and dignified. White is reserved for primary narrative copy, while a clear high-chroma green signals participation, momentum, and donation actions. Warm off-white surfaces briefly relieve the dark foundation in content-heavy sections.

### Layout Paradigm

The primary structure is a **cinematic vertical narrative** rather than a uniform dashboard grid: full-bleed hero first, editorial split feature, branded supporter strip, staggered impact cards, deep-dark cause cards, sliding programme frames, contribution carousel, journal stories, a donation invitation, then an information-dense footer.

### Signature Elements

1. Full-bleed photographs with a bottom-weighted near-black image overlay.
2. Small green uppercase or title-case eyebrow labels followed by oversized white display type.
3. Pill-shaped green primary actions and pale secondary buttons, used sparingly.

### Interaction Philosophy

Interaction should feel direct and calm: navigation and CTA controls react with a short opacity/translate response; cards reveal a subtle image zoom and arrow movement; horizontal programme and participation sections respond to arrow controls. Keyboard focus remains highly visible.

### Animation

Use only transform and opacity motion. Images may scale from 1.00 to 1.03 on hover over 220ms. Editorial blocks use a restrained 20–32px upward entrance with 420–560ms custom ease-out when entering the viewport. Respect `prefers-reduced-motion` by removing entrance movement and carousel autoplay.

### Typography System

Use **DM Sans** for all body, navigation, labels, and controls because the reference is a clean modern neo-grotesk sans system. Use a heavier 600–700 weight for large display headlines with tight tracking and a slightly relaxed line-height. Navigation and small labels remain 400–500 weight at a compact scale. Do not use Inter.

### Brand Essence

**Careon is an international humanitarian campaign template for organisations that turn practical support into visible, lasting impact.**

Personality: **human, resolute, contemporary**.

### Brand Voice

Headlines are concise, action-oriented, and use paired verbs or short claims. CTAs are specific and participatory. Microcopy is direct and dignified, never sentimental or generic.

Example headline: “Unite. Act. Transform.”

Example CTA: “Join Our Missions.”

### Wordmark & Logo

Retain the white “Careon” wordmark treatment for reference fidelity, paired with a supplied standalone humanitarian mark for favicon/optional future rebranding. The standalone mark is an abstract open hand, seedling, and sunrise without text.

### Signature Brand Color

**Careon Action Green — #00BD4A.** It is used for donation and participation actions, green eyebrow copy, motion accents, and selected indicators only.

## Reconstruction Scope

The first delivery recreates the reference home page and preserves the visible information architecture: header, hero, about, supporter band, impact, causes, programmes, participation carousel, stories, donation CTA, newsletter, and footer. Navigation routes are included as editable anchors; full content subpages remain clear expansion points rather than fabricated copies.

## Asset and Rights Notes

The reference uses externally hosted documentary photographs, logo treatments, and icons associated with the Careon demo template. Those source URLs are used only for private visual matching during this recreation and should be replaced or licensed before public launch. The project also includes clearly replaceable generated visual alternatives for future adaptation.

## Style Decisions

The visible Careon brand system uses **charcoal, white, warm off-white, and Careon Action Green `#00BD4A` only**. The standalone mark is rendered in white so it supports the wordmark rather than introducing a second brand accent. Photography should favour candid people, learning, delivery, recovery, and community-organising scenes; symbolic images are subordinate to direct human documentary moments. Collection areas use modest vertical staggering at wide widths to retain the reference’s editorial campaign pacing without changing its home-page content order.

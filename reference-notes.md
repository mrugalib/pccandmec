# Careons Reference Audit Notes

## Verified Source-Level Findings

| Category | Verified finding |
| --- | --- |
| Reference | `https://careons.framer.website/` |
| Home-route identifier | Framer route `augiA20Il` |
| Responsive breakpoints | Desktop: `min-width: 1200px`; tablet: `810px–1199.98px`; mobile: `max-width: 809.98px` |
| Font family | Self-hosted **Inter** variable/font-face subsets, with visible 400 and 500 source faces. Reference fidelity overrides the general project preference against Inter. |
| Dominant colors | `#000000`, `#0A0A0A`, `#FFFFFF`, action green `#00B749`, pale neutral `#F0F1F2`, muted text `#B3B3B3`. |
| Navigation | Centered/upper hero pill with charcoal transparent treatment, white Careon wordmark, five text links, and a green rounded Donate Now button. |
| Home information architecture | Header; hero; About; supporters; impact; causes; programmes; contribution carousel; blogs; donation invitation; newsletter; footer. |
| Discovered linked templates | About, Causes, Programs, Blog, Contact, Donate, three cause-detail pages, three programme-detail pages, three blog posts, Privacy Policy, and Terms & Conditions. |
| External embeds visible in page audit | Framer site shell/analytics attribution and a native Framer newsletter form; no embedded video player, map, or chat widget observed in the live home-page DOM text. |

## Screenshot Review — Desktop Top (1920px)

The reference’s desktop capture is 1920×12000px. The top is a full-bleed warm photographic hero. The compact navigation is centered near the top edge as a dark translucent rounded rectangle. It contains a bold white “Careon” wordmark at left, white text links across the middle, and a saturated green rounded Donate Now action on the right. The source browser capture at a smaller window also verifies that the hero’s content is bottom-left aligned and uses a dark bottom-weighted overlay for contrast.

> Capture limitation noted: raw Chromium viewport screenshots treat `100vh` as the supplied capture height. The initial 12000px canvas therefore stretched the hero far beyond its real viewport height. The reference dimensions and source inspection remain valid, but page-level layout judgments will rely on normal-height browser renders and source markup rather than the stretched lower regions of that initial capture.

## Accurate Full-Page Capture — Desktop (1920px)

| Area | Observed composition |
| --- | --- |
| Hero height | Approximately 730px in the real 1920px full-page capture. |
| Header | A 16px inset horizontal glass-black pill spans nearly the full width; on the automated capture the logo is retained but the nav links are suppressed, which appears to be a responsive/animation hydration discrepancy compared with the interactive browser capture. The implemented clone will preserve the fully populated reference header seen in the live browser. |
| Hero content | Left-aligned in a narrow column beginning around the 292px x-position; green eyebrow, two-line 64px-ish display headline, short paragraph, then green and white pills. |
| About opening | A #F0F1F2/-like light-grey field begins immediately after the hero. Editorial content begins on the same left content line, with a large white-space field between copy clusters. |
| Impact opener | Uses a 2-column editorial split: the eyebrow and large “Together for change” title at the left content line and a short explanation pushed to the right. |

The direct full-page capture establishes intentional large vertical whitespace in the about/impact region. The blank space is part of the reference’s pacing and is retained rather than collapsed in the clone.

## Desktop Middle Sections

| Area | Observed composition |
| --- | --- |
| Causes | A full-width true-black section, starting after the light impact area. It repeats the eyebrow/title-at-left and explanatory-copy-at-right editorial header pattern. The body has generous dark negative space in the automated static render, but source markup confirms a three-card cause collection. |
| Cause footer row | Low in the black section: left-aligned muted supporting sentence, a thin muted rule across the centre-right, and a green “View All Causes” text link at far right. |
| Programmes | Returns to the pale light-grey background and repeats the same two-column editorial opening: green-dot eyebrow and “Spark Positive Change” at left, concise explanation at right. |

The alternating **light editorial field → black collection field → light editorial field** is a primary compositional system. It will be reproduced using CSS custom properties rather than hardcoded one-off colors.

## Capture Behavior Note

The reference uses viewport-triggered/lazy visual content. A direct full-page protocol capture accurately preserves the document’s section dimensions and visible text but leaves several below-the-fold image/card areas visually blank until the browser has scrolled through them. The next capture pass will use sequential scroll positions before image capture so that those portions can be inspected without treating absent lazy-loaded content as empty design space.

The refreshed causes capture confirms a very low-contrast abstract outlined shape pattern behind the black section’s text and cards. This decorative background motif will be reproduced with CSS outline shapes/gradients rather than copied as a source asset, retaining its near-black-on-black subtlety.

## Reconstruction Decision

The implementation will faithfully use the discovered three responsive regimes and reference content ordering. The home page will be fully recreated; the related route URLs remain structured extension points rather than fabricated full-page content. Reference-source photography and wordmark remain clearly flagged for replacement/licensing before any public deployment.

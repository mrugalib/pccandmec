# Careons Recreation Verification

## Completed Checks

| Check | Result | Notes |
| --- | --- | --- |
| TypeScript validation | Passed | `pnpm check` completed without type errors. |
| Production build | Passed | `pnpm build` completed successfully. |
| 1920px desktop | Reviewed | Full landing page renders with the reference’s cinematic hero, alternating editorial fields, card collections, and dark footer. |
| 1440px desktop | Reviewed | Wide desktop hierarchy and three-column collections remain intact. |
| 1024px tablet landscape | Reviewed | Tablet regime preserves navigation, split headings, card rows, and programme panel. |
| 768px compact tablet | Reviewed | Switched into the reference mobile regime; content stacks without horizontal overflow. |
| 390px mobile | Reviewed | Hamburger navigation is present; cards, FAQ, newsletter, and footer stack legibly. |
| Interactive controls | Implemented | Mobile menu, programme tabs and arrow controls, FAQ accordions, internal CTA anchors, and newsletter success state are operational in the client. |

## Fidelity Notes

The recreation follows the reference’s discovered breakpoints exactly: **desktop at 1200px and above, tablet from 810px to 1199.98px, and mobile below 810px**. It also uses the reference color system and visual sequence: black/near-black fields, pale-grey editorial fields, `#00B749` actions, compact pill navigation, large two-line hero type, and card-led collections.

Exact screenshot-pixel equality is intentionally not claimed. The original Framer demo serves some below-fold content through viewport-triggered behavior, which made its automated full-page capture intermittently blank in card regions. Additionally, its externally hosted documentary assets, wordmark treatment, and opaque Framer motion internals are brand/template material. This project retains the structure and styling system while substituting or surfacing replaceable images where needed. Before a public launch, replace all reference-source image URLs with owned or licensed assets and adjust the Careon wordmark.

## Key Files

| File | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Semantic editable page structure, content arrays, and client interactions. |
| `client/src/index.css` | Extracted tokens, responsive layouts, animations, and visual treatment. |
| `ideas.md` | Reference-grounded design direction for reusing this system. |
| `reference-notes.md` | Source audit, breakpoint, color, and layout findings. |
| `verification.md` | This validation record and known limits. |

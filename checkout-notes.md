# Simulated Checkout Verification

The simulated donation flow uses the existing accessible dialog primitive and is connected to donation controls in the header, hero, mission section, donation band, and each cause/programme detail page. It accepts preset or custom amounts, a name, and an email address only in the active client session.

The confirmation explicitly states that this is a simulation and that **no payment is collected**. An automated browser interaction opened the hero donation CTA, filled the form, submitted the flow, and verified the success message for a simulated $50 donation. Desktop and 390px mobile modal captures confirm readable controls, adequate contrast, and no viewport overflow.

## Scope Boundary

This is intentionally a front-end simulation. It has no payment provider, no card-number field, no charge creation, and no persistent donor-data storage. A real payment implementation would require a separate payment-provider integration and its associated compliance configuration.

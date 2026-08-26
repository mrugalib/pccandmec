/**
 * PCC & MEC — donation call-to-action, rebuilt from the 21st.dev "Featured_05"
 * globe section (ruixen.ui) to match its exact layout: rounded card, flex-col-reverse
 * on mobile / flex-row on desktop, and a globe bleeding out of its box bottom-right.
 * Copy and colors are swapped for the site's own content and #00B749 action green;
 * `Globe` itself lives in ui/globe.tsx with a working cobe-v2 render loop.
 */
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import { Globe } from "@/components/ui/globe";

export default function DonateGlobeSection() {
  return (
    <section className="relative mx-auto w-full overflow-hidden rounded-3xl border border-gray-200 bg-muted px-6 py-16 shadow-md md:px-16 md:py-24">
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="z-10 max-w-xl text-left">
          <h2 id="donate-title" className="text-3xl font-normal text-gray-900">
            Your Donation Can{" "}
            <span className="text-primary font-medium">Change a Life Today</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Join thousands of donors building a world where no one is left behind.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <DonationCheckoutButton className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-black">
              Donate Now <ArrowRight className="h-4 w-4" />
            </DonationCheckoutButton>
            <Button asChild variant="outline" className="rounded-full px-5">
              <a href="#contact">Get Involved</a>
            </Button>
          </div>
        </div>

        <div className="relative h-[260px] w-full max-w-xl overflow-hidden sm:h-[220px] md:h-[180px] md:overflow-visible">
          <Globe className="absolute inset-x-0 bottom-[-22%] mx-auto scale-100 sm:bottom-[-15%] sm:scale-110 md:inset-x-auto md:right-[-10rem] md:bottom-[-5rem] md:mx-0 md:scale-150" />
        </div>
      </div>
    </section>
  );
}

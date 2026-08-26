/** Careons reference recreation — dynamic "what we do" work-area detail route. */
import { Check, MoveRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { workAreaDetails } from "@/lib/careonData";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import SiteHeader from "@/components/SiteHeader";
import NotFound from "./NotFound";
import "../detail.css";

export default function WorkAreaDetail() {
  const [, params] = useRoute("/what-we-do/:slug");
  const area = workAreaDetails.find((item) => item.slug === params?.slug);
  if (!area) return <NotFound />;

  return (
    <div className="detail-page">
      <SiteHeader variant="detail" />
      <main>
        <section className="detail-hero">
          <img src={area.image} alt="" />
          <div className="detail-hero__shade" />
          <div className="detail-shell detail-hero__content">
            <p className="detail-kicker">What We Do</p>
            <h1>{area.title}</h1>
            <p>{area.tagline}</p>
          </div>
        </section>

        <section className="detail-summary">
          <div className="detail-shell detail-summary__grid">
            {area.highlights.map((highlight) => (
              <div key={highlight.label}>
                <p className="detail-label">{highlight.label}</p>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-body">
          <div className="detail-shell detail-body__grid">
            <div><p className="detail-kicker detail-kicker--dark">How this work moves forward</p><h2>Practical support, shaped around people.</h2></div>
            <div className="detail-body__copy"><p>{area.overview}</p><ul>{area.focus.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="detail-donation" aria-labelledby="detail-donation-title">
          <div className="detail-shell detail-donation__inner">
            <div><p className="detail-kicker">Take part</p><h2 id="detail-donation-title">Help power our work in {area.title.toLowerCase()}.</h2></div>
            <div><DonationCheckoutButton className="detail-donation__button" campaign={area.title}>Register your support <MoveRight size={17} /></DonationCheckoutButton></div>
          </div>
        </section>
      </main>
      <footer className="detail-footer"><div className="detail-shell"><span>PCC &amp; MEC</span><Link href="/">Return to the homepage <MoveRight size={15} /></Link></div></footer>
    </div>
  );
}

/**
 * Careons reference recreation — shared editorial detail-page template.
 * This view preserves the black, pale-grey, and action-green visual system across individual routes.
 */
import { Check, HeartHandshake, MoveRight } from "lucide-react";
import { Link } from "wouter";
import type { CareonDetail } from "@/lib/careonData";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import SiteHeader from "@/components/SiteHeader";
import "../detail.css";

export default function DetailPage({ item, label }: { item: CareonDetail; label: "Cause" | "Program" }) {
  return (
    <div className="detail-page">
      <SiteHeader variant="detail" />
      <main>
        <section className="detail-hero">
          <img src={item.image} alt="" />
          <div className="detail-hero__shade" />
          <div className="detail-shell detail-hero__content">
            <p className="detail-kicker">{label} · {item.kicker}</p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </section>

        <section className="detail-summary">
          <div className="detail-shell detail-summary__grid">
            <div><p className="detail-label">Support progress</p><strong>{item.raised}</strong><span>Raised Amount</span></div>
            <div><p className="detail-label">Funding target</p><strong>{item.goal}</strong><span>Goal Amount</span></div>
            <div className="detail-summary__outcome"><HeartHandshake size={22} /><p>{item.outcome}</p></div>
          </div>
        </section>

        <section className="detail-body">
          <div className="detail-shell detail-body__grid">
            <div><p className="detail-kicker detail-kicker--dark">How this work moves forward</p><h2>Practical support, shaped around people.</h2></div>
            <div className="detail-body__copy"><p>{item.description}</p><ul>{item.focus.map((focus) => <li key={focus}><Check size={17} />{focus}</li>)}</ul></div>
          </div>
        </section>

        {item.beneficiaries && (
          <section className="detail-beneficiaries" aria-labelledby="beneficiaries-title">
            <div className="detail-shell detail-beneficiaries__inner">
              <div><p className="detail-kicker">Who this helps</p><h2 id="beneficiaries-title">The people behind this {label.toLowerCase()}.</h2></div>
              <p>{item.beneficiaries}</p>
            </div>
          </section>
        )}

        {item.donationImpact && item.donationImpact.length > 0 && (
          <section className="detail-impact" aria-labelledby="detail-impact-title">
            <div className="detail-shell">
              <p className="detail-kicker detail-kicker--dark">Your contribution at work</p>
              <h2 id="detail-impact-title">See exactly what your gift can do.</h2>
              <div className="detail-impact__grid">
                {item.donationImpact.map((tier) => (
                  <div className="detail-impact__card" key={tier.amount}>
                    <strong>{tier.amount}</strong>
                    <p>{tier.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="detail-donation" aria-labelledby="detail-donation-title">
          <div className="detail-shell detail-donation__inner"><div><p className="detail-kicker">Take part</p><h2 id="detail-donation-title">Help this {label.toLowerCase()} move one step closer.</h2></div><div><DonationCheckoutButton className="detail-donation__button" campaign={item.title}>Register your support <MoveRight size={17} /></DonationCheckoutButton></div></div>
        </section>
      </main>
      <footer className="detail-footer"><div className="detail-shell"><span>PCC &amp; MEC</span><Link href="/">Return to the homepage <MoveRight size={15} /></Link></div></footer>
    </div>
  );
}

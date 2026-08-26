/**
 * Careons reference recreation — shared primary navigation.
 * Used on the homepage and every detail route so the same navbar (including
 * mobile responsive behavior) is available everywhere in the site.
 */
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import RollText from "./RollText";

export default function SiteHeader({ variant = "home" }: { variant?: "home" | "detail" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
  const [impactOpen, setImpactOpen] = useState(false);

  const isHome = variant === "home";
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`);
  const closeAll = () => {
    setMenuOpen(false);
    setWhoWeAreOpen(false);
    setWhatWeDoOpen(false);
    setImpactOpen(false);
  };

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href={isHome ? "#top" : "/"} aria-label="PCC & MEC home">
        <img src="/images/pcc-mec-logo.png" alt="" aria-hidden="true" />
        <span className="brand__text">
          <strong>PCC &amp; MEC</strong>
          <small>Population Crisis Control and Mass Education Committee</small>
        </span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={menuOpen ? "main-nav main-nav--open" : "main-nav"}>
        <div className="main-nav__links">
          <div
            className={whoWeAreOpen ? "nav-item nav-item--open" : "nav-item"}
            onMouseEnter={() => setWhoWeAreOpen(true)}
            onMouseLeave={() => setWhoWeAreOpen(false)}>
            <button
              type="button"
              className="nav-item__trigger"
              aria-expanded={whoWeAreOpen}
              onClick={() => setWhoWeAreOpen((open) => !open)}>
              <RollText>Who We Are</RollText> <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="nav-dropdown">
              <a onClick={closeAll} href={anchor("#about")}><RollText>About Us</RollText></a>
              <a onClick={closeAll} href={anchor("#about-title")}><RollText>Mission and Vision</RollText></a>
              <a onClick={closeAll} href={anchor("#join-community")}><RollText>Partner</RollText></a>
            </div>
          </div>
          <div
            className={whatWeDoOpen ? "nav-item nav-item--open" : "nav-item"}
            onMouseEnter={() => setWhatWeDoOpen(true)}
            onMouseLeave={() => setWhatWeDoOpen(false)}>
            <button
              type="button"
              className="nav-item__trigger"
              aria-expanded={whatWeDoOpen}
              onClick={() => setWhatWeDoOpen((open) => !open)}>
              <RollText>What We Do</RollText> <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="nav-dropdown">
              <a onClick={closeAll} href={anchor("#programs")}><RollText>Our Approach</RollText></a>
              <a onClick={closeAll} href={anchor("#causes")}><RollText>Key Focus Areas</RollText></a>
              <a onClick={closeAll} href={anchor("#projects")}><RollText>Projects</RollText></a>
            </div>
          </div>
          <div
            className={impactOpen ? "nav-item nav-item--open" : "nav-item"}
            onMouseEnter={() => setImpactOpen(true)}
            onMouseLeave={() => setImpactOpen(false)}>
            <button
              type="button"
              className="nav-item__trigger"
              aria-expanded={impactOpen}
              onClick={() => setImpactOpen((open) => !open)}>
              <RollText>Impact</RollText> <ChevronDown size={14} aria-hidden="true" />
            </button>
            <div className="nav-dropdown">
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Community Mobilization</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Livelihood Promotions</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Public Health</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Capacity Building</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Food Security</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Innovation</RollText></a>
              <a onClick={closeAll} href={anchor("#impact")}><RollText>Humanitarian Aid</RollText></a>
            </div>
          </div>
          <a onClick={() => setMenuOpen(false)} href={anchor("#faq-title")}><RollText>Policy</RollText></a>
          <a onClick={() => setMenuOpen(false)} href={anchor("#contact")}><RollText>Contact Us</RollText></a>
        </div>
        <DonationCheckoutButton className="nav-donate checkout-trigger"><RollText>Get Involved</RollText></DonationCheckoutButton>
      </nav>
    </header>
  );
}

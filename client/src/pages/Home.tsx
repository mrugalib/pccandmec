/**
 * Careons reference recreation — editorial nonprofit design system.
 * Ground truth: full-bleed documentary imagery, black and pale-grey fields,
 * Inter typography, #00B749 actions, pill controls, and 810px / 1200px breakpoints.
 */
import { FormEvent, ReactNode, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronRight,
  Droplets,
  Globe,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Instagram,
  Lightbulb,
  LifeBuoy,
  Linkedin,
  Mail,
  MapPin,
  Minus,
  MoveRight,
  Phone,
  Plus,
  Scale,
  Share2,
  Sprout,
  Sun,
  Users,
  Wheat,
  Wrench,
  X,
} from "lucide-react";
import { blogs, causes, programs } from "@/lib/careonData";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import HeroSlideshow from "@/components/HeroSlideshow";
import RollText from "@/components/RollText";
import Eyebrow from "@/components/Eyebrow";
import SiteHeader from "@/components/SiteHeader";
import SectorsShowcase from "@/components/SectorsShowcase";
import TeamShowcase from "@/components/TeamShowcase";
import DonateGlobeSection from "@/components/DonateGlobeSection";

const sourceImages = {
  hero: "/images/hero-kids.jpg",
  heroSlides: [
    "/images/hero-kids.jpg",
    "/images/hero-women-phones.jpg",
    "/images/hero-coastal-boat.jpg",
    "/images/hero-haor-fishing.jpg",
    "/images/hero-aquaculture.jpg",
  ],
  mark: "/images/pcc-mec-logo.png",
  impact: "/images/about-community.jpg",
  cause: "/manus-storage/careon-cause_acb15892.jpg",
  about: "/images/about-climate-flood.jpg",
  donateHands: "/images/donate-hands.jpg",
  programHealth:
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1500&q=85",
  programFood:
    "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1500&q=85",
  programWater:
    "https://framerusercontent.com/images/2srJeanTF7o28bioeTcEYLrSCms.jpg?width=5760&height=3840",
  storyOne:
    "https://framerusercontent.com/images/84D3YC9gPH9F7d3pORzAz25QrgI.jpg?width=1440&height=1105",
  storyTwo:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85",
  storyThree:
    "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=85",
};

const heroStats = [
  { value: "38+", label: "Years of Service" },
  { value: "23+", label: "Districts Covered" },
  { value: "380+", label: "Unions Reached" },
  { value: "516+", label: "Villages Served" },
];

const workAreas = [
  {
    icon: LifeBuoy,
    slug: "disaster-response-recovery",
    title: "Disaster Response & Recovery",
    copy: "Rapid relief, shelter, and recovery support for communities hit by floods, cyclones, and crisis.",
    image: "/images/hero-coastal-boat.jpg",
  },
  {
    icon: Sprout,
    slug: "agriculture-livelihoods",
    title: "Agriculture & Livelihoods",
    copy: "Sustainable farming, aquaculture, and income-generating skills that build lasting self-reliance.",
    image: "/images/hero-aquaculture.jpg",
  },
  {
    icon: Scale,
    slug: "inclusion-equity-justice",
    title: "Inclusion, Equity & Justice",
    copy: "Advancing rights and representation for women, children, and marginalized groups.",
    image: "/images/about-community.jpg",
  },
  {
    icon: Sun,
    slug: "climate-resilience",
    title: "Climate Resilience",
    copy: "Helping coastal and Haor communities adapt to a changing climate and protect their future.",
    image: "/images/hero-haor-fishing.jpg",
  },
  {
    icon: GraduationCap,
    slug: "education-skills",
    title: "Education & Skills",
    copy: "Quality learning and vocational training that open doors for children and young people.",
    image: "/images/hero-kids.jpg",
  },
  {
    icon: Droplets,
    slug: "health-water-sanitation",
    title: "Health, Water & Sanitation",
    copy: "Access to clean water, hygiene, and essential healthcare for underserved families.",
    image: sourceImages.programHealth,
  },
];

const impactAreas = [
  {
    icon: Users,
    title: "Community Mobilization",
    copy: "Organizing grassroots groups and local leaders so coastal and Haor communities can identify needs and act on their own priorities.",
  },
  {
    icon: Briefcase,
    title: "Livelihood Promotions",
    copy: "Equipping families with skills, tools, and market access for sustainable farming, aquaculture, and income-generating trades.",
  },
  {
    icon: HeartPulse,
    title: "Public Health",
    copy: "Expanding access to essential healthcare, hygiene awareness, and maternal & child health services in underserved villages.",
  },
  {
    icon: Wrench,
    title: "Capacity Building",
    copy: "Training local leaders, volunteers, and institutions to sustain programmes long after our direct involvement ends.",
  },
  {
    icon: Wheat,
    title: "Food Security",
    copy: "Improving nutrition and food access through climate-resilient agriculture, aquaculture, and emergency food support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    copy: "Piloting low-cost, climate-smart solutions built for the realities of coastal and Haor life.",
  },
  {
    icon: HandHeart,
    title: "Humanitarian Aid",
    copy: "Delivering rapid relief, shelter, and emergency support to families affected by floods, cyclones, and crisis.",
  },
];

const helpOptions = [
  {
    title: "Strengthen Social Good",
    copy: "Sponsorships grow awareness and strengthen your brand’s purpose.",
    image: sourceImages.storyThree,
  },
  {
    title: "Power Meaningful Change",
    copy: "Financial gifts help drive lasting progress in key cause areas.",
    image: sourceImages.programFood,
  },
  {
    title: "Fuel Greater Impact",
    copy: "Your donation scales our work and reaches more communities in need.",
    image: sourceImages.about,
  },
  {
    title: "Share Valuable Resources",
    copy: "In-kind support accelerates logistics, technology, and field operations.",
    image: sourceImages.programWater,
  },
  {
    title: "Act During Crisis",
    copy: "Join urgent missions with rapid aid, relief, and community recovery.",
    image: sourceImages.impact,
  },
];


const faqs = [
  "What is your NGO’s mission?",
  "How are donations used?",
  "Can I volunteer?",
  "Besides donating, how else can I help?",
  "Can I sponsor a child or family?",
];

function ButtonLink({
  children,
  variant = "primary",
  href = "#donate",
  icon = true,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  icon?: boolean;
}) {
  return (
    <a className={`action action--${variant}`} href={href}>
      {children}
      {icon && <MoveRight size={16} strokeWidth={1.8} aria-hidden="true" />}
    </a>
  );
}

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const program = programs[activeProgram];

  function cycleProgram(direction: -1 | 1) {
    setActiveProgram((current) => (current + direction + programs.length) % programs.length);
  }

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Thank you${newsletterEmail ? `, ${newsletterEmail}` : ""}. You’re on the list for Careon updates.`);
    setNewsletterEmail("");
  }

  return (
    <div className="careon-page">
      <SiteHeader variant="home" />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <HeroSlideshow images={sourceImages.heroSlides} alt="Coastal and Haor communities in Bangladesh supported by PCC & MEC programs" />
          <div className="hero__veil" />
          <div className="shell hero__content">
            <div className="hero__intro">
              <Eyebrow light>Together, We Create Impact</Eyebrow>
              <h1 id="hero-title">Unite. Act.<br />Transform</h1>
              <p>Your support powers life changing missions feeding families &amp; rebuilding hope.</p>
              <div className="action-row">
                <DonationCheckoutButton className="action action--primary"><RollText>Donate Now</RollText> <MoveRight size={16} strokeWidth={1.8} aria-hidden="true" /></DonationCheckoutButton>
                <ButtonLink variant="secondary" href="#about" icon={false}><RollText>Learn About Us</RollText></ButtonLink>
              </div>
            </div>
            <div className="hero__stats" aria-label="Our impact at a glance">
              {heroStats.map((stat) => (
                <div className="hero__stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about section-light" aria-labelledby="about-title">
          <div className="shell about__grid">
            <div className="about__copy reveal">
              <Eyebrow>About PCC &amp; MEC</Eyebrow>
              <h2 id="about-title">Climate-Affected Coastal &amp; Haor Areas of Bangladesh</h2>
              <p>Population Crisis Control and Mass Education Committee (PCC &amp; MEC) is a non-profit, non-political, and non-government voluntary organization that came into existence in 1985 with the initiative of a few young people under the leadership of renowned freedom fighter Mr. Mirza Taslim Hossain. After the independence, he was involved in business and worked in the rural areas of Khulna, Bagerhat, and Satkhira.</p>
              <dl className="about__facts">
                <div><dt>Establishment of PCC&amp;MEC</dt><dd>Founded in 1986 and registered with the Department of Social Welfare (Khulna-382/86).</dd></div>
                <div><dt>NGO Registration</dt><dd>Registered with the NGO Affairs Bureau on January 29, 1991 (No. 384).</dd></div>
                <div><dt>Governance Structure</dt><dd>Governed by an Executive Committee (EC) with seven members, including four women.</dd></div>
              </dl>
              <ButtonLink variant="outline" href="#causes" icon={false}>Learn More</ButtonLink>
            </div>
            <div className="about__visual reveal">
              <img src={sourceImages.about} alt="A coastal Bangladeshi village submerged in floodwater, illustrating climate-affected coastal and Haor areas" />
              <div className="about__caption"><HeartHandshake size={18} /> Purpose in practice</div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="workareas section-light" aria-labelledby="workareas-title">
          <div className="shell section-heading">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 id="workareas-title">Core Areas We Work In</h2>
            </div>
            <p>Six interconnected areas of work we invest in, day after day, to build lasting change.</p>
          </div>
          <div className="shell workareas-grid">
            {workAreas.map(({ icon: Icon, slug, title, copy, image }) => (
              <Link href={`/what-we-do/${slug}`} className="workarea-card" key={title}>
                <div className="workarea-card__image"><img src={image} alt="" loading="lazy" /></div>
                <span className="workarea-card__icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="workarea-card__link">Learn more <ChevronRight size={15} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </section>

        <SectorsShowcase />

        <TeamShowcase />

        <section id="impact" className="impact section-light" aria-labelledby="impact-title">
          <div className="shell section-heading impact-top">
            <div>
              <span className="impact-badge"><span className="impact-badge__icon"><HeartHandshake size={13} strokeWidth={2} aria-hidden="true" /></span>Our Impact</span>
              <h2 id="impact-title">Creating meaningful<br /><span className="hl">humanitarian impact</span></h2>
            </div>
            <p>Feeding families, educating children &amp; rebuilding lives — this is what our impact shows across coastal and Haor Bangladesh.</p>
          </div>
          <div className="shell impact-grid">
            <article className="impact-card impact-card--icon">
              <span className="impact-card__icon"><Users size={24} strokeWidth={1.6} aria-hidden="true" /></span>
              <h3>Grassroots Reach</h3>
              <p>Passionate field teams dedicated to coastal &amp; Haor communities.</p>
            </article>
            <article className="impact-card impact-card--stat">
              <strong>38<span>+</span></strong>
              <h3>Years of Service</h3>
              <p>A steady presence since 1985.</p>
            </article>
            <article className="impact-card impact-card--photo impact-card--tall">
              <img src={sourceImages.hero} alt="Children in a coastal Bangladeshi community supported by PCC & MEC" />
              <strong>516<span>+</span></strong>
              <h3>Villages Served</h3>
              <p>Direct programme delivery on the ground.</p>
            </article>
            <article className="impact-card impact-card--tint">
              <strong>23<span>+</span></strong>
              <h3>Districts Covered</h3>
              <p>Reaching families across Bangladesh.</p>
            </article>
            <article className="impact-card impact-card--photo">
              <img src={sourceImages.donateHands} alt="Volunteer supporting a family with essential relief supplies" />
            </article>
          </div>

          <div className="shell impact-areas">
            <Eyebrow>Areas of Impact</Eyebrow>
            <h3 className="impact-areas__title">What kind of impact PCC &amp; MEC provides</h3>
            <div className="impact-areas__grid">
              {impactAreas.map(({ icon: Icon, title, copy }) => (
                <article className="impact-area-card" key={title}>
                  <span className="impact-area-card__icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="causes" className="causes" aria-labelledby="causes-title">
          <div className="causes__pattern" aria-hidden="true" />
          <div className="shell section-heading section-heading--dark">
            <div>
              <Eyebrow light>Causes</Eyebrow>
              <h2 id="causes-title">Causes That Inspire</h2>
            </div>
            <p>From education to relief efforts, every cause reflects our shared mission to empower.</p>
          </div>
          <div className="shell cause-grid">
            {causes.map((cause) => (
              <Link href={`/causes/${cause.slug}`} className="cause-card" key={cause.slug}>
                <div className="cause-card__image"><img src={cause.image} alt="" /></div>
                <div className="cause-card__body">
                  <h3>{cause.title}</h3>
                  <dl><div><dt>Raised Amount</dt><dd>{cause.raised}</dd></div><div><dt>Goal Amount</dt><dd>{cause.goal}</dd></div></dl>
                  <span className="cause-card__cta">Learn More <ChevronRight size={16} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="shell cause-footer"><p>Explore all causes and join us in making a meaningful impact.</p><span /><a href="#causes">View All Causes</a></div>
        </section>

        <section id="programs" className="programs section-light" aria-labelledby="programs-title">
          <div className="shell section-heading">
            <div>
              <Eyebrow>Programs</Eyebrow>
              <h2 id="programs-title">Spark Positive Change</h2>
            </div>
            <p>Our efforts provide care, skills, and support igniting hope and lasting impact in the lives.</p>
          </div>
          <div className="shell program-layout">
            <div className="program-tabs" role="tablist" aria-label="Careon programs">
              {programs.map((item, index) => <button type="button" key={item.title} role="tab" aria-selected={activeProgram === index} className={activeProgram === index ? "is-active" : ""} onClick={() => setActiveProgram(index)}><span>0{index + 1}</span>{item.title}</button>)}
            </div>
            <article className="program-detail" role="tabpanel">
              <img src={program.image} alt="" />
              <div className="program-detail__content">
                <p className="kicker">{program.kicker}</p>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <dl><div><dt>Raised Amount</dt><dd>{program.raised}</dd></div><div><dt>Goal Amount</dt><dd>{program.goal}</dd></div></dl>
                <ButtonLink variant="outline" href={`/programs/${program.slug}`}>Learn More</ButtonLink>
              </div>
              <div className="program-detail__controls"><button aria-label="Previous program" type="button" onClick={() => cycleProgram(-1)}><ArrowLeft size={18} /></button><button aria-label="Next program" type="button" onClick={() => cycleProgram(1)}><ArrowRight size={18} /></button></div>
            </article>
          </div>
        </section>

        <section id="projects" className="help" aria-labelledby="help-title">
          <div className="shell help__heading"><Eyebrow light>How you can help</Eyebrow><h2 id="help-title">United, We Transform</h2><p>Feeding families, educating children, impacting lives compassion and support.</p></div>
          <div className="help__rail" aria-label="Ways to contribute">
            {helpOptions.map((option, index) => <article className="help-card" key={option.title}><img src={option.image} alt="" /><div><span>0{index + 1}</span><h3>{option.title}</h3><p>{option.copy}</p><ArrowRight size={21} /></div></article>)}
          </div>
          <div className="shell help__foot"><p>Your support can transformed lives and inspire better futures.</p><DonationCheckoutButton className="action action--primary">Join Our Missions <MoveRight size={16} strokeWidth={1.8} aria-hidden="true" /></DonationCheckoutButton></div>
        </section>

        <section id="blog" className="stories section-light" aria-labelledby="stories-title">
          <div className="shell section-heading">
            <div><Eyebrow>Blogs</Eyebrow><h2 id="stories-title">News. Stories. Voices</h2></div>
            <p>Explore updates, field notes, and impact stories that amplify real-world change daily.</p>
          </div>
          <div className="shell story-grid">
            {blogs.map((blog) => <Link className="story-card" href={`/blog/${blog.slug}`} key={blog.slug}><div><img src={blog.image} alt="" /></div><p>{blog.date}</p><h3>{blog.title}</h3><span>Read Story <ArrowRight size={15} /></span></Link>)}
          </div>
          <div className="shell story-footer"><p>Discover stories and become part of the impact they inspire</p><ButtonLink variant="outline" href="#blog">View All Blogs</ButtonLink></div>
        </section>

        <section className="faq section-light" aria-labelledby="faq-title">
          <div className="shell faq__grid">
            <div><Eyebrow>FAQ</Eyebrow><h2 id="faq-title">What You’re Thinking, We’ve Answered.</h2><p>Find helpful answers to common questions about donating, volunteering &amp; fundraising.</p></div>
            <div className="faq-list">
              {faqs.map((question, index) => <article key={question} className={activeFaq === index ? "faq-row is-open" : "faq-row"}><button type="button" aria-expanded={activeFaq === index} onClick={() => setActiveFaq((active) => active === index ? null : index)}><span>{question}</span>{activeFaq === index ? <Minus size={19} /> : <Plus size={19} />}</button>{activeFaq === index && <p>Careon channels each contribution toward practical, accountable programmes shaped with community partners.</p>}</article>)}
            </div>
          </div>
        </section>

        <section id="donate" className="donate-band section-light" aria-labelledby="donate-title">
          <div className="shell">
            <DonateGlobeSection />
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="shell newsletter"><div><Eyebrow light>Newsletter</Eyebrow><h2>Be the first to hear how you&apos;re making a difference.</h2></div><form onSubmit={subscribe}><label htmlFor="newsletter-email">Sign up for our newsletter and never miss an update.</label><div><input id="newsletter-email" required type="email" value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} placeholder="name@email.com" /><button aria-label="Subscribe" type="submit"><ArrowRight size={19} /></button></div>{message && <p className="form-message" role="status">{message}</p>}</form></div>
        <div className="shell footer-grid"><div className="footer-brand"><a className="brand" href="#top"><img src={sourceImages.mark} alt="" /><strong>PCC &amp; MEC</strong></a><p>We are a non-profit organisation in Bangladesh that works towards supporting underprivileged children reach their full potential – physical, mental as well as emotional.</p><div className="footer-brand__social"><a href="#contact" aria-label="Share"><Share2 size={15} /></a><a href="#contact" aria-label="Visit our website"><Globe size={15} /></a></div></div><div><h3>Navigation</h3><a href="#top">Home</a><a href="#about">About</a><a href="#causes">Causes</a><a href="#donate">Donate</a></div><div><h3>Other Links</h3><a href="#programs">Programs</a><a href="#blog">Blogs</a><a href="#faq-title">Privacy policy</a><a href="#faq-title">Terms and Conditions</a></div><div><h3>Social Connect</h3><a href="#contact"><Linkedin size={15} /> Linkedin</a><a href="#contact"><Instagram size={15} /> Instagram</a><a href="#contact"><X size={15} /> X</a></div><div><h3>Contact us</h3><a href="tel:+919730627087"><Phone size={15} /> +91 9730627087</a><a href="mailto:Careon.foundation@gmail.com"><Mail size={15} /> Careon.foundation@gmail.com</a><p><MapPin size={15} /> House 14, Road 2, Sonadanga, Khulna 9100, Bangladesh</p></div></div>
        <div className="shell footer-bottom"><p>© 2026 Careon. All rights reserved.</p></div>
      </footer>
    </div>
  );
}

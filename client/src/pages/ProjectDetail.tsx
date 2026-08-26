/** Careons reference recreation — full case-study route for a featured project. */
import { ChevronLeft, MoveRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { programs, projects } from "@/lib/careonData";
import { DonationCheckoutButton } from "@/components/DonationCheckout";
import SiteHeader from "@/components/SiteHeader";
import NotFound from "./NotFound";
import "../detail.css";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const project = projects.find((item) => item.slug === params?.slug);
  if (!project) return <NotFound />;

  const relatedProjects = [
    ...projects.filter((item) => item.slug !== project.slug && item.category === project.category),
    ...projects.filter((item) => item.slug !== project.slug && item.category !== project.category),
  ].slice(0, 3);
  const relatedPrograms = programs.slice(0, 2);

  return (
    <div className="detail-page">
      <SiteHeader variant="detail" />
      <main>
        <section className="detail-hero">
          <img src={project.heroImage} alt="" />
          <div className="detail-hero__shade" />
          <div className="detail-shell detail-hero__content">
            <Link href="/#featured-projects" className="detail-back"><ChevronLeft size={16} /> Back to Projects</Link>
            <p className="detail-kicker">Case Study · {project.category} · {project.location}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
        </section>

        <section className="detail-summary">
          <div className="detail-shell detail-summary__grid">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="detail-label">{stat.label}</p>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-body">
          <div className="detail-shell detail-body__grid">
            <div><p className="detail-kicker detail-kicker--dark">The full story</p><h2>What this work looked like on the ground.</h2></div>
            <div className="detail-body__copy"><p>{project.overview}</p></div>
          </div>
        </section>

        <section className="detail-story" aria-label="Challenge, approach, and outcome">
          <div className="detail-shell detail-story__grid">
            <div className="detail-story__item">
              <h3>The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div className="detail-story__item">
              <h3>Our Approach</h3>
              <p>{project.approach}</p>
            </div>
            <div className="detail-story__item">
              <h3>The Outcome</h3>
              <p>{project.outcome}</p>
            </div>
          </div>
        </section>

        <section className="detail-gallery" aria-labelledby="gallery-title">
          <div className="detail-shell">
            <p className="detail-kicker detail-kicker--dark">Gallery</p>
            <h2 id="gallery-title">The work, in the field.</h2>
            <div className="detail-gallery__grid">
              {project.gallery.map((src, index) => (
                <img key={src + index} src={src} alt={`${project.title} — field photo ${index + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        <section className="detail-donation" aria-labelledby="detail-donation-title">
          <div className="detail-shell detail-donation__inner">
            <div><p className="detail-kicker">Take part</p><h2 id="detail-donation-title">Help fund the next project like this one.</h2></div>
            <div><DonationCheckoutButton className="detail-donation__button" campaign={project.title}>Register your support <MoveRight size={17} /></DonationCheckoutButton></div>
          </div>
        </section>

        <section className="detail-related" aria-labelledby="related-title">
          <div className="detail-shell">
            <p className="detail-kicker detail-kicker--dark">Keep exploring</p>
            <h2 id="related-title">More projects &amp; programs</h2>
          </div>

          <div className="detail-shell detail-related__group">
            <h3 className="detail-related__group-title">More Projects</h3>
            <div className="detail-related__grid">
              {relatedProjects.map((item) => (
                <Link key={item.slug} href={`/projects/${item.slug}`} className="detail-related__card">
                  <img src={item.heroImage} alt="" loading="lazy" />
                  <div>
                    <span className="detail-related__tag">{item.category === project.category ? "Related Project" : "More Work"}</span>
                    <h4>{item.title}</h4>
                    <p>{item.highlight}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="detail-shell detail-related__group">
            <h3 className="detail-related__group-title">Related Programs</h3>
            <div className="detail-related__grid">
              {relatedPrograms.map((prog) => (
                <Link key={prog.slug} href={`/programs/${prog.slug}`} className="detail-related__card">
                  <img src={prog.image} alt="" loading="lazy" />
                  <div>
                    <span className="detail-related__tag">Program</span>
                    <h4>{prog.title}</h4>
                    <p>{prog.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="detail-footer"><div className="detail-shell"><span>PCC &amp; MEC</span><Link href="/">Return to the homepage <MoveRight size={15} /></Link></div></footer>
    </div>
  );
}

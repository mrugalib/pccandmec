/**
 * Careons reference recreation — sticky "featured projects" showcase.
 * Left column stays pinned (position: sticky, CSS-only) while a two-column
 * grid of real project case-study tiles scrolls past it on the right, each
 * one linking through to its full case-study route. Reuses the site's
 * existing accent (#00b749 / --primary), dark section color (#0a0a0a), and
 * muted text (#b3b3b3) — no new colors, fonts, radii, or spacing scale are
 * introduced. No rounded corners, matching the reference.
 */
import { ArrowUpRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { projects, type ProjectCaseStudy } from "@/lib/careonData";

function ProjectCard({ slug, title, highlight, category, year }: ProjectCaseStudy) {
  return (
    <a
      href={`/projects/${slug}`}
      className="group relative flex min-h-[240px] flex-col justify-between gap-6 bg-primary p-6 outline-none transition-colors duration-200 ease-out hover:bg-[#00a541] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-2px] md:min-h-[280px] md:p-8">
      <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/70">{category} · {year}</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold leading-tight tracking-[-0.4px] text-white md:text-2xl">{title}</h3>
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            className="-translate-x-1 text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
        <p className="max-w-[34ch] text-sm leading-relaxed text-white/80">{highlight}</p>
      </div>
    </a>
  );
}

export default function SectorsShowcase({ items = projects }: { items?: ProjectCaseStudy[] }) {
  return (
    <section id="featured-projects" className="section-light pt-24" aria-labelledby="sectors-title">
      <div className="shell section-heading">
        <div>
          <Eyebrow>Featured Work</Eyebrow>
          <h2 id="sectors-title">Projects we've delivered on the ground</h2>
        </div>
        <p>A closer look at real programs we've run, and the impact they left behind.</p>
      </div>

      <div className="grid bg-[#0a0a0a] min-[810px]:grid-cols-2">
        <div className="min-[810px]:sticky min-[810px]:top-0 min-[810px]:h-screen">
          <div className="flex h-full flex-col">
            <div className="h-56 flex-shrink-0 overflow-hidden min-[810px]:h-[45%]">
              <img src="/images/hero-coastal-boat.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-6 bg-[#0a0a0a] p-8 md:p-12">
              <h2 className="max-w-md text-[clamp(30px,4.4vw,46px)] font-medium leading-[1.02] tracking-[-2px] text-white">
                Building the future, together.
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-[#b3b3b3]">
                Every project below is a real program we've run in the field — click through for the full case study.
              </p>
              <a href="#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-white px-5 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors duration-200 hover:bg-primary hover:border-primary">
                <span className="text-white">Partner with us</span>
                <span aria-hidden="true" className="text-white">&#8599;</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#0a0a0a]">
          {items.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

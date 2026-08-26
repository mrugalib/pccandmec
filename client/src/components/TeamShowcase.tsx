import { useEffect, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/Eyebrow";

/**
 * Injects only the Font Awesome CDN (for the social icons). Typography
 * intentionally inherits the site's existing "Inter" font — no separate
 * font is loaded, so the headline matches every other section.
 */
function useTeamShowcaseAssets() {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    function ensureLink(attrs: Partial<HTMLLinkElement> & { rel: string; href: string }) {
      const existing = document.querySelector(`link[href="${attrs.href}"]`);
      if (existing) return;
      const link = document.createElement("link");
      Object.assign(link, attrs);
      document.head.appendChild(link);
      links.push(link);
    }

    ensureLink({
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    });

    return () => {
      links.forEach((link) => link.parentNode?.removeChild(link));
    };
  }, []);
}

function AnimatedContent({
  children,
  delay = 0,
  distance = 40,
  className,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface TeamMember {
  name: string;
  email: string;
  designation: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "SK Abu Jafor",
    email: "skabujafor@pccmec.org",
    designation: "President",
    photo: "https://images.unsplash.com/photo-1649338101385-39c6566dd379?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Mirza Shamim Reza",
    email: "mirzashamimreza@pccmec.org",
    designation: "Vice President",
    photo: "https://images.unsplash.com/photo-1741455620227-3b1c51e01419?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Shafiquir Rahman",
    email: "shafiquirrahman@pccmec.org",
    designation: "General Secretary",
    photo: "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Dr. G M Toyebur Rahman",
    email: "gmtoyeburrahman@pccmec.org",
    designation: "Treasurer",
    photo: "https://images.unsplash.com/photo-1709381120033-86deda767904?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Dr. Rafique Uddin Ahmed",
    email: "rafiqueuddinahmed@pccmec.org",
    designation: "Executive Director",
    photo: "https://images.unsplash.com/photo-1779281128550-8cc634361a17?auto=format&fit=crop&q=80&w=600",
  },
];

export default function TeamShowcase() {
  useTeamShowcaseAssets();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full bg-white py-[120px] px-6 md:px-12 lg:px-24 overflow-hidden antialiased selection:bg-[#002366]/10 selection:text-[#002366]"
      style={{ color: "#0f172a", fontFamily: "inherit" }}
    >
      <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
      <div className="max-w-7xl mx-auto">
        <header className="grid gap-6 mb-10 md:grid-cols-[1.4fr_.6fr] md:items-end md:gap-6 lg:mb-[70px]">
          <div>
            <AnimatedContent delay={0}>
              <Eyebrow>Our Team</Eyebrow>
            </AnimatedContent>
            <AnimatedContent delay={0.15}>
              <h1 className="text-[clamp(34px,5vw,50px)] font-semibold leading-[1.06] tracking-[-2.4px] mb-0 text-black">
                The People Leading Our
                <span className="italic font-normal text-[#002366] pl-2">Mission</span>
              </h1>
            </AnimatedContent>
          </div>
          <AnimatedContent delay={0.3}>
            <p className="text-[#3d3d3d] text-[14px] leading-[1.45] max-w-[310px] font-normal">
              Guided by experienced leaders committed to empowering coastal and Haor communities across Bangladesh.
            </p>
          </AnimatedContent>
        </header>

        <div className="relative group">
          <div
            ref={scrollContainerRef}
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:flex sm:overflow-x-auto sm:gap-6 sm:pb-12 sm:no-scrollbar sm:snap-x sm:snap-mandatory sm:cursor-grab sm:active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" as any }}
          >
            {teamMembers.map((member, idx) => (
              <AnimatedContent
                key={member.name}
                delay={0.4 + idx * 0.1}
                distance={60}
                className="w-full sm:flex-none sm:w-[45%] lg:w-[calc(20%-19.2px)] sm:snap-start group/card"
              >
                <div className="relative aspect-[1/1.15] rounded-[18px] overflow-hidden bg-[#f1f5f9] mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-1000 ease-out group-hover/card:scale-110"
                  />
                </div>
                <div className="flex flex-col items-start px-1">
                  <h3 className="text-base font-bold tracking-[-0.02em] text-[#0f172a] mb-0.5">{member.name}</h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-[#002366] text-[12px] font-medium tracking-tight mb-0.5 no-underline transition-opacity hover:opacity-80 truncate w-full"
                  >
                    {member.email}
                  </a>
                  <p className="text-[#64748b] text-[13px] font-normal leading-normal whitespace-nowrap overflow-hidden text-ellipsis mb-3 w-full">
                    {member.designation}
                  </p>
                  <div className="flex items-center gap-3">
                    <a href="#" className="text-[#cbd5e1] text-[14px] transition-colors duration-300 hover:text-[#002366]">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="#" className="text-[#cbd5e1] text-[14px] transition-colors duration-300 hover:text-[#002366]">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#" className="text-[#cbd5e1] text-[14px] transition-colors duration-300 hover:text-[#002366]">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Plus,
  Minus,
  MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero-centerpiece.jpg";
import projQuick from "@/assets/project-quick.jpg";
import projWayki from "@/assets/project-wayki.jpg";
import projEcom from "@/assets/project-ecommerce.jpg";
import projMovies from "@/assets/project-movies.jpg";
import projFeedback from "@/assets/project-feedback.jpg";
import wpVida from "@/assets/wp-vida-creede.png";
import wpJlo from "@/assets/wp-jlo.png";

/* ---------------- Custom cursor ---------------- */

function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    let rx = 0, ry = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${tx}px, ${ty}px) translate(-50%,-50%)`;
      }
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!ring.current) return;
      if (t.closest("[data-cta]")) ring.current.classList.add("is-cta");
      else if (t.closest("a,button,[data-hover]")) ring.current.classList.add("is-hover");
    };
    const leave = () => {
      ring.current?.classList.remove("is-hover", "is-cta");
    };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    const raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}

/* ---------------- Reveal on scroll ---------------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------------- Nav ---------------- */

const SECTIONS = [
  { id: "work", label: "Work", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "stack", label: "Stack", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "wordpress", label: "WordPress", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

function Nav() {
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[#fbfbf9]/80 border-b border-[color:var(--border)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-2xl italic leading-none">Michael Sanabria</span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">MS · '26</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link transition-colors hover:text-[color:var(--foreground)] ${active === s.id ? "active text-[color:var(--foreground)]" : ""}`}
            >
              <span className="mr-1 text-[color:var(--muted-foreground)]/60">{s.num}</span>
              {s.label}
            </a>
          ))}
        </nav>
        <a
          data-cta
          href="#contact"
          className="group hidden md:inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[color:var(--foreground)]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-strong)] transition-all group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </span>
          Start a project
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="reveal font-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--muted-foreground)] mb-8 flex items-center gap-3">
              <span className="w-12 h-px bg-[color:var(--border-strong)]" />
              Full Stack AI JS/TS Developer
              <span className="text-[color:var(--muted-foreground)]/60">/</span>
              Portfolio 2026
            </p>
            <h1 className="reveal font-display text-[clamp(4.5rem,14vw,11rem)] leading-[0.82] tracking-tight text-[color:var(--foreground)]">
              Michael <br />
              <span className="italic ml-[0.2em] relative">
                Sanabria
                <svg className="absolute -bottom-2 left-0 w-full h-1 text-[color:var(--foreground)]/10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </span>
            </h1>

            <div className="reveal mt-12 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
              <p className="max-w-sm text-xl md:text-2xl text-[color:var(--foreground)]/85 leading-snug font-light tracking-tight">
                Crafting <span className="font-semibold italic underline decoration-[color:var(--border-strong)] underline-offset-8">exceptional</span> web apps that ship fast and hold up under real traffic — with AI in the loop.
              </p>
              <div className="flex flex-col gap-5">
                <a
                  data-cta
                  href="#work"
                  className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border-strong)] transition-all duration-500 group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </span>
                  Explore projects
                </a>
                <a href="#" className="group inline-flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)]">
                    <Download className="h-3.5 w-3.5" />
                  </span>
                  Download CV
                </a>
                <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  <MapPin className="h-3 w-3" />
                  Medellín, Colombia
                </div>
              </div>
            </div>
          </div>

          <div className="reveal col-span-12 lg:col-span-4 mt-12 lg:mt-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[color:var(--surface)] shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Editorial portrait of a code and interface composition"
                className="h-full w-full object-cover editorial-grayscale scale-[1.05] hover:scale-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212]/40 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#fbfbf9]">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em]">System Design / 003</span>
                <span className="font-display italic text-lg">MS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[color:var(--border)] pt-10">
          <Stat value={3} suffix="+" label="Years shipping" />
          <Stat value={15} suffix="+" label="Projects" />
          <Stat value={95} suffix="%" label="Test coverage" />
          <div>
            <div className="font-display text-4xl">Available</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">Q1 · 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1200; const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const v = Math.round(value * (1 - Math.pow(1 - p, 3)));
          el.textContent = String(v);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div>
      <div className="font-display text-4xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">{label}</div>
    </div>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({ num, eyebrow, title, kicker }: { num: string; eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-16 grid grid-cols-12 gap-8 items-end border-t border-[color:var(--border)] pt-10">
      <div className="col-span-12 md:col-span-8">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--muted-foreground)]">
          <span>{num}</span>
          <span className="w-8 h-px bg-[color:var(--border-strong)]" />
          {eyebrow}
        </div>
        <h2 className="reveal mt-6 font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.9]">
          {title}
        </h2>
      </div>
      {kicker && (
        <p className="reveal col-span-12 md:col-span-4 max-w-sm text-base text-[color:var(--muted-foreground)] leading-relaxed italic-serif text-lg">
          {kicker}
        </p>
      )}
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  const bullets = [
    { label: "Mechatronics roots" },
    { label: "Full stack shipper" },
    { label: "AI-native workflows" },
    { label: "Ships under load" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="02" eyebrow="About" title="From mechatronics — to full stack." />
        <div className="grid grid-cols-12 gap-8 items-start">
          <p className="reveal col-span-12 md:col-span-8 font-display text-3xl md:text-5xl leading-[1.1] tracking-tight">
            Engineer at heart. I care more about <span className="italic">what's happening under the hood</span> than which library gets the credit.
          </p>
          <div className="reveal col-span-12 md:col-span-4 space-y-4">
            {bullets.map((b, i) => (
              <div key={b.label} className="flex items-baseline gap-4 border-b border-[color:var(--border)] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-[color:var(--foreground)]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stack ---------------- */

const STACK: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Redux", "GraphQL", "Ant Design", "Sass"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "AWS Lambda", "CI/CD"],
  Testing: ["Cypress", "Jest", "Playwright", "RTL"],
  "AI workflows": ["Claude Code", "Custom skills", "Agent orchestration"],
  Practices: ["Clean Code", "SOLID", "Scrum", "Design Patterns"],
};

function Stack() {
  const marquee = Object.values(STACK).flat();
  const track = [...marquee, ...marquee];
  return (
    <section id="stack" className="relative py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="03" eyebrow="Stack" title="Tools I reach for." kicker="Pragmatic, JS/TS-heavy, with AI in the loop." />

        <div className="reveal grid grid-cols-12 gap-x-8 gap-y-10">
          {Object.entries(STACK).map(([group, items], gi) => (
            <div key={group} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="flex items-baseline justify-between border-b border-[color:var(--border-strong)] pb-3">
                <div className="font-display text-2xl italic">{group}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  {String(gi + 1).padStart(2, "0")} / {String(Object.keys(STACK).length).padStart(2, "0")}
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {items.map((it) => (
                  <li key={it} className="flex items-baseline gap-3 text-[color:var(--foreground)]/85">
                    <span className="font-mono text-[9px] text-[color:var(--muted-foreground)]">◆</span>
                    <span className="text-base">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-20 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)] border-y border-[color:var(--border)] py-6">
        <div className="marquee-track flex gap-10 whitespace-nowrap font-display italic text-5xl md:text-7xl text-[color:var(--foreground)]/15 tracking-tight">
          {track.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              <span>{t}</span>
              <span className="text-[color:var(--accent-red)]/50 not-italic">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */

type Exp = {
  role: string;
  company: string;
  dates: string;
  short: string;
  detail: string;
};

const EXPERIENCE: Exp[] = [
  {
    role: "Software Engineer",
    company: "EPAM · Insurance sector",
    dates: "Jun 2025 – Present",
    short: "Migrating legacy APIs to Node.js with AI-assisted workflows.",
    detail:
      "I use an existing internal AI migration tool to speed up scaffolding, then refine its output, write custom skills for recurring patterns, and orchestrate multi-step agent runs. Built and tested Node.js APIs on AWS Lambda and API Gateway.",
  },
  {
    role: "Frontend Mentor (React)",
    company: "EPAM",
    dates: "Sep – Nov 2025",
    short: "Led a structured React mentorship track for junior developers.",
    detail:
      "Covered hooks, state management, and clean code through code review and project evaluation. One mentee was hired after completing the program.",
  },
  {
    role: "Software Engineer",
    company: "EPAM · Healthcare technology sector",
    dates: "Feb – May 2025",
    short: "Modernized a cloud platform connecting financial and clinical workflows.",
    detail:
      "Built unit, integration, and BDD tests with Playwright and OJET/Preact across cloud services.",
  },
  {
    role: "Software Engineer",
    company: "Globant · Entertainment and media",
    dates: "May 2024 – Jan 2025",
    short: "Built new sections of an internal analytics platform.",
    detail:
      "Used React, TypeScript, and Ant Design with vertical slice and onion architecture. Presented demos and interviewed frontend candidates.",
  },
  {
    role: "Software Engineer",
    company: "Globant · Large-scale retail platform",
    dates: "Jan 2023 – Apr 2024",
    short: "Built e-commerce features for a platform serving millions.",
    detail:
      "React, Next.js, GraphQL Apollo, SSR and prefetching for faster loads. Test coverage above 95% with RTL.",
  },
  {
    role: "Software Engineer",
    company: "Globant · Retirement and financial services",
    dates: "Apr – Dec 2022",
    short: "Built accessible interfaces for a retirement plan platform.",
    detail:
      "React and TypeScript meeting AA accessibility standards, AWS for delivery, client sprint demos.",
  },
  {
    role: "Website Designer",
    company: "EnElMundoDelMarketing",
    dates: "Oct 2020 – May 2021",
    short: "Designed client websites with WordPress and Divi.",
    detail: "Balanced fast turnaround with consistent quality across a portfolio of client sites.",
  },
];

function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="04" eyebrow="Experience" title="Timeline." kicker="Enterprise consulting × personal products." />

        <ol className="border-t border-[color:var(--border-strong)]">
          {EXPERIENCE.map((exp, i) => {
            const isOpen = open === i;
            return (
              <li key={exp.role + exp.dates} className="reveal border-b border-[color:var(--border)]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group grid w-full grid-cols-12 items-baseline gap-6 py-8 text-left transition-colors hover:bg-[color:var(--surface)]/60"
                >
                  <div className="col-span-12 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                    {exp.dates}
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <div className="font-display text-2xl md:text-4xl leading-[1.05]">
                      {exp.role}
                      <span className="italic text-[color:var(--muted-foreground)]"> — {exp.company}</span>
                    </div>
                    <div className="mt-2 text-sm text-[color:var(--muted-foreground)]">{exp.short}</div>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--foreground)]/80">{exp.detail}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:justify-end">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--border-strong)] text-[color:var(--foreground)]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */

type Project = {
  name: string;
  tag: string;
  tech: string[];
  image: string;
  chrome?: { url: string };
  href?: string;
  soon?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Quick",
    tag: "Full CRUD recipe app with favorites and a premium payment tier.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "ePayco", "Cypress"],
    image: projQuick,
    href: "https://github.com/michaeldevelopment",
  },
  {
    name: "Wayki",
    tag: "Helps missing pets find their way home with maps and geolocation.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Google Maps"],
    image: projWayki,
    chrome: { url: "festive-turing-3a0437.netlify.app" },
    href: "https://festive-turing-3a0437.netlify.app",
  },
  {
    name: "E-commerce app",
    tag: "Storefront with a full checkout flow.",
    tech: ["Next.js", "TypeScript", "Zustand", "React Hook Form"],
    image: projEcom,
    soon: true,
  },
  {
    name: "Entertainment hub",
    tag: "Browse and filter a movies and shows catalog.",
    tech: ["React", "TypeScript", "Vite", "Redux Toolkit"],
    image: projMovies,
  },
  {
    name: "Product feedback app",
    tag: "Feedback board for prioritizing product requests.",
    tech: ["Next.js", "GraphQL", "Apollo", "styled-components"],
    image: projFeedback,
    soon: true,
  },
];

function ProjectRow({ p, i }: { p: Project; i: number }) {
  const wrapper = (children: React.ReactNode) =>
    p.href ? (
      <a href={p.href} target="_blank" rel="noreferrer" className="block group">{children}</a>
    ) : (
      <div className="group">{children}</div>
    );

  return (
    <li className="reveal border-b border-[color:var(--border)]">
      {wrapper(
        <div className="relative grid grid-cols-12 items-center gap-6 py-8 md:py-10 transition-colors">
          <div className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="col-span-10 md:col-span-5">
            <h3 className="font-display text-3xl md:text-6xl leading-[0.95] transition-colors group-hover:italic">
              {p.name}
            </h3>
            {p.soon && (
              <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--accent-red)]">
                <span className="h-1 w-1 rounded-full bg-[color:var(--accent-red)]" /> Shipping soon
              </span>
            )}
          </div>
          <div className="col-span-12 md:col-span-4 order-3 md:order-none">
            <p className="text-sm text-[color:var(--muted-foreground)] leading-relaxed">{p.tag}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--foreground)]/70 border border-[color:var(--border)] rounded-full px-2 py-0.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 flex md:justify-end items-center">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border-strong)] transition-all duration-500 group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </div>

          {/* Hover-reveal thumbnail */}
          <div className="pointer-events-none absolute right-[26%] top-1/2 -translate-y-1/2 z-10 hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <div className="w-[280px] aspect-[4/3] overflow-hidden shadow-[var(--shadow-card)] rotate-2">
              <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover editorial-grayscale" />
            </div>
          </div>
        </div>,
      )}
    </li>
  );
}

function Projects() {
  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="01" eyebrow="Featured work" title="Selected projects." kicker="Hover a row — the work is the argument." />

        <ul className="border-t border-[color:var(--border-strong)]">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} />
          ))}
        </ul>

        {/* Static gallery for mobile & context */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.slice(0, 3).map((p) => (
            <div key={p.name} className="reveal">
              <div className="aspect-[4/3] overflow-hidden bg-[color:var(--surface)]">
                <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="h-full w-full object-cover editorial-grayscale" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="font-display text-2xl italic">{p.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">{p.tech[0]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WordPress ---------------- */

const ARCHIVE = [
  "Aneta Web Design",
  "Hector Web Design",
  "Yokairy Web Design",
  "Yokairy Instagram Feed",
  "Melecio Web Design",
  "Melecio Instagram Feed",
  "Trinidad Instagram Feed",
  "Maribel Instagram Feed",
  "Binet Cuts Instagram Feed",
];

function WordPress() {
  const live = [
    { name: "Vida Creede", url: "vidaeattolive.com", href: "https://vidaeattolive.com", note: "Pre-order landing page for a Colorado trail-food café.", img: wpVida },
    { name: "JLO Consulting Group", url: "jloconsultinggroup.com", href: "https://jloconsultinggroup.com", note: "Immigration consulting site in Spanish with booking integration.", img: wpJlo },
  ];
  return (
    <section id="wordpress" className="relative py-24 md:py-32 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="05" eyebrow="WordPress & Divi" title="Client sites." kicker="Live picks and an archive on Behance." />

        <div className="grid gap-10 md:grid-cols-2">
          {live.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="reveal group block"
            >
              <div className="browser-chrome">
                <div className="browser-chrome-bar">
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-url">{l.url}</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--background)]">
                  <img src={l.img} alt={`${l.name} site preview`} loading="lazy" className="h-full w-full object-cover object-top editorial-grayscale" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-3xl italic">{l.name}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{l.note}</p>
                </div>
                <ExternalLink className="mt-1 h-5 w-5 text-[color:var(--muted-foreground)] transition-colors group-hover:text-[color:var(--foreground)]" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <div className="reveal flex items-end justify-between mb-6 border-b border-[color:var(--border-strong)] pb-4">
            <h3 className="font-display text-2xl italic">Archive</h3>
            <a
              href="https://behance.net/michaelsanabria2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
            >
              View all on Behance <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <ul>
            {ARCHIVE.map((name, i) => (
              <li key={name}>
                <a
                  href="https://behance.net/michaelsanabria2"
                  target="_blank"
                  rel="noreferrer"
                  className="reveal group flex items-baseline gap-6 border-b border-[color:var(--border)] py-5 transition-colors hover:text-[color:var(--foreground)]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)] w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl md:text-3xl italic-serif group-hover:italic">{name}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-[color:var(--muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */

const CERTS = [
  "Oracle Cloud Foundations Associate",
  "Oracle Cloud Data Foundations Associate",
  "Oracle Cloud AI Foundations Associate",
];

function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="06" eyebrow="Certifications" title="Credentialed." />
        <div className="grid gap-0 md:grid-cols-3 border-t border-[color:var(--border-strong)]">
          {CERTS.map((c, i) => (
            <div
              key={c}
              className={`reveal py-10 pr-8 ${i > 0 ? "md:border-l md:border-[color:var(--border)] md:pl-8" : ""}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">Oracle · {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-4 font-display text-2xl md:text-3xl leading-tight">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact + Footer ---------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 bg-[color:var(--foreground)] text-[color:var(--background)]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.4em] text-[color:var(--background)]/60">
          <span className="w-12 h-px bg-[color:var(--background)]/30" /> Contact / 07
        </div>
        <h2 className="reveal mt-8 font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.9]">
          Have a project in mind?<br />
          <span className="italic text-[color:var(--background)]/60">Let's talk.</span>
        </h2>

        <div className="reveal mt-16 grid grid-cols-12 gap-8 border-t border-[color:var(--background)]/20 pt-10">
          <div className="col-span-12 md:col-span-6 space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--background)]/50">Email</div>
            <a data-cta href="mailto:hello@michael.dev" className="font-display text-3xl md:text-5xl italic hover:text-[color:var(--accent-red)] transition-colors">
              hello@michael.dev
            </a>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4 md:items-end justify-end font-mono text-[11px] uppercase tracking-[0.28em]">
            <a href="https://linkedin.com/in/michael-sanabria/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 hover:text-[color:var(--background)]">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
            <a href="https://github.com/michaeldevelopment" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 hover:text-[color:var(--background)]">
              <Github className="h-3.5 w-3.5" /> GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
            <a href="https://behance.net/michaelsanabria2" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 hover:text-[color:var(--background)]">
              <ExternalLink className="h-3.5 w-3.5" /> Behance
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
            <a data-cta href="mailto:hello@michael.dev" className="group mt-2 inline-flex items-center gap-3 hover:text-[color:var(--background)]">
              <Mail className="h-3.5 w-3.5" /> Send email
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
        <div>© {new Date().getFullYear()} Michael Sanabria — Built with React & TanStack Start</div>
        <div>Medellín · Colombia</div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

export function PortfolioPage() {
  useReveal();
  return (
    <div className="grain relative min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Experience />
        <WordPress />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
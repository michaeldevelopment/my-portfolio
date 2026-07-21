import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Sparkles,
  Code2,
  Server,
  TestTube2,
  Bot,
  Compass,
  Award,
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
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "wordpress", label: "WordPress" },
  { id: "contact", label: "Contact" },
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
        scrolled ? "backdrop-blur-xl bg-[#0a0a0c]/70 border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--primary)] shadow-[0_0_12px_var(--primary-glow)]" />
          Michael Sanabria
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link transition-colors hover:text-white ${active === s.id ? "active text-white" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          data-cta
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)]/10 hover:text-white"
        >
          Start a project <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, rgba(0,0,0,1), rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white/70">
              <MapPin className="h-3.5 w-3.5 text-[color:var(--primary)]" />
              Full Stack AI JS/TS Developer · Medellín, Colombia
            </div>
            <h1 className="reveal mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.95]">
              I build web apps that{" "}
              <span className="text-[color:var(--accent-red)]">ship fast</span>
              <br className="hidden md:block" /> and hold up under real traffic.
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg text-white/60">
              AI-native full stack development: React, Next.js, Node.js, and agentic workflows.
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-3">
              <a
                data-cta
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[color:var(--accent-red)]"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-white/30"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                Start a project →
              </a>
            </div>

            <div className="reveal mt-14 grid grid-cols-3 gap-6 max-w-lg">
              <Stat value={3} suffix="+" label="Years shipping" />
              <Stat value={15} suffix="+" label="Projects" />
              <Stat value={95} suffix="%" label="Test coverage" />
            </div>
          </div>

          <div className="reveal lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[36px] bg-[color:var(--primary)]/10 blur-3xl" />
              <div className="browser-chrome">
                <div className="browser-chrome-bar">
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-dot" />
                  <span className="browser-chrome-url">michael.dev — building</span>
                </div>
                <img
                  src={heroImg}
                  alt="Abstract dark UI collage: code editor and browser panels with electric blue glow"
                  width={1600}
                  height={1200}
                  className="block w-full"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -left-4 rounded-full border border-white/10 bg-[#0f0f14] px-3 py-1.5 text-xs font-mono text-white/70">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--primary)] shadow-[0_0_10px_var(--primary-glow)]" />
                available for work
              </div>
            </div>
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
      <div className="font-display text-3xl font-semibold">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/40">{label}</div>
    </div>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <div className="reveal flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/40">
          <span className="h-px w-8 bg-white/30" />
          {eyebrow}
        </div>
        <h2 className="reveal mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1]">
          {title}
        </h2>
      </div>
      {kicker && <p className="reveal max-w-sm text-sm text-white/50">{kicker}</p>}
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  const bullets = [
    { icon: Compass, label: "Mechatronics roots" },
    { icon: Code2, label: "Full stack shipper" },
    { icon: Bot, label: "AI-native workflows" },
    { icon: Sparkles, label: "Ships under load" },
  ];
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="About" title="From mechatronics to full stack." />
        <p className="reveal max-w-3xl font-display text-2xl md:text-3xl leading-tight text-white/85">
          Engineer at heart — I care more about <span className="text-[color:var(--primary)]">what's happening under the hood</span> than which library gets the credit.
        </p>
        <div className="reveal mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {bullets.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
              <Icon className="h-4 w-4 text-[color:var(--primary)]" />
              <span className="text-sm text-white/80">{label}</span>
            </div>
          ))}
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
    <section id="stack" className="relative py-24 md:py-32 border-y border-white/5 bg-[#0c0c11]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="Stack" title="Tools I reach for." kicker="Pragmatic, JS/TS-heavy, with AI in the loop." />

        <div className="reveal grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(STACK).map(([group, items]) => {
            const Icon = groupIcon(group);
            return (
              <div
                key={group}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)] p-6 transition-all hover:border-[color:var(--primary)]/40 hover:shadow-[0_20px_60px_-25px_var(--primary-glow)]"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                    <Icon className="h-4 w-4 text-[color:var(--primary)]" />
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/50">{group}</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span key={it} className="pill rounded-full px-3 py-1.5 text-xs text-white/85">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="reveal mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex gap-10 whitespace-nowrap font-display text-4xl md:text-6xl text-white/10 uppercase tracking-tight">
          {track.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              <span>{t}</span>
              <span className="text-[color:var(--primary)]/40">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function groupIcon(group: string) {
  if (group === "Frontend") return Code2;
  if (group === "Backend") return Server;
  if (group === "Testing") return TestTube2;
  if (group === "AI workflows") return Bot;
  return Sparkles;
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
        <SectionHeader eyebrow="Experience" title="Timeline." kicker="Enterprise consulting × personal products." />
        <div className="relative">
          <div className="timeline-line" />
          <ol className="space-y-3">
            {EXPERIENCE.map((exp, i) => {
              const isOpen = open === i;
              return (
                <li key={exp.role + exp.dates} className="reveal relative pl-16 md:pl-20">
                  <span
                    className={`absolute left-4 md:left-5 top-6 grid h-6 w-6 place-items-center rounded-full border transition-all ${
                      isOpen
                        ? "border-[color:var(--primary)] bg-[color:var(--primary)] shadow-[0_0_0_6px_rgba(45,91,255,.15)]"
                        : "border-white/20 bg-[#0a0a0c]"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-white" : "bg-white/40"}`} />
                  </span>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left rounded-2xl border border-white/10 bg-[color:var(--surface)] p-6 transition-all hover:border-[color:var(--primary)]/40"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-white/40">{exp.dates}</div>
                        <div className="mt-1.5 font-display text-xl md:text-2xl font-semibold text-white">
                          {exp.role}
                          <span className="text-white/40"> · </span>
                          <span className="text-white/70">{exp.company}</span>
                        </div>
                        <div className="mt-2 text-sm text-white/60">{exp.short}</div>
                      </div>
                      <div className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </div>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">{exp.detail}</p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
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

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="project-card transition-transform duration-300 will-change-transform">
      {children}
    </div>
  );
}

function ProjectCard({ p, large }: { p: Project; large?: boolean }) {
  const content = (
    <TiltCard>
      <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]">
        <div className="relative">
          {p.chrome && (
            <div className="browser-chrome-bar">
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-url">{p.chrome.url}</span>
            </div>
          )}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#08080b]">
            <img
              src={p.image}
              alt={`${p.name} preview`}
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
            {p.soon && (
              <div className="absolute left-4 top-4 rounded-full border border-[color:var(--accent-red)]/40 bg-[color:var(--accent-red)]/15 px-3 py-1 text-xs font-medium text-[color:var(--accent-red)] backdrop-blur">
                Shipping soon
              </div>
            )}
          </div>
        </div>
        <div className="flex items-start justify-between gap-6 p-6 md:p-8">
          <div className="min-w-0">
            <h3 className={`font-display font-semibold ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
              {p.name}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/60">{p.tag}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="pill rounded-full px-2.5 py-1 text-[11px] font-mono text-white/70">{t}</span>
              ))}
            </div>
          </div>
          <div className="shrink-0 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all group-hover:border-[color:var(--primary)] group-hover:bg-[color:var(--primary)]">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </article>
    </TiltCard>
  );
  if (p.href) {
    return (
      <a href={p.href} target="_blank" rel="noreferrer" className="block reveal">{content}</a>
    );
  }
  return <div className="reveal">{content}</div>;
}

function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="Featured work" title="Selected projects." kicker="Screenshots, not slogans." />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8"><ProjectCard p={PROJECTS[0]} large /></div>
          <div className="lg:col-span-4"><ProjectCard p={PROJECTS[1]} /></div>
          <div className="lg:col-span-4"><ProjectCard p={PROJECTS[2]} /></div>
          <div className="lg:col-span-8"><ProjectCard p={PROJECTS[3]} large /></div>
          <div className="lg:col-span-12"><ProjectCard p={PROJECTS[4]} large /></div>
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
    <section id="wordpress" className="relative py-24 md:py-32 border-y border-white/5 bg-[#0c0c11]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader eyebrow="WordPress & Divi" title="Client sites." kicker="Live picks and an archive on Behance." />

        <div className="grid gap-8 md:grid-cols-2">
          {live.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="reveal group project-card block overflow-hidden rounded-3xl border border-white/10 bg-[color:var(--surface)]"
            >
              <div className="browser-chrome-bar">
                <span className="browser-chrome-dot" />
                <span className="browser-chrome-dot" />
                <span className="browser-chrome-dot" />
                <span className="browser-chrome-url">{l.url}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#08080b]">
                <img src={l.img} alt={`${l.name} site preview`} loading="lazy" className="h-full w-full object-cover object-top" />
              </div>
              <div className="flex items-start justify-between gap-6 p-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{l.name}</h3>
                  <p className="mt-2 text-sm text-white/60">{l.note}</p>
                </div>
                <ExternalLink className="mt-1 h-5 w-5 text-white/50 transition-colors group-hover:text-[color:var(--primary)]" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <div className="reveal flex items-end justify-between mb-6">
            <h3 className="font-display text-xl md:text-2xl text-white/80">Archive</h3>
            <a
              href="https://behance.net/michaelsanabria2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white"
            >
              View all on Behance <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {ARCHIVE.map((name, i) => (
              <a
                key={name}
                href="https://behance.net/michaelsanabria2"
                target="_blank"
                rel="noreferrer"
                className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)]"
              >
                <ArchiveThumb i={i} />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to top, rgba(10,10,12,.9), transparent 60%)" }}>
                  <span className="text-sm font-medium text-white">{name}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveThumb({ i }: { i: number }) {
  // stylized abstract site thumbnail in palette
  const variants = [
    { bg: "linear-gradient(135deg,#0f0f14 0%,#1a1a22 100%)", accent: "var(--primary)" },
    { bg: "linear-gradient(135deg,#131318 0%,#0a0a0c 100%)", accent: "var(--accent-red)" },
    { bg: "linear-gradient(160deg,#0f1220 0%,#12121a 100%)", accent: "var(--primary)" },
  ];
  const v = variants[i % variants.length];
  return (
    <div className="absolute inset-0" style={{ background: v.bg }}>
      <div className="absolute inset-3 rounded-lg border border-white/5">
        <div className="flex gap-1 p-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
        <div className="px-4 py-2 space-y-2">
          <div className="h-2 w-1/2 rounded" style={{ background: v.accent, opacity: .55 }} />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="h-1.5 w-2/3 rounded bg-white/10" />
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded bg-white/8" style={{ background: "rgba(255,255,255,.06)" }} />
            <div className="h-6 rounded" style={{ background: v.accent, opacity: .3 }} />
            <div className="h-6 rounded bg-white/8" style={{ background: "rgba(255,255,255,.06)" }} />
          </div>
          <div className="mt-2 h-1.5 w-1/3 rounded bg-white/10" />
        </div>
      </div>
    </div>
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
        <SectionHeader eyebrow="Certifications" title="Credentialed." />
        <div className="grid gap-4 md:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c} className="reveal flex items-center gap-4 rounded-2xl border border-white/10 bg-[color:var(--surface)] p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/10">
                <Award className="h-5 w-5 text-[color:var(--primary)]" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/40">Oracle</div>
                <div className="mt-1 text-sm font-medium text-white">{c}</div>
              </div>
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
    <section id="contact" className="relative py-24 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 300px at 50% 100%, rgba(45,91,255,.18), transparent 60%), radial-gradient(500px 240px at 50% 0%, rgba(230,57,70,.10), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
        <div className="reveal text-xs uppercase tracking-[0.24em] text-white/40">Contact</div>
        <h2 className="reveal mx-auto mt-6 max-w-4xl font-display text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[0.98]">
          Have a project in mind or a role to fill?{" "}
          <span className="text-[color:var(--primary)]">Let's talk.</span>
        </h2>
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            data-cta
            href="mailto:hello@michael.dev"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-red)]"
          >
            <Mail className="h-4 w-4" /> Send email
          </a>
          <a href="https://linkedin.com/in/michael-sanabria/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white hover:border-white/30">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/michaeldevelopment" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white hover:border-white/30">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://behance.net/michaelsanabria2" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm text-white hover:border-white/30">
            <ExternalLink className="h-4 w-4" /> Behance
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-10 text-xs text-white/40">
        <div>© {new Date().getFullYear()} Michael Sanabria. Built with React and TanStack Start.</div>
        <div className="font-mono">Medellín · Colombia</div>
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
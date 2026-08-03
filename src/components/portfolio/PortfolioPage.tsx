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
  Sun,
  Moon,
} from "lucide-react";

import heroImg from "@/assets/hero-centerpiece.jpg";
import projQuick from "@/assets/project-quick.jpg";
import projWayki from "@/assets/project-wayki.jpg";
import projEcom from "@/assets/project-ecommerce.jpg";
import projMovies from "@/assets/project-movies.jpg";
import wpVida from "@/assets/wp-vida-creede.png";
import wpJlo from "@/assets/wp-jlo.png";
import behanceImg from "@/assets/behance-preview.jpg";

/* ---------------- Custom cursor ---------------- */

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    let cx = 0, cy = 0, tx = 0, ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.42;
      cy += (ty - cy) * 0.42;
      const el = cursor.current;
      if (el) el.style.transform = `translate(${cx - el.offsetWidth / 2}px, ${cy - el.offsetHeight / 2}px)`;
      requestAnimationFrame(loop);
    };
    const enter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!cursor.current) return;
      if (t.closest("[data-cta]")) cursor.current.classList.add("is-cta");
      else if (t.closest("a,button,[data-hover]")) cursor.current.classList.add("is-hover");
    };
    const leave = () => {
      cursor.current?.classList.remove("is-hover", "is-cta");
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
      <div ref={cursor} className="cursor-ring" aria-hidden />
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

function useGlitch() {
  useEffect(() => {
    const fire = (g: Element) => {
      g.classList.add("on");
      setTimeout(() => g.classList.remove("on"), 850);
    };
    const els = Array.from(document.querySelectorAll<HTMLElement>(".gl"));
    const onEnter = (e: Event) => fire(e.currentTarget as Element);
    els.forEach((el) => el.addEventListener("mouseenter", onEnter));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            fire(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    els.forEach((el) => io.observe(el));
    const interval = window.setInterval(() => {
      const visible = els.filter((g) => {
        const r = g.getBoundingClientRect();
        return r.top > 0 && r.bottom < window.innerHeight;
      });
      if (visible.length) fire(visible[Math.floor(Math.random() * visible.length)]);
    }, 2600);
    return () => {
      els.forEach((el) => el.removeEventListener("mouseenter", onEnter));
      io.disconnect();
      window.clearInterval(interval);
    };
  }, []);
}

/* ---------------- Nav ---------------- */

const SECTIONS = [
  { id: "work", label: "Work", num: "01" },
  { id: "about", label: "About", num: "02" },
  { id: "stack", label: "Stack", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

function Nav() {
  const [active, setActive] = useState("work");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

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
      className={`fixed inset-x-0 top-0 z-50 bg-[color:var(--background)] border-b-2 border-[color:var(--foreground)] transition-shadow ${
        scrolled ? "shadow-[0_2px_0_0_#000000]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="font-display text-xl md:text-2xl leading-none tracking-tighter">
          Michael Sanabria<span className="text-[color:var(--accent-red)]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] font-bold uppercase tracking-[0.2em]">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-link transition-colors ${active === s.id ? "active text-[color:var(--accent-red)]" : "hover:text-[color:var(--accent-red)]"}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a data-cta href="#contact" className="hidden md:inline-flex items-center gap-2 chip chip-red">
          Contact <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-3 grid h-9 w-9 place-items-center border-2 border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] transition-colors"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 hard-b">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-9 px-6 md:px-10 py-16 md:py-24 lg:hard-r">
          <p className="reveal font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--foreground)] mb-8 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[color:var(--foreground)]" />
            Full Stack AI JS/TS Developer
            <span>/</span>
            Portfolio 2026
          </p>
          <h1 className="reveal font-display text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.82]">
            <span className="gl" data-t="Full Stack">Full Stack</span><br />
            <span className="gl text-[color:var(--accent-red)]" data-t="AI Developer">AI Developer</span>
          </h1>
          <div className="reveal mt-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <p className="max-w-md text-sm md:text-base font-bold uppercase leading-tight">
              Building web apps that ship fast with AI in the loop.
            </p>
            <div className="flex flex-col gap-4">
              <a data-cta href="#work" className="btn-fill fill-red group inline-flex items-center gap-3 chip chip-solid">
                <span className="inline-flex items-center gap-3">
                  Explore Projects
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </a>
              <a href="#" className="btn-fill fill-blue group inline-flex items-center gap-3 chip">
                <span className="inline-flex items-center gap-3"><Download className="h-3.5 w-3.5" /> Download CV</span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
          <div className="reveal p-6 md:p-8 hard-b flex flex-col gap-6">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)] mb-2">Location</div>
              <div className="font-display text-2xl leading-none flex items-center gap-2"><MapPin className="h-5 w-5" /> Colombia</div>
              <div className="font-mono text-[11px] font-bold uppercase mt-1">UTC−5</div>
            </div>
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)] mb-2">Status</div>
              <div className="inline-flex items-center gap-2 chip chip-red">
                <span className="h-2 w-2 bg-white animate-pulse" /> Available Now
              </div>
            </div>
          </div>
          <div className="reveal relative aspect-square lg:aspect-auto lg:flex-1 overflow-hidden bg-[color:var(--surface)]">
            <img src={heroImg} alt="System design composition" className="h-full w-full object-cover editorial-grayscale" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
              <span>MS · System / 003</span>
              <span>'26</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-3 hard-t">
        <div className="p-6 md:p-8 hard-r"><Stat value={3} suffix="+" label="Years shipping" /></div>
        <div className="p-6 md:p-8 md:hard-r"><Stat value={15} suffix="+" label="Projects" /></div>
        <div className="p-6 md:p-8">
          <div className="font-display text-3xl md:text-4xl">Enterprise</div>
          <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)]">EPAM · Globant</div>
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
      <div className="font-display text-4xl md:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">{label}</div>
    </div>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({ num, eyebrow, title, kicker }: { num: string; eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-12 md:mb-16 grid grid-cols-12 gap-6 md:gap-8 items-end border-t-2 border-[color:var(--foreground)] pt-8">
      <div className="col-span-12 md:col-span-8">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
          <span className="chip chip-red !px-2 !py-1 !text-[10px]">{num}</span>
          {eyebrow}
        </div>
        <h2 className="reveal mt-6 font-display text-[clamp(1.75rem,4.8vw,3.75rem)] leading-[0.88]">
          <span className="gl" data-t={title}>{title}</span>
        </h2>
      </div>
      {kicker && (
        <p className="reveal col-span-12 md:col-span-4 max-w-sm text-base md:text-lg font-bold uppercase leading-tight">
          {kicker}
        </p>
      )}
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  const bullets = [
    "Mechatronics roots",
    "Full stack shipper",
    "AI-native workflows",
    "Ships under load",
  ];
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="02" eyebrow="About" title="From Mechatronics — To Full Stack." />
        <div className="grid grid-cols-12 gap-6 hard-all">
          <p className="reveal col-span-12 md:col-span-8 p-8 md:p-12 md:hard-r font-display text-2xl md:text-4xl leading-[1.05]">
            Engineer at heart. I care more about <span className="text-[color:var(--accent-red)]">what's happening under the hood</span> than which library gets the credit.
          </p>
          <ul className="reveal col-span-12 md:col-span-4">
            {bullets.map((b, i) => (
              <li key={b} className={`flex items-baseline gap-4 px-6 py-5 ${i < bullets.length - 1 ? "hard-b" : ""}`}>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-bold uppercase">{b}</span>
              </li>
            ))}
          </ul>
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
  const track = [...marquee, ...marquee, ...marquee];
  return (
    <section id="stack" className="relative py-20 md:py-28 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="03" eyebrow="Stack" title="Core Stack." kicker="Pragmatic, JS/TS-heavy, AI in the loop." />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hard-all">
          {Object.entries(STACK).map(([group, items], gi) => (
            <div key={group} className={`p-6 md:p-8 ${gi % 3 !== 2 ? "lg:hard-r" : ""} ${gi % 2 !== 1 ? "md:hard-r lg:[&]:hard-r" : ""} hard-b`}>
              <div className="flex items-baseline justify-between mb-5">
                <div className="font-display text-xl md:text-2xl">{group}</div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  {String(gi + 1).padStart(2, "0")}/{String(Object.keys(STACK).length).padStart(2, "0")}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it, ii) => (
                  <span key={it} className={`chip ${ii === 0 ? "chip-solid" : ""}`}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-16 overflow-hidden border-y-2 border-[color:var(--foreground)] py-4 bg-[color:var(--foreground)] text-[color:var(--background)]">
        <div className="marquee-track flex gap-8 whitespace-nowrap font-display text-xl md:text-2xl tracking-tight">
          {track.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>{t}</span>
              <span className="text-[color:var(--accent-cyan)]">■</span>
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
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="04" eyebrow="Experience" title="Timeline." kicker="Enterprise × personal products." />

        <ol className="border-t-2 border-[color:var(--foreground)]">
          {EXPERIENCE.map((exp, i) => {
            const isOpen = open === i;
            return (
              <li key={exp.role + exp.dates} className="reveal hard-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group grid w-full grid-cols-12 items-baseline gap-4 md:gap-6 py-7 md:py-9 text-left transition-colors hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] px-2 md:px-4"
                >
                  <div className="col-span-12 md:col-span-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em]">
                    {exp.dates}
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="font-display text-xl md:text-3xl leading-[1.02]">
                      {exp.role}
                      <span className="text-[color:var(--accent-red)] group-hover:text-white"> — {exp.company}</span>
                    </div>
                    <div className="mt-2 text-sm font-bold uppercase opacity-70">{exp.short}</div>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-90">{exp.detail}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex md:justify-end">
                    <span className="grid h-11 w-11 place-items-center border-2 border-current">
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
];

function ProjectRow({ p, i }: { p: Project; i: number }) {
  const wrapper = (children: React.ReactNode) =>
    p.href ? (
      <a href={p.href} target="_blank" rel="noreferrer" className="block group cursor-pointer">{children}</a>
    ) : (
      <div className="group">{children}</div>
    );

  return (
    <li className="reveal hard-b">
      {wrapper(
        <div className="relative grid grid-cols-12 items-stretch transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
          <div className="col-span-12 md:col-span-1 md:hard-r flex md:flex-col items-center md:items-start justify-between md:justify-start p-4 md:p-6 gap-2">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em]">
              N° {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">2024</div>
          </div>
          <div className="col-span-12 md:col-span-6 md:hard-r p-6 md:p-10 flex flex-col justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-5xl leading-[0.9]">
                <span className="gl" data-t={p.name}>{p.name}</span>
              </h3>
              {p.soon && (
                <span className="mt-4 inline-flex items-center gap-2 chip chip-red !py-1">
                  <span className="h-1.5 w-1.5 bg-white" /> Shipping Soon
                </span>
              )}
            </div>
            <p className="text-base font-bold uppercase leading-tight opacity-80 max-w-md">{p.tag}</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="chip !py-1 !px-2 !text-[10px] group-hover:bg-transparent group-hover:text-white group-hover:border-white">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative overflow-hidden aspect-[4/3] md:aspect-auto bg-[color:var(--surface)]">
            <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="absolute inset-0 h-full w-full object-cover editorial-grayscale group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute top-4 right-4 grid h-12 w-12 place-items-center bg-white text-black group-hover:bg-[color:var(--accent-red)] group-hover:text-white transition-colors">
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
            </span>
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
        <SectionHeader num="01" eyebrow="Featured Work" title="Selected Projects." kicker="Five builds. The work is the argument." />

        <ul className="border-t-2 border-[color:var(--foreground)] border-x-2">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- WordPress ---------------- */

function WordPress() {
  const live = [
    { name: "Vida Creede", url: "vidaeattolive.com", href: "https://vidaeattolive.com", note: "Pre-order landing page for a Colorado trail-food café.", img: wpVida },
    { name: "JLO Consulting Group", url: "jloconsultinggroup.com", href: "https://jloconsultinggroup.com", note: "Immigration consulting site in Spanish with booking integration.", img: wpJlo },
  ];
  return (
    <section id="wordpress" className="relative py-20 md:py-28 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="05" eyebrow="WordPress & Divi" title="Client Sites." kicker="Live picks + Behance." />

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

        <div className="mt-16 max-w-2xl">
          <a
            href="https://behance.net/michaelsanabria2"
            target="_blank"
            rel="noreferrer"
            className="reveal group block hard-all"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--background)] hard-b">
              <img src={behanceImg} alt="Michael Sanabria Behance profile preview" loading="lazy" width={1920} height={1000} className="h-full w-full object-cover object-top" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 md:p-6">
              <h3 className="font-display text-base md:text-lg">See my web builder works on my Behance page</h3>
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact + Footer ---------------- */

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[color:var(--foreground)] text-[color:var(--background)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--background)]">
          <span className="chip chip-red !px-2 !py-1 !text-[10px]">07</span> Contact
        </div>
        <h2 className="reveal mt-8 font-display text-[clamp(2rem,6.5vw,5.5rem)] leading-[0.85]">
          <span className="gl" data-t="Ready For The">Ready For The</span><br />
          <span className="gl text-[color:var(--accent-red)]" data-t="Next Iteration?">Next Iteration?</span>
        </h2>

        <div className="reveal mt-14 grid grid-cols-12 gap-6 border-t-2 border-[color:var(--background)] pt-10">
          <div className="col-span-12 md:col-span-7 space-y-3">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--background)]/60">Email</div>
            <a data-cta href="mailto:maicolsana12@gmail.com" className="block font-display text-xl md:text-3xl hover:text-[color:var(--accent-red)] transition-colors">
              maicolsana12@gmail.com
            </a>
            <a data-cta href="mailto:maicolsana12@gmail.com" className="btn-fill fill-blue mt-8 inline-flex items-center gap-3 chip chip-red text-base !px-8 !py-4">
              <span className="inline-flex items-center gap-3">Get In Touch <ArrowUpRight className="h-4 w-4" /></span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 justify-end font-mono text-[11px] font-bold uppercase tracking-[0.28em]">
            <a href="https://linkedin.com/in/michael-sanabria/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a href="https://github.com/michaeldevelopment" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors">
              <Github className="h-4 w-4" /> GitHub
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a href="https://behance.net/michaelsanabria2" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors">
              <ExternalLink className="h-4 w-4" /> Behance
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a data-cta href="mailto:maicolsana12@gmail.com" className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors">
              <Mail className="h-4 w-4" /> Send Email
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export function PortfolioPage() {
  useReveal();
  useGlitch();
  return (
    <div className="relative min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Experience />
        <WordPress />
        <Contact />
      </main>
    </div>
  );
}
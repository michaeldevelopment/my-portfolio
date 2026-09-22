import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  Plus,
  Minus,
  MapPin,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  X,
  Languages,
} from "lucide-react";

type BrandIconProps = { className?: string };

const GithubIcon = ({ className }: BrandIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = ({ className }: BrandIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = ({ className }: BrandIconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

import heroImg from "@/assets/hero-centerpiece.jpg";
import projWayki from "@/assets/project-wayki.jpg";
import projMovies from "@/assets/project-movies.jpg";
import wpVida from "@/assets/wp-vida-creede.png";
import wpJlo from "@/assets/wp-jlo.png";
import wpCamiloMaria from "@/assets/wp-camilo-maria.jpg";
import behanceImg from "@/assets/behance-preview.jpg";
import ccpAdminDashboardLight from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-admin-dashboard-light-mode.png";
import ccpAdminDashboard from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-admin-dashboard.png";
import ccpAdminStudents from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-admin-estudiantes.png";
import ccpAdminModules from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-admin-modulos.png";
import ccpAdminPending from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-admin-reasignacion.png";
import ccpClass from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-clase.png";
import ccpLogin from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-login.png";
import ccpModuleTwo from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-modulo-2.png";
import ccpModuleLight from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-modulo-light-mode.png";
import ccpModule from "@/assets/ccp-screenshots/ccp.onlyonecoaching.com-modulo.png";

type Language = "en" | "es";

const ES: Record<string, string> = {
  Work: "Trabajo",
  About: "Sobre mí",
  Projects: "Proyectos",
  Experience: "Experiencia",
  Contact: "Contacto",
  "Toggle theme": "Cambiar tema",
  "Switch to Spanish": "Cambiar a español",
  "Switch to English": "Cambiar a inglés",
  "Full Stack AI JS/TS Developer": "Desarrollador Full Stack con IA · JS/TS",
  "Portfolio 2026": "Portafolio 2026",
  "Full Stack": "Full Stack",
  "AI Developer": "Con IA",
  "Building web apps that ship fast with AI in the loop.":
    "Creo aplicaciones web que llegan a producción rápido, con IA integrada en el flujo.",
  "Explore Projects": "Ver proyectos",
  Location: "Ubicación",
  Status: "Estado",
  "Available Now": "Disponible",
  "System design composition": "Composición de diseño de sistema",
  "Years shipping": "Años en producción",
  Language: "Idioma",
  "Your idea, in production.": "Tu idea, en producción.",
  "No shortcuts. No fluff.": "Sin atajos. Sin relleno.",
  "I care more about": "Me interesa mucho más",
  "what's happening under the hood": "el por qué, más que el qué y el cómo.",
  "than which library gets the credit.": "Raíces sólidas, proyectos sólidos",
  "Quality and commitment": "Calidad y compromiso",
  "Turning sharp, pressing pain points into tech solutions":
    "Conversión de puntos de dolor agudos y punzantes en soluciones tecnológicas",
  "Curiosity and passion": "Curiosidad y pasión",
  "Engineering roots": "Raíces en ingeniería",
  "Full stack shipper": "Entregas full stack",
  "AI-native workflows": "Flujos nativos con IA",
  "Web pages and apps": "Páginas y apps web",
  "Core Stack.": "Stack principal.",
  "Pragmatic, JS/TS-heavy, AI in the loop.": "Pragmático, enfocado en JS/TS y con IA en el flujo.",
  Frontend: "Frontend",
  Backend: "Backend",
  Testing: "Testing",
  "AI workflows": "Flujos con IA",
  Practices: "Prácticas",
  "Custom skills": "Skills a medida",
  "Agent orchestration": "Orquestación de agentes",
  "Timeline.": "Trayectoria.",
  "Enterprise × personal products.": "Producto empresarial × personal.",
  "Software Engineer": "Ingeniero de software",
  "Frontend Mentor (React)": "Mentor de Frontend (React)",
  "Website Designer": "Diseñador web",
  "EPAM · Insurance sector": "EPAM · Sector seguros",
  "EPAM · Healthcare technology sector": "EPAM · Sector salud tecnológica",
  "Globant · Entertainment and media": "Globant · Entretenimiento y medios",
  "Globant · Large-scale retail platform": "Globant · Plataforma retail a gran escala",
  "Globant · Retirement and financial services": "Globant · Servicios financieros y jubilación",
  "Jun 2025 – Present": "Jun 2025 – Presente",
  "Sep – Nov 2025": "Sep – Nov 2025",
  "Feb – May 2025": "Feb – May 2025",
  "May 2024 – Jan 2025": "May 2024 – Ene 2025",
  "Jan 2023 – Apr 2024": "Ene 2023 – Abr 2024",
  "Apr – Dec 2022": "Abr – Dic 2022",
  "Oct 2020 – May 2021": "Oct 2020 – May 2021",
  "Migrating legacy APIs to Node.js with AI-assisted workflows.":
    "Migro APIs legadas a Node.js con flujos asistidos por IA.",
  "I use an existing internal AI migration tool to speed up scaffolding, then refine its output, write custom skills for recurring patterns, and orchestrate multi-step agent runs. Built and tested Node.js APIs on AWS Lambda and API Gateway.":
    "Aprovecho una herramienta interna de migración con IA para acelerar el andamiaje inicial, refino su salida, escribo skills a medida para patrones recurrentes y orquesto ejecuciones de agentes en varios pasos. Construí y probé APIs en Node.js sobre AWS Lambda y API Gateway.",
  "Led a structured React mentorship track for junior developers.":
    "Lideré un programa estructurado de mentoría en React para perfiles junior.",
  "Covered hooks, state management, and clean code through code review and project evaluation. One mentee was hired after completing the program.":
    "Cubrí hooks, manejo de estado y código limpio mediante code reviews y evaluación de proyectos. Un mentee fue contratado al terminar el programa.",
  "Modernized a cloud platform connecting financial and clinical workflows.":
    "Modernicé una plataforma cloud que conecta flujos financieros y clínicos.",
  "Built unit, integration, and BDD tests with Playwright and OJET/Preact across cloud services.":
    "Escribí pruebas unitarias, de integración y BDD con Playwright y OJET/Preact en servicios cloud.",
  "Built new sections of an internal analytics platform.":
    "Desarrollé nuevas secciones de una plataforma interna de analítica.",
  "Used React, TypeScript, and Ant Design with vertical slice and onion architecture. Presented demos and interviewed frontend candidates.":
    "Trabajé con React, TypeScript y Ant Design bajo arquitecturas vertical slice y onion. Lideré demos con el cliente y entrevisté candidatos de frontend.",
  "Built e-commerce features for a platform serving millions.":
    "Desarrollé funcionalidades de e-commerce para una plataforma con millones de usuarios.",
  "React, Next.js, GraphQL Apollo, SSR and prefetching for faster loads. Test coverage above 95% with RTL.":
    "React, Next.js, GraphQL Apollo, SSR y prefetching para cargas más rápidas. Cobertura de tests superior al 95% con RTL.",
  "Built accessible interfaces for a retirement plan platform.":
    "Desarrollé interfaces accesibles para una plataforma de planes de jubilación.",
  "React and TypeScript meeting AA accessibility standards, AWS for delivery, client sprint demos.":
    "React y TypeScript cumpliendo estándares de accesibilidad AA, despliegue en AWS y demos de sprint con el cliente.",
  "Designed client websites with WordPress and Divi.":
    "Diseñé sitios web para clientes con WordPress y Divi.",
  "Balanced fast turnaround with consistent quality across a portfolio of client sites.":
    "Combiné entregas rápidas con calidad consistente en un portafolio de sitios para clientes.",
  "Featured Work": "Trabajo destacado",
  "Selected Projects.": "Proyectos destacados.",
  "Three builds. The work is the argument.": "Tres proyectos. El trabajo habla por sí solo.",
  "Private LMS platform for a sequential coaching program.":
    "Plataforma LMS privada para un programa de coaching por módulos secuenciales.",
  "More Info": "Ver detalles",
  "Close CCP details": "Cerrar detalles de CCP",
  "Previous image": "Imagen anterior",
  "Next image": "Siguiente imagen",
  "CCP Platform": "Plataforma CCP",
  'Plataforma CCP es un LMS privado para "Centro de Crecimiento Personal", un programa de coaching de desarrollo personal estructurado en módulos secuenciales. La plataforma gestiona cohortes de estudiantes con desbloqueo progresivo de contenido, clases en video (Vimeo) y texto, publicación programada de clases, y un sistema de reasignación automática al completar el programa. Incluye tres roles diferenciados (estudiante, profesor, coach) con paneles de administración completos para gestión de grupos, módulos, estudiantes y seguimiento de progreso. Desarrollada con React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui en el frontend, consumiendo una API REST con autenticación JWT y refresco de token automático.':
    'Plataforma CCP es un LMS privado para "Centro de Crecimiento Personal", un programa de coaching de desarrollo personal estructurado en módulos secuenciales. La plataforma gestiona cohortes de estudiantes con desbloqueo progresivo de contenido, clases en video (Vimeo) y texto, publicación programada de clases, y un sistema de reasignación automática al completar el programa. Incluye tres roles diferenciados (estudiante, profesor, coach) con paneles de administración completos para gestión de grupos, módulos, estudiantes y seguimiento de progreso. Desarrollada con React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui en el frontend, consumiendo una API REST con autenticación JWT y refresco de token automático.',
  Wayki: "Wayki",
  "Web app that helps reunite lost pets with their owners.":
    "App web que ayuda a reencontrar mascotas perdidas con sus dueños.",
  "Live Demo": "Ver demo",
  GitHub: "GitHub",
  "Entertainment hub": "Centro de entretenimiento",
  "Browse and filter a movies and shows catalog.":
    "Explora y filtra un catálogo de películas y series.",
  "Shipping Soon": "Próximamente",
  preview: "vista previa",
  "WordPress & Divi": "WordPress y Divi",
  "Client Web Pages.": "Páginas web de clientes.",
  "Live picks + Behance.": "Sitios en vivo + Behance.",
  "Pre-order landing page for a Colorado trail-food café.":
    "Landing de pre-orders para un café de comida de senderismo en Colorado.",
  "Immigration consulting site in Spanish with booking integration.":
    "Sitio de consultoría migratoria en español con sistema de reservas integrado.",
  "Animated wedding invitation with RSVP, gift registry and event details.":
    "Invitación de boda animada con confirmación de asistencia, mesa de regalos y detalles del evento.",
  "site preview": "vista previa del sitio",
  "Michael Sanabria Behance profile preview":
    "Vista previa del perfil de Behance de Michael Sanabria",
  "See my web builder works on my Behance page": "Mira mis trabajos de diseño web en Behance",
  "Ready For The": "¿Listo para la",
  "Next Iteration?": "próxima iteración?",
  Email: "Correo",
  "Get In Touch": "Hablemos",
  "Send Email": "Envíame un correo",
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "es",
  setLanguage: () => undefined,
  t: (text) => text,
});

function useLanguage() {
  return useContext(LanguageContext);
}

/* ---------------- Custom cursor ---------------- */

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    let cx = 0,
      cy = 0,
      tx = 0,
      ty = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.42;
      cy += (ty - cy) * 0.42;
      const el = cursor.current;
      if (el)
        el.style.transform = `translate(${cx - el.offsetWidth / 2}px, ${cy - el.offsetHeight / 2}px)`;
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
  { id: "about", label: "About", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "contact", label: "Contact", num: "05" },
];

function Nav() {
  const { language, setLanguage, t } = useLanguage();
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
              {t(s.label)}
            </a>
          ))}
        </nav>
        <div className="ml-3 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={t(language === "en" ? "Switch to Spanish" : "Switch to English")}
            className="flex h-9 items-center gap-2 border-2 border-[color:var(--foreground)] bg-[color:var(--accent-blue)]/10 px-3 font-mono text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[color:var(--accent-blue)] hover:text-white"
          >
            <Languages className="h-4 w-4" />
            {language === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("Toggle theme")}
            className="grid h-9 w-9 place-items-center border-2 border-[color:var(--foreground)] hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)] transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32 hard-b">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 pr-6 pl-8 md:pr-10 md:pl-20 lg:pl-28 py-16 md:py-24 lg:hard-r">
          <p className="reveal font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--foreground)] mb-8 hidden md:flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[color:var(--foreground)]" />
            {t("Full Stack AI JS/TS Developer")}
            <span>/</span>
            {t("Portfolio 2026")}
          </p>
          <h1 className="reveal font-display text-[clamp(2.6rem,7vw,5.75rem)] leading-[1.05]">
            <span className="gl" data-t={t("Your idea, in production.")}>
              {t("Your idea, in production.")}
            </span>
            <br />
            <span
              className="gl inline-block mt-3 text-[clamp(1.9rem,4.6vw,3.5rem)] text-[color:var(--accent-red)]"
              data-t={t("No shortcuts. No fluff.")}
            >
              {t("No shortcuts. No fluff.")}
            </span>
          </h1>
          <div className="reveal mt-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <p className="max-w-md text-sm md:text-base font-bold uppercase leading-tight">
              {t("Building web apps that ship fast with AI in the loop.")}
            </p>
            <div className="flex flex-col gap-4">
              <a
                data-cta
                href="#projects"
                className="btn-fill fill-red group inline-flex items-center gap-3 chip chip-solid"
              >
                <span className="inline-flex items-center gap-3">
                  {t("Explore Projects")}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 flex flex-col justify-between lg:pl-16">
          <div className="reveal p-6 md:p-8 hard-b flex flex-col gap-6">
            <div>
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--muted-foreground)] mb-2">
                {t("Location")}
              </div>
              <div className="font-display text-2xl leading-none flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Colombia
              </div>
              <div className="font-mono text-[11px] font-bold uppercase mt-1">UTC−5</div>
            </div>
          </div>
          <div className="reveal relative aspect-square lg:aspect-auto lg:flex-1 overflow-hidden bg-[color:var(--surface)]">
            <img
              src={heroImg}
              alt={t("System design composition")}
              className="h-full w-full object-cover editorial-grayscale"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em]">
              <span>MS · System / 003</span>
              <span>'26</span>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal grid grid-cols-2 md:grid-cols-3 hard-t">
        <div className="p-6 md:p-8 hard-r">
          <Stat value={4} suffix="+" label={t("Years shipping")} />
        </div>
        <div className="p-6 md:p-8 md:hard-r">
          <Stat value={15} suffix="+" label={t("Projects")} />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const v = Math.round(value * (1 - Math.pow(1 - p, 3)));
            el.textContent = String(v);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({
  num,
  eyebrow,
  title,
  kicker,
}: {
  num: string;
  eyebrow: string;
  title?: string;
  kicker?: string;
}) {
  const { t } = useLanguage();
  return (
    <div className="mb-12 md:mb-16 grid grid-cols-12 gap-6 md:gap-8 items-end border-t-2 border-[color:var(--foreground)] pt-8">
      <div className="col-span-12 md:col-span-8">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
          <span className="chip chip-red !px-2 !py-1 !text-[10px]">{num}</span>
          {t(eyebrow)}
        </div>
        {title && (
          <h2 className="reveal mt-6 font-display text-[clamp(2.25rem,4.8vw,3.75rem)] leading-[0.88]">
            <span className="gl" data-t={t(title)}>
              {t(title)}
            </span>
          </h2>
        )}
      </div>
      {kicker && (
        <p className="reveal col-span-12 md:col-span-4 max-w-sm text-base md:text-lg font-bold uppercase leading-tight">
          {t(kicker)}
        </p>
      )}
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  const { t } = useLanguage();
  const bullets = [
    "Quality and commitment",
    "Turning sharp, pressing pain points into tech solutions",
    "Curiosity and passion",
    "Engineering roots",
    "Full stack shipper",
    "AI-native workflows",
    "Web pages and apps",
  ];
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader num="02" eyebrow="About" />
        <div className="grid grid-cols-12 gap-6 hard-all">
          <p className="reveal col-span-12 md:col-span-8 p-8 md:p-12 md:hard-r font-display text-2xl md:text-4xl leading-[1.05]">
            {t("I care more about")}{" "}
            <span className="text-[color:var(--accent-red)]">
              {t("what's happening under the hood")}
            </span>{" "}
            {t("than which library gets the credit.")}
          </p>
          <ul className="reveal col-span-12 md:col-span-4">
            {bullets.map((b, i) => (
              <li
                key={b}
                className={`flex items-baseline gap-4 px-6 py-5 ${i < bullets.length - 1 ? "hard-b" : ""}`}
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-red)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-bold uppercase">{t(b)}</span>
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
  const { t: translate } = useLanguage();
  const marquee = Object.values(STACK).flat();
  const track = [...marquee, ...marquee, ...marquee];
  return (
    <section id="stack" className="relative py-20 md:py-28 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          num="03"
          eyebrow="Stack"
          title="Core Stack."
          kicker="Pragmatic, JS/TS-heavy, AI in the loop."
        />

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hard-all">
          {Object.entries(STACK).map(([group, items], gi) => (
            <div
              key={group}
              className={`p-6 md:p-8 ${gi % 3 !== 2 ? "lg:hard-r" : ""} ${gi % 2 !== 1 ? "md:hard-r lg:[&]:hard-r" : ""} hard-b`}
            >
              <div className="flex items-baseline justify-between mb-5">
                <div className="font-display text-xl md:text-2xl">{translate(group)}</div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
                  {String(gi + 1).padStart(2, "0")}/
                  {String(Object.keys(STACK).length).padStart(2, "0")}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((it, ii) => (
                  <span key={it} className={`chip ${ii === 0 ? "chip-solid" : ""}`}>
                    {translate(it)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-16 overflow-hidden border-y-2 border-[color:var(--foreground)] py-4 bg-[color:var(--foreground)] text-[color:var(--background)]">
        <div className="marquee-track flex gap-8 whitespace-nowrap font-display text-xl md:text-2xl tracking-tight">
          {track.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span>{translate(item)}</span>
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
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          num="04"
          eyebrow="Experience"
          title="Timeline."
          kicker="Enterprise × personal products."
        />

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
                    {t(exp.dates)}
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <div className="font-display text-xl md:text-3xl leading-[1.02]">
                      {t(exp.role)}
                      <span className="text-[color:var(--accent-red)] group-hover:text-white">
                        {" "}
                        — {t(exp.company)}
                      </span>
                    </div>
                    <div className="mt-2 text-sm font-bold uppercase opacity-70">
                      {t(exp.short)}
                    </div>
                    <div
                      className="grid transition-all duration-500"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-90">
                          {t(exp.detail)}
                        </p>
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
  details?: string[];
  modal?: boolean;
  links?: { label: string; href: string; icon?: "github" }[];
};

const CCP_DETAILS_ES = [
  'Plataforma CCP es un LMS privado para "Centro de Crecimiento Personal", un programa de coaching de desarrollo personal estructurado en módulos secuenciales.',
  "Gestiona cohortes de estudiantes con desbloqueo progresivo de contenido, clases en video (Vimeo) y texto, publicación programada de clases, y un sistema de reasignación automática al completar el programa.",
  "Incluye tres roles diferenciados —estudiante, profesor y coach— con paneles de administración completos para gestión de grupos, módulos, estudiantes y seguimiento de progreso.",
  "Desarrollada con React 18, TypeScript, Vite, Tailwind CSS y shadcn/ui en el frontend, consumiendo una API REST con autenticación JWT y refresco de token automático.",
];

const CCP_DETAILS_EN = [
  'CCP Platform is a private LMS for "Centro de Crecimiento Personal", a personal-growth coaching program structured around sequential modules.',
  "It manages student cohorts with progressive content unlocking, video (Vimeo) and text-based classes, scheduled publishing, and an automatic reassignment queue when students complete the program.",
  "Three distinct roles —student, teacher, and coach— with full admin dashboards for group management, module progression, student tracking, and progress analytics.",
  "Built with React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui on the frontend, consuming a REST API with JWT authentication and automatic token refresh.",
];

const CCP_SHOTS = [
  { src: ccpLogin, alt: "CCP login screen" },
  { src: ccpAdminDashboard, alt: "CCP admin dashboard" },
  { src: ccpAdminDashboardLight, alt: "CCP admin dashboard light mode" },
  { src: ccpAdminStudents, alt: "CCP student management dashboard" },
  { src: ccpAdminModules, alt: "CCP module administration" },
  { src: ccpAdminPending, alt: "CCP pending reassignment queue" },
  { src: ccpModule, alt: "CCP student module view" },
  { src: ccpModuleTwo, alt: "CCP second student module view" },
  { src: ccpModuleLight, alt: "CCP student module view light mode" },
  { src: ccpClass, alt: "CCP class video screen" },
];

const PROJECTS: Project[] = [
  {
    name: "CCP Platform",
    tag: "Private LMS platform for a sequential coaching program.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "REST API", "JWT"],
    image: ccpAdminDashboard,
    details: CCP_DETAILS_EN,
    modal: true,
  },
  {
    name: "Wayki",
    tag: "Web app that helps reunite lost pets with their owners.",
    tech: [
      "React",
      "React Bootstrap",
      "React Router",
      "Google Maps API",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: projWayki,
    links: [
      { label: "Live Demo", href: "https://festive-turing-3a0437.netlify.app/#publications" },
    ],
  },
  {
    name: "Entertainment hub",
    tag: "Browse and filter a movies and shows catalog.",
    tech: ["React", "TypeScript", "Vite", "Redux Toolkit"],
    image: projMovies,
    links: [
      {
        label: "Live Demo",
        href: "https://michaeldevelopment.github.io/entertainment-movies-web-app-ts/",
      },
    ],
  },
];

function CcpModal({ onClose }: { onClose: () => void }) {
  const { language, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const active = CCP_SHOTS[current];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft")
        setCurrent((value) => (value - 1 + CCP_SHOTS.length) % CCP_SHOTS.length);
      if (event.key === "ArrowRight") setCurrent((value) => (value + 1) % CCP_SHOTS.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const previous = () => setCurrent((value) => (value - 1 + CCP_SHOTS.length) % CCP_SHOTS.length);
  const next = () => setCurrent((value) => (value + 1) % CCP_SHOTS.length);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[90] overflow-y-auto bg-background/95 text-foreground backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={t("CCP Platform")}
    >
      <button
        type="button"
        aria-label={t("Close CCP details")}
        onClick={onClose}
        className="fixed right-4 top-4 z-[100] grid h-11 w-11 place-items-center border-2 border-[color:var(--foreground)] bg-[color:var(--background)] transition-colors hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-12 gap-0 px-4 py-20 md:px-8">
        <div className="col-span-12 lg:col-span-4 lg:hard-r lg:pr-8">
          <div className="sticky top-20">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent-red)]">
              Selected Project
            </div>
            <h3 className="mt-5 font-display text-[clamp(2rem,7vw,4.5rem)] leading-[0.9]">
              <span className="gl" data-t={t("CCP Platform")}>
                {t("CCP Platform")}
              </span>
            </h3>
            <div className="mt-8 max-w-xl space-y-4 text-sm leading-relaxed text-[color:var(--foreground)]/85 md:text-base">
              {(language === "es" ? CCP_DETAILS_ES : CCP_DETAILS_EN).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {PROJECTS[0]?.tech.map((item) => (
                <span key={item} className="chip !px-2 !py-1 !text-[10px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-10 lg:col-span-8 lg:mt-0 lg:pl-8">
          <div className="browser-chrome reveal is-visible">
            <div className="browser-chrome-bar">
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-dot" />
              <span className="browser-chrome-url">ccp.onlyonecoaching.com</span>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[color:var(--surface)] p-4 md:p-6">
              <img src={active.src} alt={active.alt} className="h-full w-full object-contain" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  aria-label={t("Previous image")}
                  onClick={previous}
                  className="grid h-11 w-11 place-items-center border-2 border-[color:var(--foreground)] bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--accent-red)] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="border-2 border-[color:var(--foreground)] bg-[color:var(--background)] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--foreground)]">
                  {String(current + 1).padStart(2, "0")}/{String(CCP_SHOTS.length).padStart(2, "0")}
                </div>
                <button
                  type="button"
                  aria-label={t("Next image")}
                  onClick={next}
                  className="grid h-11 w-11 place-items-center border-2 border-[color:var(--foreground)] bg-[color:var(--background)] text-[color:var(--foreground)] transition-colors hover:bg-[color:var(--accent-red)] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-5 gap-3 md:grid-cols-10">
            {CCP_SHOTS.map((shot, index) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`${t("CCP Platform")} ${index + 1}`}
                className={`aspect-video overflow-hidden border-2 bg-[color:var(--surface)] p-1 transition-colors ${index === current ? "border-[color:var(--accent-red)]" : "border-[color:var(--foreground)] opacity-60 hover:opacity-100"}`}
              >
                <img src={shot.src} alt="" className="h-full w-full object-contain" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  const { t } = useLanguage();
  const content = (
    <div className="relative grid grid-cols-12 items-stretch transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
      <div className="col-span-12 md:col-span-1 md:hard-r flex md:flex-col items-center md:items-start justify-between md:justify-start p-4 md:p-6 gap-2">
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em]">
          N° {String(i + 1).padStart(2, "0")}
        </div>
        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">
          2024
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 md:hard-r p-6 md:p-10 flex flex-col justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl md:text-5xl leading-[0.9]">
            <span className="gl" data-t={t(p.name)}>
              {t(p.name)}
            </span>
          </h3>
          {p.soon && (
            <span className="mt-4 inline-flex items-center gap-2 chip chip-red !py-1">
              <span className="h-1.5 w-1.5 bg-white" /> {t("Shipping Soon")}
            </span>
          )}
          {p.modal && (
            <button
              type="button"
              onClick={onOpen}
              data-cta
              className="btn-fill fill-blue mt-5 inline-flex items-center gap-3 chip chip-solid"
            >
              <span className="inline-flex items-center gap-3">
                {t("More Info")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </button>
          )}
          {p.links && (
            <div className="mt-5 flex flex-wrap gap-3">
              {p.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cta
                  className="btn-fill fill-blue inline-flex items-center gap-3 chip chip-solid"
                >
                  <span className="inline-flex items-center gap-3">
                    {link.icon === "github" && <GithubIcon className="h-3.5 w-3.5" />}
                    {t(link.label)}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
        <p className="text-base font-bold uppercase leading-tight opacity-80 max-w-md">
          {t(p.tag)}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((tech) => (
            <span
              key={tech}
              className="chip !py-1 !px-2 !text-[10px] group-hover:bg-transparent group-hover:text-white group-hover:border-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-5 relative overflow-hidden aspect-[4/3] md:aspect-auto bg-[color:var(--surface)]">
        <img
          src={p.image}
          alt={`${t(p.name)} ${t("preview")}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top editorial-grayscale group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 right-4 grid h-12 w-12 place-items-center bg-white text-black group-hover:bg-[color:var(--accent-red)] group-hover:text-white transition-colors">
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </span>
      </div>
    </div>
  );

  const wrapper = (children: ReactNode) =>
    p.modal ? (
      <button
        type="button"
        onClick={onOpen}
        className="block w-full group cursor-pointer text-left"
      >
        {children}
      </button>
    ) : p.href ? (
      <a href={p.href} target="_blank" rel="noreferrer" className="block group cursor-pointer">
        {children}
      </a>
    ) : (
      <div className="group">{children}</div>
    );

  return <li className="reveal hard-b">{wrapper(content)}</li>;
}

function Projects() {
  const [ccpOpen, setCcpOpen] = useState(false);
  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          num="02"
          eyebrow="Featured Work"
          title="Selected Projects."
          kicker="Three builds. The work is the argument."
        />

        <ul className="border-t-2 border-[color:var(--foreground)] border-x-2">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.name} p={p} i={i} onOpen={() => setCcpOpen(true)} />
          ))}
        </ul>
      </div>
      {ccpOpen && <CcpModal onClose={() => setCcpOpen(false)} />}
    </section>
  );
}

/* ---------------- WordPress ---------------- */

function WordPress() {
  const { t } = useLanguage();
  const live = [
    {
      name: "Vida Creede",
      url: "vidaeattolive.com",
      href: "https://vidaeattolive.com",
      note: "Pre-order landing page for a Colorado trail-food café.",
      img: wpVida,
    },
    {
      name: "JLO Consulting Group",
      url: "jloconsultinggroup.com",
      href: "https://jloconsultinggroup.com",
      note: "Immigration consulting site in Spanish with booking integration.",
      img: wpJlo,
    },
    {
      name: "Cami y Majo",
      url: "camiloymaria.com",
      href: "https://camiloymaria.com",
      note: "Animated wedding invitation with RSVP, gift registry and event details.",
      img: wpCamiloMaria,
    },
  ];
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-[color:var(--surface)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeader
          num="01"
          eyebrow="Projects"
          title="Client Web Pages."
          kicker="Live picks + Behance."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
                  <img
                    src={l.img}
                    alt={`${l.name} ${t("site preview")}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top editorial-grayscale"
                  />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl italic">{l.name}</h3>
                  <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{t(l.note)}</p>
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
              <img
                src={behanceImg}
                alt={t("Michael Sanabria Behance profile preview")}
                loading="lazy"
                width={1920}
                height={1000}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-5 md:p-6">
              <h3 className="font-display text-base md:text-lg">
                {t("See my web builder works on my Behance page")}
              </h3>
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
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[color:var(--foreground)] text-[color:var(--background)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="reveal flex items-center gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--background)]">
          <span className="chip chip-red !px-2 !py-1 !text-[10px]">06</span> {t("Contact")}
        </div>
        <h2 className="reveal mt-8 font-display text-[clamp(2rem,6.5vw,5.5rem)] leading-[0.85]">
          <span className="gl" data-t={t("Ready For The")}>
            {t("Ready For The")}
          </span>
          <br />
          <span className="gl text-[color:var(--accent-red)]" data-t={t("Next Iteration?")}>
            {t("Next Iteration?")}
          </span>
        </h2>

        <div className="reveal mt-14 grid grid-cols-12 gap-6 border-t-2 border-[color:var(--background)] pt-10">
          <div className="col-span-12 md:col-span-7 space-y-3">
            <a
              data-cta
              href="https://wa.link/wtr9sh"
              target="_blank"
              rel="noreferrer"
              className="btn-fill fill-blue inline-flex items-center gap-3 chip chip-red text-base !px-8 !py-4"
            >
              <span className="inline-flex items-center gap-3">
                <WhatsappIcon className="h-4 w-4" /> {t("Get In Touch")}{" "}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3 justify-end font-mono text-[11px] font-bold uppercase tracking-[0.28em]">
            <a
              href="https://linkedin.com/in/michael-sanabria/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://github.com/michaeldevelopment"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="https://behance.net/michaelsanabria2"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors"
            >
              <ExternalLink className="h-4 w-4" /> Behance
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              data-cta
              href="mailto:maicolsana12@gmail.com"
              className="group inline-flex items-center gap-3 border-2 border-[color:var(--background)]/30 hover:border-[color:var(--accent-red)] hover:bg-[color:var(--accent-red)] px-5 py-4 transition-colors"
            >
              <Mail className="h-4 w-4" /> {t("Send Email")}
              <ArrowUpRight className="ml-auto h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

function PortfolioContent() {
  useReveal();
  useGlitch();
  return (
    <div className="relative min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <WordPress />
        <Projects />
        <About />
        <Stack />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export function PortfolioPage() {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("language", language);
    document.title =
      language === "es"
        ? "Michael Sanabria — Desarrollador Full Stack IA JS/TS"
        : "Michael Sanabria — Full Stack AI JS/TS Developer";
  }, [language]);

  const t = (text: string) => (language === "es" ? (ES[text] ?? text) : text);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <PortfolioContent />
    </LanguageContext.Provider>
  );
}

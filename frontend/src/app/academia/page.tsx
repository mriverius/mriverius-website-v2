import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import AcademiaPopup from "./AcademiaPopup";
import CourseBanner from "./CourseBanner";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Reveal from "./Reveal";
import Testimonios from "./Testimonios";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academia — Cursos de IA y automatización",
  description:
    "Convertite en el profesional que sí le saca provecho a la IA. Cursos de automatización con Make.com y n8n: lo que te toma horas, en minutos. +50 alumnos formados.",
  alternates: { canonical: "/academia" },
  openGraph: {
    title: "Academia Riverius — Cursos de IA y automatización",
    description:
      "Cursos en vivo de automatización con IA (Make.com, n8n y Copilot Studio). +50 alumnos formados. Lo que te toma horas, en minutos.",
    url: "/academia",
    images: [{ url: "/mariano.png", width: 1086, height: 1448, alt: "Mariano Riverius — Academia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia Riverius — Cursos de IA y automatización",
    description:
      "Cursos en vivo de automatización con IA (Make.com, n8n y Copilot Studio). +50 alumnos formados.",
    images: ["/mariano.png"],
  },
};

/* ──────────────────────────────────────────────────────────────
   Videos de Wistia (IDs reales)
   ────────────────────────────────────────────────────────────── */
const VIDEOS = {
  primeraClase: { id: "oihg5jf7pc", aspect: 1.6 },
  proyectoFinal: { id: "s87z54sae8", aspect: 1.7777777777777777 },
  testimonio1: { id: "u8rfe4702b", aspect: 0.558, nombre: "Andrey Espinoza", rol: "IT Recruiting Manager" },
  testimonio2: { id: "4dtjtsoyfe", aspect: 0.555, nombre: "Bernal Barrantes", rol: "Contador" },
  testimonio3: { id: "6w058l392j", aspect: 0.5625, nombre: "Alonso Hidalgo", rol: "Microbiólogo" },
  testimonio4: { id: "sthpxqj6jk", aspect: 0.5625, nombre: "Esteban Hidalgo", rol: "Comunicador y Periodista" },
};

const WHATSAPP_NUMBER = "50685973818";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const WHATSAPP_LINK = waLink(
  "¡Hola Riverius! Vi la página de la Academia y quiero más información sobre los cursos de IA."
);

/* Próximo curso (Agentes con IA · n8n) */
const BANNER_LINK = waLink(
  "¡Hola Riverius! Me interesa el curso de Agentes con IA (n8n). Quiero apartar mi cupo para la próxima cohorte."
);

/* ──────────────────────────────────────────────────────────────
   Íconos SVG propios (sin emojis)
   ────────────────────────────────────────────────────────────── */
type IconProps = { className?: string };
const base = (className = "w-6 h-6") =>
  `${className}`;

function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />
    </svg>
  );
}
function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TrendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 4h6v6" />
    </svg>
  );
}
function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </svg>
  );
}
function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </svg>
  );
}
function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}
function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M21 20a6 6 0 0 0-4-5.6" />
    </svg>
  );
}
function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}
function HelpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.9-2.8 2.5-2.8 2.5" />
      <path d="M12 17h.01" />
    </svg>
  );
}
function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}
function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────
   Datos
   ────────────────────────────────────────────────────────────── */
/* Datos reales para la barra de la sección de testimonios. */
const testimonioStats = [
  { value: "+50", label: "Estudiantes formados", Icon: UsersIcon },
  { value: "100%", label: "Acompañamiento 1:1", Icon: PlayIcon },
  { value: "6 semanas", label: "Por curso", Icon: ClockIcon },
  { value: "Para siempre", label: "Acceso a grabaciones", Icon: SparkIcon },
];

const razones = [
  {
    Icon: BoltIcon,
    title: "Automatizás lo repetitivo",
    desc: "Reportes, respuestas, organización de datos: lo que hacías una por una pasa a correr solo. Lo que te tomaba horas, en minutos.",
  },
  {
    Icon: TrendIcon,
    title: "Te volvés más valioso",
    desc: "El que sabe usar IA entrega más, más rápido y mejor. No competís con la herramienta: la usás para entregar lo que otros todavía hacen a pulso.",
  },
  {
    Icon: ClockIcon,
    title: "Recuperás tu tiempo",
    desc: "Cada proceso que automatizás son horas que no volvés a gastar. Ese tiempo vuelve a tu semana, para el trabajo que de verdad importa (o para vos).",
  },
  {
    Icon: BriefcaseIcon,
    title: "Abrís nuevas oportunidades",
    desc: "Dominar esta habilidad te abre puertas: proyectos, roles y clientes que antes ni veías. Es la consecuencia de saber hacer lo que pocos saben hacer.",
  },
];

const cursos = [
  {
    badge: "Curso 1 · Empezá acá",
    tool: "Make.com",
    title: "Automatizaciones con Make.com",
    desc: "Para vos, que nunca automatizaste nada y querés tu primera victoria sin pelearte con código. Salís sabiendo armar flujos que conectan tus apps y hacen el trabajo repetitivo por vos, de principio a fin.",
    points: [
      "Para principiantes totales",
      "Automatizaciones sin escribir código",
      "Tu primer flujo funcionando en el negocio",
    ],
    soon: false,
    precio: "₡21.000",
    cta: "Quiero el Curso 1 (Make.com)",
    waMsg:
      "¡Hola Riverius! Me interesa el Curso 1 de Automatizaciones con Make.com. ¿Me contás cuándo abre y cómo inscribirme?",
  },
  {
    badge: "Curso 2 · Cohorte activa",
    tool: "n8n",
    title: "Agentes con IA (n8n)",
    desc: "Para quien ya entiende lo básico y quiere construir agentes de IA y automatizaciones serias, con más control y potencia. Vas a diseñar agentes que toman decisiones y sistemas que resuelven procesos completos, no tareas sueltas.",
    points: [
      "Para quienes ya dominan lo básico",
      "Agentes que toman decisiones",
      "Sistemas que resuelven procesos completos",
    ],
    soon: false,
    precio: "₡21.000",
    cta: "Apartar mi cupo (n8n)",
    waMsg:
      "¡Hola Riverius! Me interesa el Curso 2, Agentes con IA (n8n). Quiero apartar mi cupo para la próxima cohorte.",
  },
  {
    badge: "Curso 3 · Próximamente",
    tool: "Copilot Studio",
    title: "Agentes con Copilot Studio",
    desc: "Para quien quiere llevar la IA adentro de su empresa y sus herramientas del día a día. Vas a construir copilots y asistentes a la medida de tu negocio. Detalles y fecha pronto.",
    points: [
      "Ecosistema Microsoft / Copilot",
      "Copilots a la medida de tu negocio",
      "Lista de espera disponible ya",
    ],
    soon: true,
    precio: null,
    cta: "Avísame cuando abra",
    waMsg:
      "¡Hola Riverius! Quiero entrar a la lista de espera del Curso 3 de Agentes con Copilot Studio. Avísame cuando abra.",
  },
];

/* Hechos comunes a todos los cursos (formato, duración, etc.) */
const cursoFacts = [
  { Icon: ClockIcon, label: "6 semanas" },
  { Icon: UsersIcon, label: "Acompañamiento 1:1" },
  { Icon: PlayIcon, label: "Queda grabado para siempre" },
  { Icon: SparkIcon, label: "Recursos y ejercicios para siempre" },
];

/* Preguntas frecuentes (manejo de objeciones) */
const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "No. Empezamos desde cero con herramientas visuales (Make.com, n8n). Si sabés usar tu computadora, podés con esto.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "₡21.000 por quincena durante el curso. Sin sorpresas: lo que ves es lo que pagás.",
  },
  {
    q: "¿Hay descuento si pago todo de una vez?",
    a: "Sí. Si pagás el curso completo por adelantado, obtenés un descuento. Escribime por WhatsApp y te paso el precio con el descuento aplicado.",
  },
  {
    q: "¿Para quién es esto?",
    a: "Para profesionales y dueños de negocio que quieren ahorrar tiempo y trabajar mejor con IA. No es un curso para 'conseguir empleo': es para que dejes de hacer a mano lo que la IA puede hacer por vos.",
  },
  {
    q: "¿Cómo me inscribo?",
    a: "Por WhatsApp. Te respondo yo, en persona, resolvemos tus dudas y te paso el paso a paso para apartar tu cupo.",
  },
];

/* Clips de apoyo 1:1. Cuando tengas el ID de Wistia de un nuevo clip,
   reemplaza wistiaId: null por el ID y se incrustará el video automáticamente. */
const clips1a1: { titulo: string; wistiaId: string | null; aspect: number }[] = [
  { titulo: "Ayudando a René a conectar ChatGPT", wistiaId: "qlrnlgt3dg", aspect: 1.6 },
  { titulo: "Ayudando a Andrey con módulo de Airtable", wistiaId: "2hbkwhomzg", aspect: 16 / 9 },
  { titulo: "Explicándole a Gino la IA agéntica", wistiaId: "4qiefwts69", aspect: 1.6 },
  { titulo: "Ayudando a Beto a entender Jotform", wistiaId: "8ohicduqtk", aspect: 16 / 9 },
  { titulo: "Ayudando a René a corregir un error en Gmail", wistiaId: "6v7qxzyhub", aspect: 1.6 },
  { titulo: "Ayudando a Melvin a corregir Google Forms", wistiaId: "xnwhlf8yys", aspect: 16 / 9 },
];

const credenciales = [
  {
    Icon: GlobeIcon,
    title: "+40 Clientes internacionales",
    sub: "He trabajado con personas y empresas de EE.UU., Canadá, España, Arabia Saudita, Alemania y más.",
  },
  {
    Icon: SparkIcon,
    title: "Enseño desde la experiencia",
    sub: "Lo que enseño es lo mismo que uso para ganarme la vida en mi agencia de IA.",
  },
  {
    Icon: CodeIcon,
    title: "Ingeniero de software y Licenciado en Informática",
    sub: "+5 años construyendo productos y sistemas reales.",
  },
];

const redes = [
  { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/mriverius" },
  { Icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@mriverius" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/in/mriverius" },
];

function StarSolid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z" />
    </svg>
  );
}

function PlayTriangle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function WhatsAppButton({
  label,
  href = WHATSAPP_LINK,
  full = false,
  variant = "solid",
}: {
  label: string;
  href?: string;
  full?: boolean;
  variant?: "solid" | "ghost";
}) {
  const styles =
    variant === "ghost"
      ? "border-cyan/40 text-cyan hover:bg-cyan/10 hover:border-cyan/60"
      : "border-cyan bg-cyan text-background hover:bg-cyan-dim hover:border-cyan-dim shadow-[0_0_28px_-8px_var(--color-cyan)] hover:shadow-[0_0_40px_-6px_var(--color-cyan)]";
  const isInternal = href.startsWith("#");
  return (
    <a
      href={href}
      {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={`group ${full ? "w-full" : ""} inline-flex items-center justify-center gap-2.5 py-3.5 px-7 rounded-lg border text-base sm:text-lg font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${styles}`}
    >
      <ChatIcon className="w-5 h-5 shrink-0" />
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}

/* Encabezado de sección: eyebrow con líneas + título sharp + bajada. */
function SectionHeader({
  Icon,
  eyebrow,
  title,
  desc,
}: {
  Icon: ComponentType<IconProps>;
  eyebrow: string;
  title: ReactNode;
  desc: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <span className="inline-flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" aria-hidden="true" />
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan/85">
          <Icon className="w-4 h-4" />
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" aria-hidden="true" />
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-foreground max-w-4xl text-balance">
        {title}
      </h2>
      <p className="text-foreground/55 max-w-2xl leading-relaxed">{desc}</p>
    </div>
  );
}

function WistiaEmbed({ id, aspect, title }: { id: string; aspect: number; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-background" style={{ aspectRatio: aspect }}>
      <iframe
        src={`https://fast.wistia.net/embed/iframe/${id}?videoFoam=true`}
        title={title}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default function AcademiaPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-grid min-h-screen relative overflow-hidden">
      <CourseBanner ctaLink={BANNER_LINK} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <main className="flex flex-col items-center gap-28 pt-6 pb-16 px-6 sm:px-8 w-full max-w-[88rem] z-10">
        <div className="w-full max-w-lg -mb-16">
          <Breadcrumb items={[{ label: "Academia" }]} />
        </div>

        {/* ───────────── HERO (sin Reveal: visible al instante para un LCP rápido) ───────────── */}
        <div className="w-full">
        <section
          id="inicio"
          className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-12 items-center scroll-mt-28"
        >
          {/* ── Columna izquierda: texto + CTAs + prueba social ── */}
          <div className="flex flex-col items-start gap-6 text-left">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-cyan/85 border border-cyan/25 rounded-md px-3.5 py-2">
              <SparkIcon className="w-4 h-4" />
              IA aplicada · acompañamiento 1:1
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] leading-[1.0] text-balance">
              Convertite en el pro que{" "}
              <span className="text-cyan glow-text">le saca provecho a la IA.</span>
            </h1>

            <p className="text-foreground/60 text-base sm:text-lg leading-relaxed max-w-xl">
              Te enseño a automatizar tu trabajo con IA, paso a paso, en vivo y en
              grupo. Es lo mismo que uso como ingeniero Top Rated en Upwork. Lo que
              te toma horas, con IA lo resolvés en minutos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
              <WhatsAppButton href="#cursos" label="Quiero recuperar mis horas" />
              <a
                href="#recorrido"
                className="group inline-flex items-center gap-3 font-semibold text-foreground/90 transition-colors hover:text-cyan"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-cyan/40 text-cyan transition-all duration-300 group-hover:bg-cyan/10 group-hover:border-cyan/70">
                  <PlayTriangle className="w-4 h-4 ml-0.5" />
                </span>
                Ver una clase
              </a>
            </div>

            {/* Prueba social */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                {["A", "A", "F", "B"].map((ini, i) => (
                  <span
                    key={i}
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-cyan/30 to-cyan/5 text-cyan text-sm font-bold"
                  >
                    {ini}
                  </span>
                ))}
                <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-cyan text-background text-xs font-bold">
                  +50
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="flex items-center gap-0.5 text-cyan">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarSolid key={i} className="w-4 h-4" />
                  ))}
                </span>
                <span className="text-foreground/60 text-sm">
                  +50 profesionales ya formados
                </span>
              </div>
            </div>
          </div>

          {/* ── Columna derecha: imagen + tarjetas flotantes ── */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-[420px]">
            {/* Resplandor detrás */}
            <div className="absolute -inset-6 bg-cyan/10 rounded-[2rem] blur-3xl pointer-events-none" />

            {/* Imagen */}
            <div className="relative overflow-hidden rounded-2xl border border-cyan/25 bg-card-bg/60 glow-cyan" style={{ aspectRatio: 4 / 5 }}>
              <Image
                src="/mariano.png"
                alt="Mariano Riverius, tu profesor en la Academia"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute left-5 bottom-5">
                <span className="block text-foreground font-bold text-lg leading-tight">Mariano Riverius</span>
                <span className="block text-cyan/80 text-xs font-semibold tracking-[0.18em] uppercase">
                  Ingeniero · Top Rated en Upwork
                </span>
              </div>
            </div>

            {/* Tarjeta: cohorte en vivo (arriba-izquierda) */}
            <div className="hidden md:flex absolute -left-20 lg:-left-24 top-8 z-10 flex-col gap-2 w-52 rounded-xl border border-cyan/25 bg-card-bg/90 backdrop-blur-md p-4 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]">
              <span className="inline-flex items-center gap-1.5 self-start rounded-md bg-cyan/15 border border-cyan/30 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase text-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-glow" />
                En vivo
              </span>
              <span className="text-foreground font-semibold leading-snug">Agentes con IA · n8n</span>
              <span className="text-foreground/55 text-xs">Clases en vivo, grupales y grabadas</span>
            </div>

            {/* Tarjeta: nivel Upwork (derecha) */}
            <div className="hidden md:flex absolute -right-20 lg:-right-24 top-1/3 z-10 flex-col gap-2 w-52 rounded-xl border border-card-border bg-card-bg/90 backdrop-blur-md p-4 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between">
                <span className="text-foreground/60 text-xs">Nivel en Upwork</span>
                <span className="text-cyan text-sm font-bold tabular-nums">9.99%</span>
              </div>
              <div className="h-1.5 w-full rounded-sm bg-background overflow-hidden">
                <span className="block h-full w-[92%] bg-cyan rounded-sm" />
              </div>
              <span className="text-foreground/80 text-xs font-semibold">Top Rated · top 9.99% mundial</span>
            </div>

            {/* Tarjeta: recorrido (abajo-derecha) */}
            <div className="hidden md:flex absolute -right-10 bottom-20 z-10 items-center gap-3 rounded-xl border border-card-border bg-card-bg/90 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.6)]">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/25 text-cyan">
                <TrendIcon className="w-5 h-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-foreground text-sm font-semibold">De cero → automatización</span>
                <span className="text-foreground/55 text-xs">Tu recorrido, paso a paso</span>
              </span>
            </div>
          </div>
        </section>

        {/* Tira de herramientas */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/40">
            Las herramientas que vas a dominar
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 text-foreground/45">
            {["Make.com", "n8n", "OpenAI", "Claude", "Google Sheets", "Airtable", "Gmail", "Telegram", "y muchas más"].map((tool) => (
              <span key={tool} className="text-lg font-semibold tracking-tight transition-colors hover:text-foreground/70">
                {tool}
              </span>
            ))}
          </div>
        </div>

        </div>

        {/* ───────────── TESTIMONIOS ───────────── */}
        <Reveal className="w-full flex flex-col items-center gap-10">
          <Testimonios />

          {/* Barra de datos reales */}
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-5xl rounded-xl border border-card-border bg-card-bg/50 backdrop-blur-sm divide-y divide-card-border sm:divide-y-0 sm:divide-x">
            {testimonioStats.map(({ value, label, Icon }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-6">
                <Icon className="w-6 h-6 text-cyan shrink-0" />
                <span className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">{value}</span>
                  <span className="text-foreground/55 text-xs sm:text-sm">{label}</span>
                </span>
              </div>
            ))}
          </div>

          <WhatsAppButton href={WHATSAPP_LINK} label="Ver todos los cursos" />
        </Reveal>

        {/* ───────────── POR QUÉ APRENDER IA ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="por-que" className="flex flex-col items-center gap-10 w-full scroll-mt-28">
          <SectionHeader
            Icon={TrendIcon}
            eyebrow="Por qué la IA"
            title={
              <>
                Cuatro cosas cambian cuando ponés la IA{" "}
                <span className="text-cyan glow-text">a trabajar por vos</span>
              </>
            }
            desc="Casi todo el mundo oyó hablar de la IA. Muy pocos la convierten en horas ahorradas y trabajo más valioso. Esa es la diferencia."
          />
          <div className="grid sm:grid-cols-2 gap-5 w-full">
            {razones.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border border-card-border bg-card-bg/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan/40"
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/20 text-cyan">
                  <Icon className="w-6 h-6" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        </Reveal>

        {/* ───────────── PRIMERA CLASE ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="recorrido" className="flex flex-col items-center gap-6 w-full scroll-mt-28">
          <SectionHeader
            Icon={PlayIcon}
            eyebrow="El recorrido"
            title={
              <>
                De tu primera clase a tu primera{" "}
                <span className="text-cyan glow-text">automatización funcionando</span>
              </>
            }
            desc="No te vas con apuntes: te vas con cosas que ya corren solas. Mirá el recorrido real de un alumno, desde que abre la herramienta por primera vez hasta que su proyecto final le ahorra trabajo cada semana."
          />
          <div className="grid lg:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-3 h-full rounded-xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-2 sm:p-3 transition-all duration-300 hover:border-cyan/40">
              <WistiaEmbed
                id={VIDEOS.primeraClase.id}
                aspect={VIDEOS.primeraClase.aspect}
                title="Primera clase — Academia Riverius"
              />
              <div className="flex items-center gap-2 px-2 pb-1 mt-auto min-h-[2.25rem]">
                <PlayIcon className="w-4 h-4 text-cyan shrink-0" />
                <span className="flex items-baseline gap-1.5">
                  <span className="text-foreground/80 text-sm font-medium">
                    Primera clase · Curso de Make.com
                  </span>
                  <span className="text-foreground/65 text-xs">
                    · Tu primera automatización
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 h-full rounded-xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-2 sm:p-3 transition-all duration-300 hover:border-cyan/40">
              <WistiaEmbed
                id={VIDEOS.proyectoFinal.id}
                aspect={VIDEOS.proyectoFinal.aspect}
                title="Proyecto final de Alonso — Academia Riverius"
              />
              <div className="flex items-center gap-2 px-2 pb-1 mt-auto min-h-[2.25rem]">
                <PlayIcon className="w-4 h-4 text-cyan shrink-0" />
                <span className="flex items-baseline gap-1.5">
                  <span className="text-foreground/80 text-sm font-medium">
                    Proyecto final · Curso de Make.com
                  </span>
                  <span className="text-foreground/65 text-xs">
                    · Presentación de Alonso
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>

        </Reveal>

        {/* ───────────── CURSOS ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="cursos" className="flex flex-col items-center gap-8 w-full scroll-mt-28">
          <SectionHeader
            Icon={BoltIcon}
            eyebrow="Los cursos"
            title={
              <>
                Tres cursos, un solo <span className="text-cyan glow-text">camino claro</span>
              </>
            }
            desc="De cero a automatizar como un pro. No tenés que tomarlos todos de una: empezás donde estás y avanzás a tu ritmo."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {cursos.map((c) => (
              <div
                key={c.title}
                className={`flex flex-col gap-4 rounded-xl border bg-card-bg/80 backdrop-blur-sm p-8 transition-all duration-300 ${
                  c.soon
                    ? "border-card-border opacity-90"
                    : "border-card-border hover:border-cyan/50 glow-cyan-hover"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs tracking-widest uppercase text-cyan/70">
                    {c.badge}
                  </span>
                  {c.soon && (
                    <span className="text-[10px] tracking-widest uppercase text-foreground/65 border border-card-border rounded-full px-2.5 py-0.5">
                      Próximamente
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1.5 self-start rounded-md bg-cyan/10 border border-cyan/20 px-2.5 py-1 text-xs font-semibold text-cyan">
                    <BoltIcon className="w-3.5 h-3.5" />
                    {c.tool}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{c.title}</h3>
                </div>
                <p className="text-foreground/60 leading-relaxed text-sm">{c.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-foreground/70 text-sm">
                      <CheckIcon className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                {/* Hechos del curso */}
                <ul className="flex flex-col gap-2 mt-2 pt-4 border-t border-card-border">
                  {cursoFacts.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5 text-foreground/60 text-xs">
                      <Icon className="w-4 h-4 text-cyan/70 shrink-0" />
                      <span>{label}</span>
                    </li>
                  ))}
                </ul>

                {/* Precio */}
                <div className="mt-auto pt-4">
                  {c.precio ? (
                    <p className="mb-3 text-sm text-foreground/60">
                      <span className="text-2xl font-bold text-foreground">{c.precio}</span>{" "}
                      <span className="text-foreground/60">/ quincena</span>
                    </p>
                  ) : (
                    <p className="mb-3 text-sm text-foreground/60">
                      Únete a la <span className="text-cyan">lista de espera</span>
                    </p>
                  )}
                  <a
                    href={waLink(c.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/cta w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg border text-sm font-semibold text-center leading-snug tracking-tight transition-all duration-300 hover:-translate-y-0.5 ${
                      c.soon
                        ? "bg-transparent border-cyan/30 text-cyan/85 hover:bg-cyan/10 hover:text-cyan hover:border-cyan/50"
                        : "bg-cyan border-cyan text-background hover:bg-cyan-dim hover:border-cyan-dim shadow-[0_0_22px_-8px_var(--color-cyan)] hover:shadow-[0_0_34px_-6px_var(--color-cyan)]"
                    }`}
                  >
                    <ChatIcon className="w-4 h-4 shrink-0" />
                    {c.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        </Reveal>

        {/* ───────────── SOBRE MÍ ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="profesor" className="flex flex-col items-center gap-10 w-full scroll-mt-28">
          <SectionHeader
            Icon={BriefcaseIcon}
            eyebrow="Tu profesor"
            title={
              <>
                Quién te va a <span className="text-cyan glow-text">enseñar</span>
              </>
            }
            desc="Soy Mariano Riverius, ingeniero de software con +5 años construyendo sistemas reales. Un día yo tampoco sabía de IA: la aprendí en la trinchera, resolviendo problemas por los que me pagan. Eso es exactamente lo que te enseño."
          />

          <div className="flex flex-col lg:flex-row items-stretch gap-8 w-full">
            {/* Foto + redes */}
            <div className="shrink-0 w-full max-w-xs mx-auto lg:mx-0 flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl border border-cyan/25 bg-card-bg/60 glow-cyan-hover" style={{ aspectRatio: 3 / 4 }}>
                <Image
                  src="/mariano.png"
                  alt="Mariano Riverius, tu profesor en la Academia"
                  fill
                  sizes="(max-width: 640px) 90vw, 320px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-4 pt-10">
                  <span className="text-foreground font-semibold">Mariano · Riverius</span>
                  <span className="block text-cyan/80 text-xs tracking-widest uppercase">
                    Tu profesor
                  </span>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="flex items-center justify-center gap-3">
                {redes.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de Mariano (@mriverius)`}
                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-card-border bg-card-bg/70 text-foreground/70 transition-all duration-300 hover:border-cyan/50 hover:text-cyan glow-cyan-hover"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-center text-foreground/65 text-xs">
                Sígueme en todas como <span className="text-cyan/70">@mriverius</span>
              </p>
            </div>

            {/* Credenciales */}
            <div className="flex flex-col gap-4 flex-1 w-full">
              {/* Destacado Top Rated */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-cyan/30 bg-cyan/10 p-6 glow-cyan">
                <div className="flex items-baseline gap-2 shrink-0">
                  <span className="text-4xl font-bold text-cyan glow-text">9.99%</span>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Soy <span className="font-semibold text-foreground">Top Rated en Upwork</span>,
                  un nivel que solo alcanza el <span className="font-semibold text-cyan">9.99%</span>{" "}
                  de los millones de freelancers de la plataforma. Si yo pude pasar
                  de cero a vivir de esto, vos podés aprender a que la IA trabaje por vos.
                </p>
              </div>

              {credenciales.map(({ Icon, title, sub }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-xl border border-card-border bg-card-bg/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan/40"
                >
                  <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/25 text-cyan">
                    <Icon className="w-6 h-6" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        </Reveal>

        {/* ───────────── CLIPS 1:1 ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="acompanamiento" className="flex flex-col items-center gap-8 w-full scroll-mt-28">
          <SectionHeader
            Icon={UsersIcon}
            eyebrow="Acompañamiento 1:1"
            title={
              <>
                No te dejo solo: te acompaño <span className="text-cyan glow-text">1:1</span> en cada clase
              </>
            }
            desc="Si te trabás, lo resolvemos en el momento. Compartís pantalla, lo vemos juntos y seguís. Así nadie se queda atrás. Estos son clips reales del soporte en vivo."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-stretch">
            {clips1a1.map((clip, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 h-full rounded-xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-2 sm:p-3 transition-all duration-300 hover:border-cyan/40"
              >
                {clip.wistiaId ? (
                  <WistiaEmbed id={clip.wistiaId} aspect={clip.aspect} title={clip.titulo} />
                ) : (
                  <div className="relative w-full overflow-hidden rounded-xl border border-dashed border-cyan/20 bg-background/60" style={{ aspectRatio: 16 / 9 }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan/10 border border-cyan/25 text-cyan">
                        <PlayIcon className="w-5 h-5" />
                      </span>
                      <span className="text-xs uppercase tracking-widest text-cyan/70">
                        Próximamente
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2 px-2 pb-1 mt-auto">
                  <ChatIcon className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm leading-snug">{clip.titulo}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        </Reveal>

        {/* ───────────── FAQ ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="faq" className="flex flex-col items-center gap-8 w-full scroll-mt-28">
          <SectionHeader
            Icon={HelpIcon}
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Preguntas <span className="text-cyan glow-text">frecuentes</span>
              </>
            }
            desc="Lo que casi todo el mundo me pregunta antes de empezar."
          />
          <div className="grid sm:grid-cols-2 gap-4 w-full items-start">
            {faqs.map(({ q, a }, i) => (
              <details
                key={q}
                className="group relative overflow-hidden rounded-xl border border-card-border bg-card-bg/70 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 open:border-cyan/45 open:bg-cyan/[0.04] open:shadow-[0_0_30px_-12px_var(--color-cyan)]"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-cyan transition-transform duration-300 group-open:scale-y-100"
                  aria-hidden="true"
                />
                <summary className="flex items-center gap-4 cursor-pointer list-none p-5 sm:p-6 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-cyan/10 border border-cyan/20 text-cyan text-sm font-bold tabular-nums transition-colors duration-300 group-open:bg-cyan group-open:text-background">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-foreground font-semibold leading-snug">{q}</span>
                  <span className="shrink-0 text-cyan transition-transform duration-300 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="pr-5 sm:pr-6 pb-5 sm:pb-6 pl-[3.5rem] sm:pl-[3.75rem]">
                  <p className="text-foreground/60 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Pregunta abierta → WhatsApp */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-sm text-foreground/60">
            <span>¿No ves tu pregunta acá?</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cyan hover:underline underline-offset-4"
            >
              <ChatIcon className="w-4 h-4 shrink-0" />
              Escribime y te respondo personalmente
            </a>
          </div>
        </section>

        </Reveal>

        {/* ───────────── CTA FINAL ───────────── */}
        <Reveal className="w-full flex flex-col items-center">
        <section id="reservar" className="flex flex-col items-center gap-6 text-center w-full rounded-xl border border-cyan/20 bg-cyan/5 backdrop-blur-sm p-10 sm:p-14 scroll-mt-28">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/25 text-cyan">
            <BoltIcon className="w-6 h-6" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            La IA ya llegó. ¿La vas a poner{" "}
            <span className="text-cyan glow-text">a trabajar por vos</span>?
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl leading-relaxed">
            Escribime por WhatsApp: te paso la fecha de la próxima cohorte de{" "}
            <span className="text-foreground font-semibold">Agentes con IA (n8n)</span>, el
            precio y el paso a paso para apartar tu cupo. Te respondo yo.
          </p>
          <WhatsAppButton href={BANNER_LINK} label="Apartar mi cupo por WhatsApp" />
          <p className="text-foreground/60 text-sm">
            Sin compromiso. Resuelvo tus dudas antes de que decidas.
          </p>
        </section>

        </Reveal>

        <p className="text-foreground/60 text-xs">
          © {new Date().getFullYear()} Riverius. Todos los derechos reservados.
        </p>
      </main>

      {/* Botón flotante de WhatsApp (aparece al hacer scroll) */}
      <FloatingWhatsApp href={BANNER_LINK} />

      {/* Popup temporizado (aparece tras 1 min en la página) */}
      <AcademiaPopup whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

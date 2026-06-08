import Breadcrumb from "../components/Breadcrumb";
import AcademiaPopup from "./AcademiaPopup";

export const metadata = {
  title: "Academia — Riverius",
  description:
    "Antes yo tampoco entendía IA. Ahora lo enseño. Cursos de Inteligencia Artificial en 2 niveles: Workflows y Agentes de IA. +40 estudiantes formados.",
};

/* ──────────────────────────────────────────────────────────────
   Videos de Wistia (IDs reales)
   ────────────────────────────────────────────────────────────── */
const VIDEOS = {
  primeraClase: { id: "oihg5jf7pc", aspect: 1.6 },
  testimonio1: { id: "u8rfe4702b", aspect: 0.558, nombre: "Andrei Espinoza" },
  testimonio2: { id: "4dtjtsoyfe", aspect: 0.555, nombre: "Bernal Barrantes" },
};

const WHATSAPP_NUMBER = "50685973818";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola Riverius! Vi la página de la Academia y quiero más información sobre los cursos de IA."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

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
function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={base(className)} aria-hidden="true">
      <path d="M12 3.5 14.6 9l6 .8-4.4 4.2 1.1 6L12 17.8 6.7 20l1.1-6L3.4 9.8l6-.8L12 3.5Z" />
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

/* ──────────────────────────────────────────────────────────────
   Datos
   ────────────────────────────────────────────────────────────── */
const stats = [
  { value: "+40", label: "Estudiantes formados", Icon: UsersIcon },
  { value: "2+", label: "Años enseñando IA", Icon: SparkIcon },
  { value: "5+", label: "Años como ingeniero", Icon: CodeIcon },
];

const razones = [
  {
    Icon: BoltIcon,
    title: "Multiplicas tu productividad",
    desc: "Lo que antes te tomaba horas, lo resuelves en minutos. La IA hace el trabajo repetitivo por ti.",
  },
  {
    Icon: TrendIcon,
    title: "Te vuelves más valioso",
    desc: "Quien domina la IA destaca en cualquier industria. Es la habilidad más demandada del mercado hoy.",
  },
  {
    Icon: ClockIcon,
    title: "Recuperas tu tiempo",
    desc: "Automatizas tareas tediosas y te enfocas en lo que de verdad importa para ti y tu negocio.",
  },
  {
    Icon: BriefcaseIcon,
    title: "Abres nuevas oportunidades",
    desc: "Nuevos servicios, nuevos clientes, nuevos ingresos. La IA es una puerta que apenas se está abriendo.",
  },
];

const niveles = [
  {
    badge: "Nivel 1 · Principiantes",
    title: "Workflows",
    desc: "Empezamos desde cero, sin tecnicismos. Aprendes a usar la IA para automatizar tareas del día a día y crear flujos de trabajo que te ahorran horas. Ideal si nunca has tocado estas herramientas.",
    points: [
      "Pensado para principiantes principiantes",
      "Fundamentos de IA sin escribir código",
      "Automatizaciones listas para usar",
    ],
  },
  {
    badge: "Nivel 2 · Avanzado",
    title: "Agentes de IA",
    desc: "El siguiente paso. Construyes agentes de IA que toman decisiones y ejecutan tareas por ti. Conectas herramientas, datos y modelos para resolver problemas reales de forma autónoma.",
    points: [
      "Para quienes ya dominan lo básico",
      "Agentes que trabajan por ti",
      "Casos de uso reales y avanzados",
    ],
  },
];

const credenciales = [
  { Icon: SparkIcon, title: "Experto en IA", sub: "+2 años enseñando y aplicando inteligencia artificial" },
  { Icon: StarIcon, title: "Top Rated en Upwork", sub: "Reconocido entre los mejores freelancers de la plataforma" },
  { Icon: CodeIcon, title: "Ingeniero de software", sub: "+5 años construyendo productos y sistemas reales" },
];

function WhatsAppButton({ label, full = false }: { label: string; full?: boolean }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${full ? "w-full" : ""} inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-cyan/15 border border-cyan/30 text-cyan text-lg font-semibold transition-all duration-300 hover:bg-cyan/25 glow-cyan-hover hover:scale-[1.02]`}
    >
      <ChatIcon className="w-5 h-5" />
      {label}
    </a>
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
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default function AcademiaPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-grid min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <main className="flex flex-col items-center gap-24 py-16 px-6 w-full max-w-4xl z-10">
        <div className="w-full max-w-lg">
          <Breadcrumb items={[{ label: "Academia" }]} />
        </div>

        {/* ───────────── HERO ───────────── */}
        <section className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-cyan/80 border border-cyan/20 rounded-full px-4 py-1.5">
            <SparkIcon className="w-4 h-4" />
            Academia Riverius
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1]">
            Antes yo tampoco entendía IA.{" "}
            <span className="text-cyan glow-text">Ahora lo enseño.</span>
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
            Te llevo de la mano desde cero hasta crear tus propios agentes de
            inteligencia artificial. Sin tecnicismos, con ejemplos reales y a tu
            ritmo.
          </p>
          <div className="mt-2">
            <WhatsAppButton label="Quiero más información" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-2xl mt-8 pt-8 border-t border-card-border">
            {stats.map(({ value, label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <Icon className="w-5 h-5 text-cyan/70" />
                <span className="text-2xl sm:text-3xl font-bold text-foreground">{value}</span>
                <span className="text-foreground/50 text-xs sm:text-sm leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── PRIMERA CLASE ───────────── */}
        <section className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan/10 border border-cyan/25 text-cyan">
              <PlayIcon className="w-6 h-6" />
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              Dale un vistazo a la primera clase
            </h2>
            <p className="text-foreground/60 max-w-2xl leading-relaxed">
              Mira un fragmento real de la primera clase y descubre cómo enseño.
              Si te gusta cómo explico, esto es para ti.
            </p>
          </div>
          <div className="w-full rounded-2xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-2 sm:p-3 transition-all duration-300 hover:border-cyan/40">
            <WistiaEmbed
              id={VIDEOS.primeraClase.id}
              aspect={VIDEOS.primeraClase.aspect}
              title="Primera clase — Academia Riverius"
            />
          </div>
        </section>

        {/* ───────────── POR QUÉ APRENDER IA ───────────── */}
        <section className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              ¿Por qué aprender IA <span className="text-cyan glow-text">ahora</span>?
            </h2>
            <p className="text-foreground/60 max-w-2xl leading-relaxed">
              No se trata de moda. Se trata de no quedarte atrás mientras el
              mundo cambia de velocidad.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 w-full">
            {razones.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-card-border bg-card-bg/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan/40"
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

        {/* ───────────── NIVELES ───────────── */}
        <section className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Dos niveles, un camino claro
            </h2>
            <p className="text-foreground/60 max-w-2xl leading-relaxed">
              Empieza donde estés. Avanza al ritmo que te haga sentido.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 w-full">
            {niveles.map((n) => (
              <div
                key={n.title}
                className="flex flex-col gap-4 rounded-2xl border border-card-border bg-card-bg/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-cyan/50 glow-cyan-hover"
              >
                <span className="text-xs tracking-widest uppercase text-cyan/70">
                  {n.badge}
                </span>
                <h3 className="text-2xl font-bold text-foreground">{n.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{n.desc}</p>
                <ul className="flex flex-col gap-2.5 mt-2">
                  {n.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-foreground/70 text-sm">
                      <CheckIcon className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── SOBRE MÍ ───────────── */}
        <section className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Quién te va a enseñar
            </h2>
            <p className="text-foreground/60 max-w-2xl leading-relaxed">
              No soy un teórico. Soy ingeniero de software que vive de construir
              y aplicar IA todos los días — y que disfruta enseñarla.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 w-full">
            {credenciales.map(({ Icon, title, sub }) => (
              <div
                key={title}
                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-card-border bg-card-bg/70 backdrop-blur-sm p-7 transition-all duration-300 hover:border-cyan/40"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/25 text-cyan">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── TESTIMONIOS ───────────── */}
        <section className="flex flex-col items-center gap-8 w-full">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Lo que dicen mis estudiantes
            </h2>
            <p className="text-foreground/60 max-w-2xl leading-relaxed">
              Historias reales de personas que empezaron justo donde tú estás
              ahora.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
            {[VIDEOS.testimonio1, VIDEOS.testimonio2].map((t, i) => (
              <div
                key={t.id}
                className="flex flex-col gap-3 rounded-2xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-2 sm:p-3 transition-all duration-300 hover:border-cyan/40"
              >
                <WistiaEmbed id={t.id} aspect={t.aspect} title={`Testimonio de ${t.nombre}`} />
                <div className="flex items-center gap-2 px-2 pb-1">
                  <StarIcon className="w-4 h-4 text-cyan" />
                  <span className="text-foreground/80 text-sm font-medium">{t.nombre}</span>
                  <span className="text-foreground/40 text-xs">· Estudiante {i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────────── CTA FINAL ───────────── */}
        <section className="flex flex-col items-center gap-6 text-center w-full rounded-2xl border border-cyan/20 bg-cyan/5 backdrop-blur-sm p-10 sm:p-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl leading-relaxed">
            Escríbeme por WhatsApp y te cuento todo: niveles, fechas y cómo
            inscribirte. Respondo personalmente.
          </p>
          <WhatsAppButton label={`Escríbeme · +${WHATSAPP_NUMBER}`} />
          <p className="text-foreground/30 text-sm">
            Sin compromiso. Resuelvo tus dudas antes de que decidas.
          </p>
        </section>

        <p className="text-foreground/30 text-xs">
          © {new Date().getFullYear()} Riverius. Todos los derechos reservados.
        </p>
      </main>

      {/* Popup temporizado (aparece tras 1 min en la página) */}
      <AcademiaPopup whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

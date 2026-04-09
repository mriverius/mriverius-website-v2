import Link from "next/link";

const links = [
  {
    label: "📞 Reservar Llamada",
    href: "/reservar",
    external: false,
  },
  {
    label: "🤝 Colab",
    href: "/colab",
    external: false,
  },
  {
    label: "📸 Instagram",
    href: "https://www.instagram.com/mriverius/",
    external: true,
  },
  {
    label: "🌐 Comunidad",
    href: "/comunidad",
    external: false,
  },
  {
    label: "💜 Donar",
    href: "/donar",
    external: false,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-grid min-h-screen relative">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <main className="flex flex-col items-center gap-10 py-20 px-6 w-full max-w-md z-10">
        {/* Brand */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-5xl font-bold tracking-tight text-cyan glow-text animate-pulse-glow">
            RIVERIUS
          </h1>
          <p className="text-foreground/60 text-sm tracking-widest uppercase">
            Aprende Inteligencia Artificial
          </p>
        </div>

        {/* Link buttons */}
        <div className="flex flex-col gap-4 w-full">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 px-6 rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm text-foreground font-medium text-lg transition-all duration-300 hover:border-cyan/50 hover:bg-card-bg glow-cyan-hover hover:scale-[1.02]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block w-full text-center py-4 px-6 rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm text-foreground font-medium text-lg transition-all duration-300 hover:border-cyan/50 hover:bg-card-bg glow-cyan-hover hover:scale-[1.02]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Footer */}
        <p className="text-foreground/30 text-xs mt-6">
          © {new Date().getFullYear()} Riverius. Todos los derechos reservados.
        </p>
      </main>
    </div>
  );
}

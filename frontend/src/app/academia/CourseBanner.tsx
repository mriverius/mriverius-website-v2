"use client";

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

export default function CourseBanner({ ctaLink }: { ctaLink: string }) {
  return (
    <a
      href={ctaLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden border-b border-cyan/25 bg-gradient-to-r from-cyan/10 via-cyan/5 to-cyan/10"
    >
      {/* Brillo animado */}
      <span className="pointer-events-none absolute inset-0 animate-pulse-glow bg-cyan/5" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-4 py-3 text-center sm:flex-row sm:gap-6 sm:py-2.5">
        <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm sm:text-base text-foreground">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan">
            <BoltIcon />
            4 espacios disponibles
          </span>
          <span className="font-semibold">
            Tengo <span className="text-cyan glow-text">4 espacios más disponibles</span>{" "}
            en Julio
          </span>
        </p>

        <span className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/15 px-3.5 py-1.5 text-sm font-semibold text-cyan transition-all duration-300 group-hover:bg-cyan/25 sm:inline-flex">
          Reservar mi cupo →
        </span>
      </div>
    </a>
  );
}

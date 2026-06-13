"use client";

import { useEffect, useState } from "react";

/* Fecha de apertura del próximo curso: 16 de junio 2026, 7:00 pm (hora Costa Rica, UTC-6) */
const LAUNCH_DATE = new Date("2026-06-16T19:00:00-06:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

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

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-lg sm:text-xl font-bold text-cyan tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-foreground/65 mt-1">
        {label}
      </span>
    </div>
  );
}

export default function CourseBanner({ ctaLink }: { ctaLink: string }) {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

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
            Quedan 4 cupos
          </span>
          <span className="font-semibold">
            <span className="text-cyan glow-text">Agentes con IA (n8n)</span>{" "}
            abre el 16 de junio · 7–9 pm
          </span>
        </p>

        {/* Countdown */}
        {mounted && time ? (
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Unit value={time.days} label="días" />
            <span className="text-cyan/40 font-bold -mt-2">:</span>
            <Unit value={time.hours} label="hrs" />
            <span className="text-cyan/40 font-bold -mt-2">:</span>
            <Unit value={time.minutes} label="min" />
            <span className="text-cyan/40 font-bold -mt-2">:</span>
            <Unit value={time.seconds} label="seg" />
          </div>
        ) : mounted && !time ? (
          <span className="text-sm font-semibold text-cyan">¡Inscripciones abiertas!</span>
        ) : (
          /* placeholder estable para evitar salto de layout antes de montar */
          <div className="h-9 w-[180px]" aria-hidden="true" />
        )}

        <span className="hidden shrink-0 items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/15 px-3.5 py-1.5 text-sm font-semibold text-cyan transition-all duration-300 group-hover:bg-cyan/25 sm:inline-flex">
          Reservar mi cupo →
        </span>
      </div>
    </a>
  );
}

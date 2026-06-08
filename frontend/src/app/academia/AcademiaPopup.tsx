"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_MS = 60_000; // 1 minuto en la página

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />
    </svg>
  );
}

export default function AcademiaPopup({ whatsappLink }: { whatsappLink: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("academia_popup_seen") === "1") return;
    const t = setTimeout(() => setOpen(true), SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("academia_popup_seen", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-6 sm:pb-0">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      <div className="relative w-full max-w-md rounded-2xl border border-cyan/25 bg-dark-blue p-8 sm:p-10 shadow-2xl shadow-black/50 glow-cyan animate-[fadeUp_0.4s_ease-out]">
        <button
          onClick={close}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/25 text-cyan">
            <ChatIcon />
          </div>
          <h3 className="text-2xl font-bold text-foreground leading-tight">
            Da el primer paso hoy
          </h3>
          <p className="text-foreground/60 leading-relaxed">
            Veo que te interesa aprender IA. No lo dejes para después: escríbeme
            y te ayudo a definir por dónde empezar. Respondo personalmente.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-cyan/15 border border-cyan/30 text-cyan text-lg font-semibold transition-all duration-300 hover:bg-cyan/25 glow-cyan-hover cursor-pointer"
          >
            <ChatIcon />
            Contactar por WhatsApp
          </a>
          <button
            onClick={close}
            className="text-foreground/30 text-sm hover:text-foreground/50 transition-colors cursor-pointer"
          >
            Ahora no
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

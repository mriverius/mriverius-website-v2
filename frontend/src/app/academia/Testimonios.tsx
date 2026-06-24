"use client";

import {
  createElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

/* ──────────────────────────────────────────────────────────────
   Testimonios en carrusel (tarjeta central destacada + flechas + dots)
   - Lazy: el <wistia-player> muestra el póster real y solo descarga
     el video al darle play, así la sección carga rápido.
   - Solo la tarjeta activa reproduce; las laterales seleccionan al tocar.
   - Responsive, con swipe táctil y soporte de teclado.
   ────────────────────────────────────────────────────────────── */

type Testimonio = {
  id: string;
  aspect: number;
  nombre: string;
  rol: string;
};

const TESTIMONIOS: Testimonio[] = [
  { id: "u8rfe4702b", aspect: 0.558, nombre: "Andrey Espinoza", rol: "IT Recruiting Manager" },
  { id: "6w058l392j", aspect: 0.5625, nombre: "Alonso Hidalgo", rol: "Microbiólogo" },
  { id: "co5vl5xkc9", aspect: 0.5625, nombre: "Fabián Morales", rol: "Ingeniero en Telecomunicaciones" },
  { id: "4dtjtsoyfe", aspect: 0.555, nombre: "Bernal Barrantes", rol: "Contador" },
  { id: "sthpxqj6jk", aspect: 0.5625, nombre: "Esteban Hidalgo", rol: "Comunicador y Periodista" },
];

/* Carga el script del reproductor de Wistia una sola vez. */
function useWistiaPlayer() {
  useEffect(() => {
    if (document.querySelector('script[data-wistia-player]')) return;
    const s = document.createElement("script");
    s.src = "https://fast.wistia.com/player.js";
    s.async = true;
    s.setAttribute("data-wistia-player", "true");
    document.head.appendChild(s);
  }, []);
}

/* useLayoutEffect en cliente, useEffect en SSR (evita warning de Next). */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* Detecta prefers-reduced-motion sin desajustes de hidratación. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2 2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2Z" />
    </svg>
  );
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export default function Testimonios() {
  useWistiaPlayer();

  const [active, setActive] = useState(2); // Fabián al centro por defecto
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [offset, setOffset] = useState(0);
  const reduce = usePrefersReducedMotion();

  const count = TESTIMONIOS.length;
  const go = useCallback(
    (next: number) => setActive((prev) => Math.min(count - 1, Math.max(0, next ?? prev))),
    [count]
  );

  // Centra la tarjeta activa midiendo el DOM (robusto y responsive).
  const recenter = useCallback(() => {
    const vp = viewportRef.current;
    const card = cardRefs.current[active];
    if (!vp || !card) return;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    setOffset(vp.clientWidth / 2 - cardCenter);
  }, [active]);

  useIsomorphicLayoutEffect(() => {
    recenter();
  }, [recenter]);

  useEffect(() => {
    const onResize = () => recenter();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recenter]);

  // Swipe táctil / con mouse.
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });
  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, active: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
  };

  // Teclado (flechas) cuando la sección tiene foco.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(active + 1);
    else if (e.key === "ArrowLeft") go(active - 1);
  };

  return (
    <section
      id="testimonios"
      className="flex flex-col items-center gap-10 w-full scroll-mt-28"
      aria-roledescription="carrusel"
      aria-label="Testimonios de estudiantes"
    >
      {/* Encabezado */}
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" aria-hidden="true" />
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan/85">
            <StarIcon className="w-4 h-4" />
            Testimonios
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" aria-hidden="true" />
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-foreground max-w-4xl text-balance">
          No lo digo yo. Lo dicen los{" "}
          <span className="text-cyan glow-text">+40 que ya pasaron por acá</span>
        </h2>
        <p className="text-foreground/55 max-w-2xl leading-relaxed">
          Alumnos reales contando qué construyeron y cuánto tiempo se ahorran hoy.
          Esa es la diferencia entre oír hablar de IA y ponerla a trabajar.
        </p>
      </div>

      {/* Carrusel */}
      <div
        className="relative w-full select-none"
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="group"
      >
        {/* Degradados en los bordes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent" />

        {/* Flechas */}
        <button
          type="button"
          onClick={() => go(active - 1)}
          disabled={active === 0}
          aria-label="Testimonio anterior"
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-card-bg/80 border border-card-border text-foreground backdrop-blur-sm transition-all duration-200 hover:border-cyan/60 hover:text-cyan hover:bg-cyan/10 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowIcon dir="left" />
        </button>
        <button
          type="button"
          onClick={() => go(active + 1)}
          disabled={active === count - 1}
          aria-label="Siguiente testimonio"
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-card-bg/80 border border-card-border text-foreground backdrop-blur-sm transition-all duration-200 hover:border-cyan/60 hover:text-cyan hover:bg-cyan/10 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowIcon dir="right" />
        </button>

        {/* Viewport + track */}
        <div ref={viewportRef} className="overflow-hidden py-6">
          <div
            ref={trackRef}
            className="flex items-center gap-4 sm:gap-6 will-change-transform"
            style={{
              transform: `translate3d(${offset}px,0,0)`,
              transition: reduce ? "none" : "transform 550ms cubic-bezier(0.22,1,0.36,1)",
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {TESTIMONIOS.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  className="shrink-0 transition-all duration-500 ease-out"
                  style={{
                    width: "min(74vw, 290px)",
                    transform: isActive ? "scale(1)" : "scale(0.85)",
                    opacity: isActive ? 1 : 0.45,
                  }}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl border bg-card-bg/60 backdrop-blur-sm transition-all duration-500 ${
                      isActive ? "border-cyan/60 glow-cyan" : "border-card-border"
                    }`}
                  >
                    <div className="relative w-full" style={{ aspectRatio: t.aspect }}>
                      {createElement("wistia-player", {
                        "media-id": t.id,
                        aspect: String(t.aspect),
                        style: {
                          display: "block",
                          width: "100%",
                          height: "100%",
                        },
                      })}
                      {/* Las tarjetas laterales seleccionan al tocar (no reproducen). */}
                      {!isActive && (
                        <button
                          type="button"
                          onClick={() => go(i)}
                          aria-label={`Ver testimonio de ${t.nombre}`}
                          className="absolute inset-0 z-10 cursor-pointer"
                        />
                      )}
                    </div>

                    {/* Pie con nombre y rol */}
                    <div className="flex items-center gap-2 px-3 py-3">
                      <StarIcon className="w-4 h-4 text-cyan shrink-0" />
                      <span className="flex flex-col leading-tight min-w-0">
                        <span className="text-foreground/90 text-sm font-medium truncate">{t.nombre}</span>
                        <span className="text-foreground/55 text-xs truncate">{t.rol}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {TESTIMONIOS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-current={i === active}
              className={`h-1.5 rounded-sm transition-all duration-300 ${
                i === active ? "w-8 bg-cyan" : "w-3 bg-foreground/25 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

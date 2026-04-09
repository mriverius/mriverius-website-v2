"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import WhatsAppModal from "../../components/WhatsAppModal";

const recursos = [
  {
    title: "Recurso #1",
    description:
      "Tu primera guía para entender cómo funciona la IA generativa y cómo aplicarla en tu día a día.",
    href: "https://docs.google.com/document/d/1Ejfaz1TruL1fp84MsjvKr3B0g3g3Pn8-YTKfiNUxJU4/edit?usp=sharing",
    gradient: "from-cyan/20 via-blue-500/10 to-transparent",
    icon: "🤖",
  },
  {
    title: "Recurso #2",
    description:
      "Colección de prompts profesionales listos para usar en ChatGPT, Claude y más herramientas de IA.",
    href: "https://docs.google.com/document/d/1ucrobvmLD3KynEDB9W2LzW9vVOsj46Nsabkoe0ysZZI/edit?usp=sharing",
    gradient: "from-purple-500/20 via-cyan/10 to-transparent",
    icon: "💬",
  },
  {
    title: "Recurso #3",
    description:
      "Plantilla paso a paso para automatizar tareas repetitivas usando inteligencia artificial.",
    href: "https://docs.google.com/document/d/1jBQ0gKej1rJXHLOMlrNuK8rt47XuSNt9fkZeu_rmutI/edit?usp=sharing",
    gradient: "from-emerald-500/20 via-cyan/10 to-transparent",
    icon: "⚡",
  },
  {
    title: "Recurso #4",
    description:
      "Guía avanzada de estrategias de IA para creadores de contenido y emprendedores digitales.",
    href: "https://docs.google.com/document/d/1KB_t4qoiwF4LlApe21-bND1BiEsr8-V4kpXebVCq-VI/edit?usp=sharing",
    gradient: "from-amber-500/20 via-cyan/10 to-transparent",
    icon: "🚀",
  },
];

export default function RecursosPage() {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<
    (typeof recursos)[0] | null
  >(null);

  const filtered = recursos.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleClaim = (recurso: (typeof recursos)[0]) => {
    setSelectedResource(recurso);
    setModalOpen(true);
  };

  const handleSubmitPhone = (phone: string) => {
    console.log("WhatsApp enviado:", phone, "para:", selectedResource?.title);
    setModalOpen(false);
    if (selectedResource) {
      window.open(selectedResource.href, "_blank");
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-grid min-h-screen relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating bubble header — not sticky, with margin-top, left-aligned */}
      <div className="z-20 px-8 pt-16 w-full max-w-5xl mx-auto">
        <nav className="flex items-center gap-3 w-full px-5 py-2 rounded-2xl border border-card-border bg-card-bg/70 backdrop-blur-xl shadow-lg shadow-black/20">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-base text-foreground/50 hover:text-cyan hover:bg-cyan/5 transition-all"
            title="Inicio"
          >
            🏠
          </Link>
          <Link
            href="/comunidad"
            className="px-4 py-2 rounded-full text-base text-foreground/50 hover:text-cyan hover:bg-cyan/5 transition-all"
            title="Comunidad"
          >
            🌐
          </Link>
          <span className="px-5 py-2 rounded-full text-base font-medium bg-cyan/10 text-cyan border border-cyan/20 glow-cyan">
            📚 Recursos
          </span>
          <Link
            href="/donar"
            className="px-4 py-2 rounded-full text-base text-foreground/50 hover:text-cyan hover:bg-cyan/5 transition-all"
            title="Donar"
          >
            🤍
          </Link>
        </nav>
      </div>

      <main className="flex flex-col gap-8 py-10 px-8 w-full max-w-5xl mx-auto z-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Comunidad", href: "/comunidad" },
            { label: "Recursos" },
          ]}
        />

        {/* Title & description */}
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold text-foreground">
            Recursos Gratis
          </h1>
          <p className="text-foreground/60 text-lg leading-relaxed max-w-2xl">
            Aquí tienes todos los recursos gratuitos de la comunidad. Usa el
            buscador para encontrar uno por nombre o palabra clave.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="w-full rounded-lg border border-cyan/20 bg-cyan/5 px-5 py-3">
          <p className="text-cyan-dim text-base leading-relaxed">
            Este contenido es para la comunidad de Riverius y no está autorizada
            su reventa, redistribución ni comercialización.
          </p>
        </div>

        {/* Search section */}
        <div className="w-full rounded-xl border border-card-border bg-card-bg/60 backdrop-blur-sm p-6 flex flex-col gap-4">
          <p className="text-sm font-semibold tracking-widest uppercase text-foreground/40">
            Buscar Recurso
          </p>
          <input
            type="text"
            placeholder="Ej: prompts, plantilla, guía..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3.5 px-5 rounded-lg border border-card-border bg-background/60 text-foreground text-base placeholder:text-foreground/30 outline-none focus:border-cyan/50 transition-colors"
          />
          <p className="text-foreground/40 text-base">
            {filtered.length} recurso{filtered.length !== 1 ? "s" : ""}{" "}
            disponible{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Two-column ebook grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {filtered.map((recurso, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-card-border bg-card-bg/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan/40 hover:bg-card-bg glow-cyan-hover"
            >
              {/* Visual cover */}
              <div
                className={`relative h-40 bg-gradient-to-br ${recurso.gradient} flex items-center justify-center`}
              >
                <span className="text-6xl">{recurso.icon}</span>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9zdmc+')] opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card-bg/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 pt-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-cyan/60 mb-2">
                  eBook Gratuito
                </span>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {recurso.title}
                </h2>
                <p className="text-foreground/50 text-base leading-relaxed mb-6 flex-1">
                  {recurso.description}
                </p>
                <button
                  onClick={() => handleClaim(recurso)}
                  className="inline-flex items-center gap-2 self-start py-3 px-6 rounded-xl bg-cyan/15 border border-cyan/30 text-cyan text-base font-semibold transition-all duration-300 hover:bg-cyan/25 glow-cyan-hover cursor-pointer"
                >
                  Reclamar recurso →
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-foreground/40 text-base col-span-2 text-center py-8">
              No se encontraron recursos.
            </p>
          )}
        </div>
      </main>

      {/* WhatsApp Modal — rendered via portal to avoid z-index issues */}
      {typeof document !== "undefined" &&
        createPortal(
          <WhatsAppModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleSubmitPhone}
            resourceTitle={selectedResource?.title ?? ""}
          />,
          document.body
        )}
    </div>
  );
}

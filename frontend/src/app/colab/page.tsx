import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
  title: "Colab — Riverius",
};

export default function ColabPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-grid min-h-screen relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <main className="flex flex-col items-center gap-8 py-20 px-6 w-full max-w-lg z-10">
        <Breadcrumb items={[{ label: "Colab" }]} />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold text-cyan glow-text">
            🤝 Colaboraciones
          </h1>
          <p className="text-foreground/60 leading-relaxed">
            ¿Te interesa colaborar con Riverius? Ya sea para crear contenido
            juntos, alianzas estratégicas o proyectos de IA, estoy abierto a
            nuevas oportunidades.
          </p>
        </div>

        <div className="w-full rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm p-8 text-center">
          <p className="text-foreground/50 text-lg mb-6">
            Escríbeme para explorar cómo podemos trabajar juntos.
          </p>
          <a
            href="https://www.instagram.com/mriverius/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-3 px-8 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan font-semibold glow-cyan transition-all duration-300 hover:bg-cyan/20 glow-cyan-hover"
          >
            Contáctame por Instagram
          </a>
        </div>

      </main>
    </div>
  );
}

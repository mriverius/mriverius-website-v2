import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
  title: "Comunidad — Riverius",
};

export default function ComunidadPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-grid min-h-screen relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <main className="flex flex-col items-center gap-8 py-20 px-6 w-full max-w-lg z-10">
        <Breadcrumb items={[{ label: "Comunidad" }]} />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold text-cyan glow-text">
            🌐 Comunidad
          </h1>
          <p className="text-foreground/60 leading-relaxed max-w-md">
            Bienvenido a la comunidad de Riverius. Aquí encontrarás recursos
            gratuitos, prompts profesionales y herramientas para dominar la
            Inteligencia Artificial. Todo creado para ayudarte a aprender más
            rápido y mejor.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <Link
            href="/comunidad/recursos"
            className="block w-full text-center py-5 px-6 rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm text-foreground font-medium text-lg transition-all duration-300 hover:border-cyan/50 hover:bg-card-bg glow-cyan-hover hover:scale-[1.02]"
          >
            📚 Biblioteca de Prompts / Recursos Gratis
          </Link>
        </div>

      </main>
    </div>
  );
}

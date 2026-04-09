import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
  title: "Donar — Riverius",
};

export default function DonarPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-grid min-h-screen relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <main className="flex flex-col items-center gap-8 py-20 px-6 w-full max-w-lg z-10">
        <Breadcrumb items={[{ label: "Donar" }]} />

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold text-cyan glow-text">
            💜 Donar
          </h1>
          <p className="text-foreground/60 leading-relaxed">
            Tu apoyo me permite seguir creando contenido gratuito sobre
            Inteligencia Artificial para toda la comunidad hispanohablante.
            ¡Cada contribución cuenta!
          </p>
        </div>

        <div className="w-full rounded-xl border border-card-border bg-card-bg/80 backdrop-blur-sm p-8 text-center">
          <p className="text-foreground/50 text-lg mb-6">
            Próximamente podrás apoyar directamente aquí.
          </p>
          <div className="inline-block py-3 px-8 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan font-semibold glow-cyan">
            🚀 Muy pronto disponible
          </div>
        </div>

      </main>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-navy mb-4">
          Página no encontrada
        </h2>
        <p className="text-slate-500 mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-brand text-white font-medium hover:shadow-lg transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

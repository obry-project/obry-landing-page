export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-16 px-6 bg-white text-center">
      <div className="flex justify-center mb-8">
        <img src="/logo.svg" alt="Obry Logo" className="h-8 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
      </div>
      <p className="text-[var(--muted)] text-sm mb-2">© 2026 Obry Tech · El sistema operativo de la construcción moderna.</p>
      <p className="text-slate-400 text-xs">Transformando la industria con tecnología y precisión.</p>
    </footer>
  )
}

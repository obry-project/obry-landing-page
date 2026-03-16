import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="demo" className="max-w-[1200px] mx-auto px-6 py-24 text-center bg-gradient-to-br from-[var(--gold)]/5 to-white border border-[var(--gold)]/20 rounded-3xl my-24 reveal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/10 blur-[100px] -z-10"></div>
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[var(--text)] tracking-tight">
        Control Total, Datos Seguros, <br className="hidden md:block" /> Obras Mejor Gestionadas
      </h2>
      <p className="text-[var(--muted)] text-lg mb-12 max-w-2xl mx-auto">
        Unite a las empresas que ya están transformando su forma de construir con Obry.
      </p>
      <div className="flex justify-center gap-6 flex-wrap relative z-10">
        <a 
          href="https://wa.me/595972117101?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20Obry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-black text-white font-bold hover:bg-slate-800 hover:-translate-y-1 hover:shadow-2xl transition-all"
        >
          Solicitar Demo Gratis
        </a>
        <a 
          href="https://wa.me/595972117101?text=Hola%2C%20quiero%20información%20sobre%20Obry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl border-2 border-black text-black font-bold hover:bg-black hover:text-white hover:-translate-y-1 transition-all"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  )
}

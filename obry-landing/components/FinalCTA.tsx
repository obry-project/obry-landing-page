import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="demo" className="max-w-[1200px] mx-auto px-6 py-20 text-center bg-[linear-gradient(135deg,#1a2233,#0b0f14)] rounded-2xl my-20 reveal">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Control Total, Datos Seguros, Obras Mejor Gestionadas
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        <a 
          href="https://wa.me/595972117101?text=Hola%2C%20quiero%20solicitar%20una%20demo%20de%20Obry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)] transition-all"
        >
          Solicitar Demo
        </a>
        <a 
          href="https://wa.me/595972117101?text=Hola%2C%20quiero%20información%20sobre%20Obry"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black hover:-translate-y-0.5 transition-all"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  )
}

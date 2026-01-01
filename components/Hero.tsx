import Link from 'next/link'

export default function Hero() {
  return (
    <section className="text-center py-32 px-6 bg-[radial-gradient(circle_at_top,#1a2233,var(--dark))] reveal">
      <h1 className="text-4xl md:text-5xl font-bold max-w-[900px] mx-auto animate-[fadeInUp_1s_ease]">
        El sistema operativo de la construcción moderna
      </h1>
      <p className="mt-5 text-lg text-[var(--muted)] max-w-[780px] mx-auto animate-[fadeInUp_1s_ease_0.2s_both]">
        <strong className="text-[var(--gold)]">Obry</strong> centraliza la información del proyecto, potencia la colaboración del equipo
        y garantiza la seguridad de los datos críticos de tu obra.
      </p>
      <div className="mt-10 flex justify-center gap-4 flex-wrap animate-[fadeInUp_1s_ease_0.4s_both]">
        <Link 
          href="#demo" 
          className="px-5 py-3 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)] transition-all"
        >
          Solicitar Demo
        </Link>
        <Link 
          href="#como-usar"
          className="px-5 py-3 rounded-lg border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black hover:-translate-y-0.5 transition-all"
        >
          Conocer Más
        </Link>
      </div>
    </section>
  )
}

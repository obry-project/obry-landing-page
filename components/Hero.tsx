import Link from 'next/link'
import dynamic from 'next/dynamic'

const ConstructionScene = dynamic(() => import('./ConstructionScene'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-xl"></div>
})
export default function Hero() {
  return (
    <section className="py-24 px-6 bg-[radial-gradient(circle_at_top,#1a2233,var(--dark))] reveal">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-[fadeInUp_1s_ease] z-10 relative">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            El sistema operativo de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[#ffe680]">construcción</span> moderna
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-[500px]">
            Centraliza la información del proyecto, potencia la colaboración del equipo
            y garantiza la seguridad de los datos críticos de tu obra con <b>Obry</b>.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link 
              href="#demo" 
              className="px-6 py-3.5 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)] transition-all"
            >
              Solicitar Demo
            </Link>
            <Link 
              href="#como-usar"
              className="px-6 py-3.5 rounded-lg border border-[var(--border)] bg-black/40 backdrop-blur-md text-white hover:border-[var(--gold)] hover:text-[var(--gold)] hover:-translate-y-0.5 transition-all"
            >
              Conocer Más
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto h-[400px] lg:h-[600px] animate-[fadeInUp_1s_ease_0.2s_both]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--gold)]/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
          <ConstructionScene />
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import dynamic from 'next/dynamic'

const ConstructionScene = dynamic(() => import('./ConstructionScene'), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-xl"></div>
})
import { FEATURES } from '@/lib/features'

export default function Hero() {
  const ctaLink = FEATURES.SHOW_WAITLIST_FORM ? FEATURES.WAITLIST_FORM_URL : '#demo'
  
  return (
    <section className="py-16 px-6 bg-[radial-gradient(circle_at_top,#f8fafc,var(--dark))] reveal">
      <div className="max-w-[1200px] mx-auto my-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-[fadeInUp_1s_ease] z-10 relative">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--text)]">
            El sistema operativo de la <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold)]">construcción</span> moderna
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-[500px]">
            Centraliza la información del proyecto, potencia la colaboración del equipo
            y garantiza la seguridad de los datos críticos de tu obra con <b>Obry</b>.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            <div className="flex gap-4 flex-wrap">
              <Link 
                href={ctaLink}
                target={FEATURES.SHOW_WAITLIST_FORM ? "_blank" : undefined}
                className="px-6 py-3.5 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(255,215,0,0.3)] transition-all"
              >
                {FEATURES.SHOW_WAITLIST_FORM ? 'Unirse a la Lista de Espera' : 'Solicitar Demo'}
              </Link>
              <Link 
                href="#como-usar"
                className="px-6 py-3.5 rounded-lg border border-[var(--border)] bg-white/50 backdrop-blur-md text-[var(--text)] hover:border-[var(--gold)] hover:text-[var(--gold-deep)] hover:-translate-y-0.5 transition-all"
              >
                Conocer Más
              </Link>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p>
                <span className="font-semibold text-black">Primeros usuarios ya en lista de espera</span>
              </p>
            </div>
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

import { Box, Users, Activity } from 'lucide-react'

const steps = [
  { number: '1', title: 'Organizás', description: 'Proyectos, equipos y recursos.', icon: <Box size={24} strokeWidth={1.5} /> },
  { number: '2', title: 'Colaboran', description: 'Todos con información segura y actualizada.', icon: <Users size={24} strokeWidth={1.5} /> },
  { number: '3', title: 'Controlás', description: 'Avances, registros y decisiones.', icon: <Activity size={24} strokeWidth={1.5} /> },
]

export default function HowToUse() {
  return (
    <section id="como-usar" className="max-w-[1200px] mx-auto px-6 py-32 reveal">
      <h2 className="text-3xl font-bold mb-4">Cómo se Usa Obry</h2>
      <div className="flex flex-col md:flex-row gap-8 mt-16">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex-1 bg-black/40 backdrop-blur-md border border-[var(--border)] p-8 rounded-2xl hover:-translate-y-2 hover:border-[var(--cyan)] hover:shadow-[0_12px_24px_rgba(0,255,136,0.1)] transition-all duration-400 reveal relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 bg-[var(--cyan)]/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--cyan)]/10 flex items-center justify-center text-[var(--cyan)] font-bold text-lg border border-[var(--cyan)]/20 shadow-[inset_0_1px_4px_rgba(0,255,136,0.1)] group-hover:bg-[var(--cyan)] group-hover:text-black group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)] transition-all">
                {step.number}
              </div>
              <div className="text-[var(--cyan)] group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 relative z-10 text-white">
              {step.title}
            </h3>
            <p className="text-[var(--muted)] relative z-10 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

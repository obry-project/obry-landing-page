const steps = [
  { number: '1', title: 'Organizás', description: 'Proyectos, equipos y recursos.' },
  { number: '2', title: 'Colaboran', description: 'Todos con información segura y actualizada.' },
  { number: '3', title: 'Controlás', description: 'Avances, registros y decisiones.' },
]

export default function HowToUse() {
  return (
    <section id="como-usar" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Cómo se Usa Obry</h2>
      <div className="flex flex-wrap gap-6 mt-10">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex-1 min-w-[220px] bg-[var(--dark-2)] border-l-4 border-[var(--gold)] p-6 rounded-lg hover:translate-x-2 hover:bg-[#0a0e12] transition-all duration-400 reveal"
          >
            <h3 className="text-[var(--gold)] text-xl font-semibold mb-2">
              {step.number}. {step.title}
            </h3>
            <p className="text-[var(--muted)]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

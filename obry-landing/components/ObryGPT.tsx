import Card from './Card'

const obryGPTFeatures = [
  { icon: '🤖', title: 'Análisis del Proyecto', description: 'Contexto real basado en datos de la obra.' },
  { icon: '📖', title: 'Normativas Locales', description: 'Reglamentos aplicados al proyecto.' },
  { icon: '💬', title: 'Soporte Técnico', description: 'Respuestas claras y documentadas.' },
]

export default function ObryGPT() {
  return (
    <section id="obry-gpt" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Obry GPT</h2>
      <p className="text-[var(--muted)]">
        Un ingeniero virtual que analiza los datos del proyecto, entiende
        las normativas de Paraguay y asiste al equipo técnico.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {obryGPTFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

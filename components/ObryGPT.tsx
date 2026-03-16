import Card from './Card'
import { Bot, LibraryBig, MessageSquare, Sparkles } from 'lucide-react'

const obryGPTFeatures = [
  { icon: <Sparkles size={24} strokeWidth={1.5} />, title: 'Orquestador Inteligente', description: 'ObryGPT no solo responde, sino que organiza tu proyecto. Consulta rendimientos, solicita resúmenes y obtén predicciones basadas en tus datos reales.' },
  { icon: <LibraryBig size={24} strokeWidth={1.5} />, title: 'Conocimiento Normativo', description: 'Reglamentos de construcción y seguridad aplicados.' },
  { icon: <MessageSquare size={24} strokeWidth={1.5} />, title: 'Soporte Ejecutivo', description: 'Análisis de datos para directivos y soporte técnico en campo.' },
]

export default function ObryGPT() {
  return (
    <section id="obry-gpt" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Obry GPT: El Orquestador de tu Proyecto</h2>
      <p className="text-[var(--muted)]">
        Más que una IA, es el cerebro que coordina cada aspecto de tu obra. 
        Analiza datos en tiempo real, entiende normativas y asiste en la toma 
        de decisiones para que el proyecto nunca se detenga.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {obryGPTFeatures.map((feature, index) => (
          <Card key={index} {...feature} theme="purple" />
        ))}
      </div>
    </section>
  )
}

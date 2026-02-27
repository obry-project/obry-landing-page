import Card from './Card'
import { FileSignature, PenTool, BookOpen } from 'lucide-react'

const features = [
  { icon: <FileSignature size={24} strokeWidth={1.5} />, title: 'Registros Diarios', description: 'Información inalterable y con historial.' },
  { icon: <PenTool size={24} strokeWidth={1.5} />, title: 'Reportes Firmados', description: 'Documentos oficiales con validez técnica.' },
  { icon: <BookOpen size={24} strokeWidth={1.5} />, title: 'Historial Completo', description: 'Toda la obra documentada y protegida.' },
]

export default function DigitalBook() {
  return (
    <section id="libro-obra" className="max-w-[1200px] mx-auto px-6 py-32 reveal">
      <h2 className="text-3xl font-bold mb-4">Libro de Obra Digital y Auditable</h2>
      <p className="text-[var(--muted)]">
        Registrá el avance diario, incidencias, clima y decisiones técnicas
        con trazabilidad completa y respaldo legal.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <Card key={index} {...feature} theme="cyan" />
        ))}
      </div>
    </section>
  )
}

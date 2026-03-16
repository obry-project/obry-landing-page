import Card from './Card'
import { FileText, AlertCircle, Package, ShieldCheck } from 'lucide-react'

const features = [
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Registros Diarios', description: 'Información inalterable y con historial.', theme: 'blue' as const },
  { icon: <AlertCircle size={24} strokeWidth={1.5} />, title: 'Gestión de Incidencias', description: 'Registro y seguimiento de problemas en obra.', theme: 'red' as const },
  { icon: <Package size={24} strokeWidth={1.5} />, title: 'Ensayos de Materiales', description: 'Control de calidad y ensayos de materiales.', theme: 'indigo' as const },
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: 'Inspecciones y Listas', description: 'Listas de verificación y firmas técnicas.', theme: 'teal' as const },
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Reportes Firmados', description: 'Exportación automática en PDF con validez legal.', theme: 'gold' as const },
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Historial Completo', description: 'Búsqueda avanzada y trazabilidad de eventos.', theme: 'gold-muted' as const },
]

export default function DigitalBook() {
  return (
    <section id="libro-obra" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Libro de Obra Digital</h2>
      <p className="text-[var(--muted)]">
        La bitácora digital más avanzada para el sector construcción. 
        Reemplaza el papel por registros digitales seguros y verificables.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

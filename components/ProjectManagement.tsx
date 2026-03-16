import Card from './Card'
import { Timer, Package, Tractor, FileText } from 'lucide-react'

const projectFeatures = [
  { icon: <Timer size={24} strokeWidth={1.5} />, title: 'Control de Horas', description: 'Seguimiento preciso de jornadas y rendimientos.', theme: 'blue' as const },
  { icon: <Package size={24} strokeWidth={1.5} />, title: 'Materiales', description: 'Consumo en tiempo real y optimización de stock.', theme: 'green' as const },
  { icon: <Tractor size={24} strokeWidth={1.5} />, title: 'Maquinaria', description: 'Control de horas máquina y mantenimiento.', theme: 'orange' as const },
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Asignación de Recursos', description: 'Distribución inteligente de personal y equipos.', theme: 'red' as const },
]

export default function ProjectManagement() {
  return (
    <section id="proyecto" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Gestión Integral del Proyecto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {projectFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

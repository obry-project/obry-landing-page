import Card from './Card'
import { HardHat, Package, Tractor, FileText } from 'lucide-react'

const projectFeatures = [
  { icon: <HardHat size={24} strokeWidth={1.5} />, title: 'Personal', description: 'Gestión de trabajadores con roles y permisos definidos.' },
  { icon: <Package size={24} strokeWidth={1.5} />, title: 'Materiales', description: 'Control de insumos, costos y consumo por obra.' },
  { icon: <Tractor size={24} strokeWidth={1.5} />, title: 'Maquinaria', description: 'Seguimiento de equipos, uso y responsabilidad.' },
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Archivos Técnicos', description: 'Documentación protegida con versiones y permisos.' },
]

export default function ProjectManagement() {
  return (
    <section id="proyecto" className="max-w-[1200px] mx-auto px-6 py-32 reveal">
      <h2 className="text-3xl font-bold mb-4">Gestión Integral del Proyecto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {projectFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

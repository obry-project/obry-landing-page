import Card from './Card'
import { CloudSun, TrendingUp, FileText, MapPin, Camera, Smartphone } from 'lucide-react'

const dailyToolsFeatures = [
  { icon: <CloudSun size={24} strokeWidth={1.5} />, title: 'Reporte de Clima', description: 'Alertas y condiciones meteorológicas en tiempo real.', theme: 'orange' as const },
  { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: 'Cost Seeker', description: 'Buscador de precios de materiales y mano de obra.', theme: 'green' as const },
  { icon: <FileText size={24} strokeWidth={1.5} />, title: 'Gestión de Archivos', description: 'Acceso instantáneo a planos y documentos con geo-referencia.', theme: 'blue' as const },
  { icon: <MapPin size={24} strokeWidth={1.5} />, title: 'Ubicación y Precisión', description: 'Registros exactos en el mapa para control total.', theme: 'red' as const },
  {
    icon: <Camera size={24} strokeWidth={1.5} />,
    title: 'Registro Fotográfico',
    description: 'Captura de evidencias visuales con sello de tiempo y ubicación automática.',
    theme: 'gold' as const
  },
]

export default function DailyTools() {
  return (
    <section id="herramientas" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Herramientas Diarias para Ingenieros</h2>
      <p className="text-[var(--muted)]">
        Obry incluye herramientas prácticas que los ingenieros usan todos los días
        en obra, centralizadas en una sola app.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {dailyToolsFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

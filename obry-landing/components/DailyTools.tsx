import Card from './Card'

const dailyToolsFeatures = [
  { 
    icon: '📊', 
    title: 'Reportes Meteorológicos', 
    description: 'Condiciones climáticas actualizadas y registro histórico para planificación de tareas críticas.' 
  },
  { 
    icon: '💰', 
    title: 'Buscador de Costos', 
    description: 'Precios actualizados de materiales, equipos y mano de obra del mercado local.' 
  },
  { 
    icon: '📐', 
    title: 'Herramientas de Medición', 
    description: 'Calculadoras de volúmenes, áreas, conversiones de unidades y estimaciones rápidas.' 
  },
  { 
    icon: '📱', 
    title: 'Acceso desde Obra', 
    description: 'Todas las herramientas disponibles offline en tu dispositivo móvil.' 
  },
  { 
    icon: '📸', 
    title: 'Registro Fotográfico', 
    description: 'Captura y organiza fotos con metadatos automáticos de ubicación y fecha.' 
  },
  { 
    icon: '⏱️', 
    title: 'Control de Tiempos', 
    description: 'Seguimiento de jornadas, tareas y rendimientos en tiempo real.' 
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {dailyToolsFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

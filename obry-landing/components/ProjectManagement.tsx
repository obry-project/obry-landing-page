import Card from './Card'

export default function ProjectManagement() {
  const features = [
    { icon: '👷', title: 'Personal', description: 'Gestión de trabajadores con roles y permisos definidos.' },
    { icon: '🧱', title: 'Materiales', description: 'Control de insumos, costos y consumo por obra.' },
    { icon: '🚜', title: 'Maquinaria', description: 'Seguimiento de equipos, uso y responsabilidad.' },
    { icon: '📋', title: 'Archivos Técnicos', description: 'Documentación protegida con versiones y permisos.' },
  ]

  return (
    <section id="proyecto" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Gestión Integral del Proyecto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {features.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

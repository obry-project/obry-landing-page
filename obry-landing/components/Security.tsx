import Card from './Card'

const securityFeatures = [
  { icon: '🔐', title: 'Control de Accesos', description: 'Roles, permisos y visibilidad por usuario.' },
  { icon: '🔍', title: 'Trazabilidad Total', description: 'Registro de cada cambio y acción.' },
  { icon: '🛡️', title: 'Protección de Datos', description: 'Información resguardada bajo los más altos estándares.' },
]

export default function Security() {
  return (
    <section id="seguridad" className="max-w-[1200px] mx-auto px-6 py-20 reveal">
      <h2 className="text-3xl font-bold mb-4">Seguridad de Datos</h2>
      <p className="text-[var(--muted)]">
        Diseñado para constructoras que manejan información crítica y requieren
        estándares altos de seguridad y control.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {securityFeatures.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </section>
  )
}

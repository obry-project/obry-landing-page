import Card from './Card'
import { LockKeyhole, FolderSearch, ShieldCheck } from 'lucide-react'

const securityFeatures = [
  { icon: <LockKeyhole size={24} strokeWidth={1.5} />, title: 'Control de Accesos', description: 'Roles, permisos y visibilidad por usuario.' },
  { icon: <FolderSearch size={24} strokeWidth={1.5} />, title: 'Trazabilidad Total', description: 'Registro de cada cambio y acción.' },
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: 'Protección de Datos', description: 'Información resguardada bajo los más altos estándares.' },
]

export default function Security() {
  return (
    <section id="seguridad" className="max-w-[1200px] mx-auto px-6 py-32 reveal">
      <h2 className="text-3xl font-bold mb-4">Seguridad de Datos</h2>
      <p className="text-[var(--muted)]">
        Diseñado para constructoras que manejan información crítica y requieren
        estándares altos de seguridad y control.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {securityFeatures.map((feature, index) => (
          <Card key={index} {...feature} theme="cyan" />
        ))}
      </div>
    </section>
  )
}

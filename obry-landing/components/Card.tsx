interface CardProps {
  title: string
  description: string
  icon?: string
}

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="reveal bg-[var(--dark-2)] border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[0_12px_24px_rgba(255,215,0,0.1)] transition-all duration-400">
      <h3 className="text-[var(--gold)] text-lg font-semibold mb-2">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <p className="text-[var(--muted)]">{description}</p>
    </div>
  )
}

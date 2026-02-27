import { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  theme?: 'gold' | 'cyan'
}

const themeClasses = {
  gold: {
    borderHover: 'hover:border-[var(--gold)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(255,215,0,0.1)]',
    backdropGlow: 'bg-[var(--gold)]/5',
    iconWrapper: 'bg-[var(--gold)]/10 border-[var(--gold)]/20 text-[var(--gold)] shadow-[inset_0_1px_4px_rgba(255,215,0,0.1)] group-hover:bg-[var(--gold)] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]'
  },
  cyan: {
    borderHover: 'hover:border-[var(--cyan)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(0,255,136,0.1)]',
    backdropGlow: 'bg-[var(--cyan)]/5',
    iconWrapper: 'bg-[var(--cyan)]/10 border-[var(--cyan)]/20 text-[var(--cyan)] shadow-[inset_0_1px_4px_rgba(0,255,136,0.1)] group-hover:bg-[var(--cyan)] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]'
  }
}

export default function Card({ title, description, icon, theme = 'gold' }: CardProps) {
  const styles = themeClasses[theme]

  return (
    <div className={`reveal relative overflow-hidden bg-black/40 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-2 ${styles.borderHover} ${styles.shadowHover} transition-all duration-400 group`}>
      <div className={`absolute top-0 right-0 p-12 ${styles.backdropGlow} rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:text-black transition-all duration-300 relative z-10 ${styles.iconWrapper}`}>
        <div className={styles.iconColor}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 tracking-tight relative z-10 text-white">
        {title}
      </h3>
      <p className="text-[var(--muted)] leading-relaxed relative z-10">{description}</p>
    </div>
  )
}

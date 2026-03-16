import { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  icon?: ReactNode
  theme?: 'gold' | 'gold-muted' | 'white' | 'blue' | 'green' | 'red' | 'orange' | 'purple' | 'teal' | 'indigo' | 'pink'
}

const themeClasses = {
  gold: {
    borderHover: 'hover:border-[var(--gold)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(255,215,0,0.15)]',
    backdropGlow: 'bg-[var(--gold)]/5',
    iconWrapper: 'bg-[var(--gold)]/10 border-[var(--gold)]/20 text-[var(--gold-deep)] shadow-[inset_0_1px_4px_rgba(255,215,0,0.1)] group-hover:bg-[var(--gold)] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]'
  },
  'gold-muted': {
    borderHover: 'hover:border-[var(--gold-deep)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(184,134,11,0.15)]',
    backdropGlow: 'bg-[var(--gold-deep)]/5',
    iconWrapper: 'bg-[var(--gold-deep)]/10 border-[var(--gold-deep)]/20 text-[var(--gold-deep)] shadow-[inset_0_1px_4px_rgba(184,134,11,0.1)] group-hover:bg-[var(--gold-deep)] group-hover:shadow-[0_0_15px_rgba(184,134,11,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(184,134,11,0.3)]'
  },
  white: {
    borderHover: 'hover:border-slate-300',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)]',
    backdropGlow: 'bg-slate-50',
    iconWrapper: 'bg-slate-100 border-slate-200 text-slate-600 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] group-hover:bg-slate-200 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]'
  },
  blue: {
    borderHover: 'hover:border-[var(--blue)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(0,112,243,0.15)]',
    backdropGlow: 'bg-[var(--blue)]/5',
    iconWrapper: 'bg-[var(--blue)]/10 border-[var(--blue)]/20 text-[var(--blue)] shadow-[inset_0_1px_4px_rgba(0,112,243,0.1)] group-hover:bg-[var(--blue)] group-hover:shadow-[0_0_15px_rgba(0,112,243,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(0,112,243,0.3)]'
  },
  green: {
    borderHover: 'hover:border-[var(--green)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(16,185,129,0.15)]',
    backdropGlow: 'bg-[var(--green)]/5',
    iconWrapper: 'bg-[var(--green)]/10 border-[var(--green)]/20 text-[var(--green)] shadow-[inset_0_1px_4px_rgba(16,185,129,0.1)] group-hover:bg-[var(--green)] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]'
  },
  red: {
    borderHover: 'hover:border-[var(--red)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(244,63,94,0.15)]',
    backdropGlow: 'bg-[var(--red)]/5',
    iconWrapper: 'bg-[var(--red)]/10 border-[var(--red)]/20 text-[var(--red)] shadow-[inset_0_1px_4px_rgba(244,63,94,0.1)] group-hover:bg-[var(--red)] group-hover:shadow-[0_0_15px_rgba(244,63,94,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]'
  },
  orange: {
    borderHover: 'hover:border-[var(--orange)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(245,166,35,0.15)]',
    backdropGlow: 'bg-[var(--orange)]/5',
    iconWrapper: 'bg-[var(--orange)]/10 border-[var(--orange)]/20 text-[var(--orange)] shadow-[inset_0_1px_4px_rgba(245,166,35,0.1)] group-hover:bg-[var(--orange)] group-hover:shadow-[0_0_15px_rgba(245,166,35,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(245,166,35,0.3)]'
  },
  purple: {
    borderHover: 'hover:border-[var(--purple)]',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(139,92,246,0.15)]',
    backdropGlow: 'bg-[var(--purple)]/5',
    iconWrapper: 'bg-[var(--purple)]/10 border-[var(--purple)]/20 text-[var(--purple)] shadow-[inset_0_1px_4px_rgba(139,92,246,0.1)] group-hover:bg-[var(--purple)] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]'
  },
  teal: {
    borderHover: 'hover:border-teal-500',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(20,184,166,0.15)]',
    backdropGlow: 'bg-teal-50',
    iconWrapper: 'bg-teal-50 border-teal-100 text-teal-600 shadow-[inset_0_1px_4px_rgba(20,184,166,0.1)] group-hover:bg-teal-500 group-hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(20,184,166,0.3)]'
  },
  indigo: {
    borderHover: 'hover:border-indigo-500',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(99,102,241,0.15)]',
    backdropGlow: 'bg-indigo-50',
    iconWrapper: 'bg-indigo-50 border-indigo-100 text-indigo-600 shadow-[inset_0_1px_4px_rgba(99,102,241,0.1)] group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]'
  },
  pink: {
    borderHover: 'hover:border-pink-500',
    shadowHover: 'hover:shadow-[0_12px_24px_rgba(236,72,153,0.15)]',
    backdropGlow: 'bg-pink-50',
    iconWrapper: 'bg-pink-50 border-pink-100 text-pink-600 shadow-[inset_0_1px_4px_rgba(236,72,153,0.1)] group-hover:bg-pink-500 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]',
    iconColor: 'drop-shadow-[0_0_8px_rgba(236,72,153,0.3)]'
  }
}

export default function Card({ title, description, icon, theme = 'gold' }: CardProps) {
  const styles = themeClasses[theme]

  return (
    <div className={`reveal relative overflow-hidden bg-white/70 backdrop-blur-md border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-2 ${styles.borderHover} ${styles.shadowHover} transition-all duration-400 group`}>
      <div className={`absolute top-0 right-0 p-12 ${styles.backdropGlow} rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:text-white transition-all duration-300 relative z-10 ${styles.iconWrapper}`}>
        <div className={styles.iconColor}>
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 tracking-tight relative z-10 text-[var(--text)]">
        {title}
      </h3>
      <p className="text-[var(--muted)] leading-relaxed relative z-10">{description}</p>
    </div>
  )
}

import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Obry | App Inteligente para la Construcción',
  description: 'Obry es una app de gestión para la construcción con seguridad enterprise. Centralizá proyectos, colaborá en equipo y gestioná obras con control total y datos protegidos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  )
}

'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectManagement from '@/components/ProjectManagement'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Footer from '@/components/Footer'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Header />
      <Hero />
      
      <section className="max-w-[1200px] mx-auto px-6 py-20 reveal">
        <h2 className="text-3xl font-bold mb-4">Una única fuente de verdad para tu obra</h2>
        <p className="text-[var(--muted)]">
          Toda la información del proyecto vive en un solo lugar, con control de accesos, historial de cambios y visibilidad total para equipos técnicos y directivos.
        </p>
      </section>

      <ProjectManagement />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

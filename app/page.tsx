'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectManagement from '@/components/ProjectManagement'
import DigitalBook from '@/components/DigitalBook'
import Security from '@/components/Security'
import ObryGPT from '@/components/ObryGPT'
import DailyTools from '@/components/DailyTools'
import HowToUse from '@/components/HowToUse'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Header />
      <Hero />
      
      <section className="max-w-[1200px] mx-auto px-6 py-32 reveal">
        <h2 className="text-3xl font-bold mb-4">Una única fuente de verdad para tu obra</h2>
        <p className="text-[var(--muted)]">
          Toda la información del proyecto vive en un solo lugar, con control de accesos, historial de cambios y visibilidad total para equipos técnicos y directivos.
        </p>
      </section>

      <ProjectManagement />
      <DigitalBook />
      <Security />
      <DailyTools />
      <ObryGPT />
      <HowToUse />
      <FinalCTA />
      
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}

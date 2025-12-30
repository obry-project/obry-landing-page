'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header 
        className={`sticky top-0 bg-[rgba(11,15,20,.95)] backdrop-blur-xl border-b border-[var(--border)] z-[1000] transition-shadow ${
          hasScrolled ? 'shadow-[0_2px_10px_rgba(0,0,0,0.3)]' : ''
        }`}
      >
        <nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6 py-4">
          <div className="text-[var(--gold)] font-bold text-xl tracking-wider">
            OBRY
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="#proyecto" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-sm">
              Proyecto
            </Link>
            <Link href="#libro-obra" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-sm">
              Libro de Obra
            </Link>
            <Link href="#seguridad" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-sm">
              Seguridad
            </Link>
            <Link href="#herramientas" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-sm">
              Herramientas
            </Link>
            <Link href="#obry-gpt" className="text-[var(--muted)] hover:text-[var(--gold)] transition-colors text-sm">
              Obry GPT
            </Link>
            <Link 
              href="#demo"
              className="ml-8 px-5 py-2.5 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)] transition-all"
            >
              Solicitar Demo
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-[5px] z-[1001] relative"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[3px] bg-[var(--gold)] rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-[3px] bg-[var(--gold)] rounded transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[3px] bg-[var(--gold)] rounded transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          onClick={closeMenu}
        />
      )}

      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-[rgba(3,4,5,.98)] backdrop-blur-xl border-l border-[var(--border)] z-[999] flex flex-col pt-20 pb-6 px-6 overflow-y-auto shadow-[-4px_0_24px_rgba(0,0,0,0.5)] transition-transform duration-400 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Link 
          href="#proyecto" 
          onClick={closeMenu} 
          className="text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--dark-2)] transition-all text-base py-3 px-4 rounded-lg"
        >
          Proyecto
        </Link>
        <Link 
          href="#libro-obra" 
          onClick={closeMenu} 
          className="text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--dark-2)] transition-all text-base py-3 px-4 rounded-lg"
        >
          Libro de Obra
        </Link>
        <Link 
          href="#seguridad" 
          onClick={closeMenu} 
          className="text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--dark-2)] transition-all text-base py-3 px-4 rounded-lg"
        >
          Seguridad
        </Link>
        <Link 
          href="#herramientas" 
          onClick={closeMenu} 
          className="text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--dark-2)] transition-all text-base py-3 px-4 rounded-lg"
        >
          Herramientas
        </Link>
        <Link 
          href="#obry-gpt" 
          onClick={closeMenu} 
          className="text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--dark-2)] transition-all text-base py-3 px-4 rounded-lg"
        >
          Obry GPT
        </Link>
        
        <div className="mt-6 pt-6 border-t border-[var(--border)]">
          <Link 
            href="#demo" 
            onClick={closeMenu}
            className="block text-center px-6 py-3 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-soft)] text-black font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,215,0,0.3)] transition-all"
          >
            Solicitar Demo
          </Link>
        </div>
      </div>
    </>
  )
}

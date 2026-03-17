'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          hasScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.svg" 
              alt="Obry Logo" 
              className="h-8 md:h-10 w-auto transition-transform duration-500 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              ['Inicio', '#funciones'],
              ['Libro de Obra', '#libro-obra'],
              ['Seguridad', '#seguridad'],
              ['Obry GPT', '#obry-gpt'],
              ['Cómo funciona', '#como-usar']
            ].map(([label, href]) => (
              <Link 
                key={label} 
                href={href} 
                className="text-sm font-medium text-[var(--muted)] hover:text-black transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--gold-deep)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="#demo"
              className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
            >
              Probar App
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 text-slate-800 transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-[150] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="group" onClick={() => setIsMenuOpen(false)}>
              <img src="/logo.svg" alt="Obry" className="h-8 w-auto" />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {[
              ['Inicio', '#funciones'],
              ['Libro de Obra', '#libro-obra'],
              ['Seguridad', '#seguridad'],
              ['Obry GPT', '#obry-gpt'],
              ['Cómo funciona', '#como-usar']
            ].map(([label, href]) => (
              <Link 
                key={label} 
                href={href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-bold hover:text-[var(--gold-deep)] transition-colors text-slate-900"
              >
                {label}
              </Link>
            ))}
            <Link 
              href="#demo"
              onClick={() => setIsMenuOpen(false)}
              className="mt-12 px-8 py-5 rounded-2xl bg-black text-white text-xl font-bold text-center shadow-2xl shadow-slate-300 active:scale-95 transition-all"
            >
              Probar Demo Gratis
            </Link>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-slate-100 text-center">
             <p className="text-[var(--muted)] text-sm">© 2026 Obry App. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </>
  )
}

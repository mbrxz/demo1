'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-[3px] h-7 bg-[#C17B54]" />
            <span
              className={`font-black text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              РЕНОВА
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#C17B54] ${
                  scrolled ? 'text-[#6B6B6B]' : 'text-white/70'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:+74950000000"
              className={`hidden lg:block text-sm font-bold transition-colors duration-300 ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              +7 (495) 000-00-00
            </a>
            <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-widest px-5 py-3 bg-[#C17B54] text-white hover:bg-[#a8673f] transition-colors"
            >
              Получить расчёт
            </a>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <span className={`w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
              <span className={`w-5 h-0.5 transition-colors ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
              <span className={`w-3 h-0.5 transition-colors ${scrolled ? 'bg-[#1A1A1A]' : 'bg-white'}`} />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-[#1A1A1A] hover:text-[#C17B54] py-1"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+74950000000"
            className="block text-sm font-bold text-[#1A1A1A] pt-4 border-t border-gray-100"
          >
            +7 (495) 000-00-00
          </a>
        </div>
      )}
    </header>
  )
}

'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    objectType: 'Двухкомнатная квартира',
    area: '58 м²',
    duration: '68 дней',
    format: 'Ремонт под ключ',
    result: 'Сдали на 8 дней раньше срока',
    from: '#1A3C2E',
    to: '#0E2218',
  },
  {
    number: '02',
    objectType: 'Кухня-гостиная',
    area: '38 м²',
    duration: '21 день',
    format: 'Косметический ремонт',
    result: 'Полное обновление за 3 недели',
    from: '#1E2A38',
    to: '#111C28',
  },
  {
    number: '03',
    objectType: 'Ванная комната',
    area: '7 м²',
    duration: '17 дней',
    format: 'Ремонт санузла',
    result: 'Уложились в бюджет и сроки',
    from: '#2A2020',
    to: '#1A1010',
  },
  {
    number: '04',
    objectType: 'Трёхкомнатная квартира',
    area: '74 м²',
    duration: '92 дня',
    format: 'Капитальный ремонт',
    result: 'Полная переработка вторички',
    from: '#1A2030',
    to: '#0E141E',
  },
  {
    number: '05',
    objectType: 'Студия',
    area: '32 м²',
    duration: '45 дней',
    format: 'Ремонт под ключ',
    result: 'Перепланировка и чистовая отделка',
    from: '#28221A',
    to: '#181410',
  },
  {
    number: '06',
    objectType: 'Спальня с гардеробной',
    area: '19 м²',
    duration: '28 дней',
    format: 'Дизайн-проект + ремонт',
    result: 'Авторский интерьер под ключ',
    from: '#1E2828',
    to: '#101818',
  },
]

export default function Gallery() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="gallery" className="bg-[#111] py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="w-16 h-0.5 bg-[#C17B54] mb-6" />
            <span className="text-[#C17B54] text-xs font-semibold uppercase tracking-[0.3em] block mb-2">
              Портфолио
            </span>
            <h2
              className="font-black text-white uppercase"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Наши работы
            </h2>
          </div>
          <button className="text-xs text-gray-600 font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 hover:text-white hover:border-white transition-colors hidden lg:block">
            Все проекты →
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`relative overflow-hidden ${i === 0 ? 'lg:row-span-2' : ''}`}
              style={{
                aspectRatio: i === 0 ? 'auto' : '4/3',
                minHeight: i === 0 ? '420px' : 'auto',
                background: `linear-gradient(135deg, ${project.from}, ${project.to})`,
              }}
            >
              {/* Large faded number */}
              <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-opacity duration-500"
                style={{ opacity: hovered === i ? 0.04 : 0.1 }}
              >
                <span
                  className="font-black text-white leading-none"
                  style={{
                    fontSize: i === 0
                      ? 'clamp(12rem, 25vw, 22rem)'
                      : 'clamp(7rem, 14vw, 12rem)',
                  }}
                >
                  {project.number}
                </span>
              </div>

              {/* Top-left badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="font-black text-xs uppercase tracking-widest transition-colors duration-300"
                  style={{ color: hovered === i ? '#C17B54' : 'rgba(255,255,255,0.25)' }}
                >
                  {project.number}
                </span>
              </div>

              {/* Terracotta left accent line */}
              <div
                className="absolute top-0 left-0 w-[3px] transition-all duration-300"
                style={{ height: hovered === i ? '100%' : '0%', background: '#C17B54' }}
              />

              {/* Bottom gradient + info */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  padding: '3rem 1.25rem 1.25rem',
                }}
              >
                {/* Row 1: format · duration */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="h-px transition-all duration-300 shrink-0"
                    style={{ width: hovered === i ? '16px' : '8px', background: '#C17B54' }}
                  />
                  <span className="text-[#C17B54] text-xs uppercase tracking-wider font-semibold truncate">
                    {project.format} · {project.duration}
                  </span>
                </div>

                {/* Row 2: objectType · area */}
                <h3 className="text-white font-black text-sm lg:text-base uppercase leading-tight mb-1.5">
                  {project.objectType} · {project.area}
                </h3>

                {/* Row 3: result — slides in on hover */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: hovered === i ? '28px' : '0px',
                    opacity: hovered === i ? 1 : 0,
                  }}
                >
                  <p className="text-white/55 text-xs">
                    {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

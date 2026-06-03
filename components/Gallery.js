'use client'

import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'Двушка в новостройке',
    type: 'Под ключ',
    area: '58 м²',
    from: '#1A3C2E',
    to: '#0E2218',
  },
  {
    number: '02',
    title: 'Кухня-гостиная',
    type: 'Косметический',
    area: '38 м²',
    from: '#1E2A38',
    to: '#111C28',
  },
  {
    number: '03',
    title: 'Ванная комната',
    type: 'Ванная',
    area: '7 м²',
    from: '#2A2020',
    to: '#1A1010',
  },
  {
    number: '04',
    title: 'Трёшка, вторичка',
    type: 'Капитальный',
    area: '74 м²',
    from: '#1A2030',
    to: '#0E141E',
  },
  {
    number: '05',
    title: 'Студия',
    type: 'Под ключ',
    area: '32 м²',
    from: '#28221A',
    to: '#181410',
  },
  {
    number: '06',
    title: 'Спальня с гардеробной',
    type: 'Дизайн-проект',
    area: '19 м²',
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
              className={`relative overflow-hidden cursor-pointer ${
                i === 0 ? 'lg:row-span-2' : ''
              }`}
              style={{
                aspectRatio: i === 0 ? 'auto' : '4/3',
                minHeight: i === 0 ? '420px' : 'auto',
                background: `linear-gradient(135deg, ${project.from}, ${project.to})`,
              }}
            >
              {/* Large number — background element */}
              <div
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none transition-all duration-500"
                style={{
                  opacity: hovered === i ? 0.06 : 0.12,
                }}
              >
                <span
                  className="font-black text-white leading-none"
                  style={{ fontSize: i === 0 ? 'clamp(12rem, 25vw, 22rem)' : 'clamp(7rem, 14vw, 12rem)' }}
                >
                  {project.number}
                </span>
              </div>

              {/* Top-left number badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="font-black text-xs uppercase tracking-widest transition-colors duration-300"
                  style={{ color: hovered === i ? '#C17B54' : 'rgba(255,255,255,0.25)' }}
                >
                  {project.number}
                </span>
              </div>

              {/* Hover: terracotta accent line slides in from left */}
              <div
                className="absolute top-0 left-0 w-[3px] transition-all duration-300"
                style={{
                  height: hovered === i ? '100%' : '0%',
                  background: '#C17B54',
                }}
              />

              {/* Bottom info */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-300"
                style={{
                  transform: hovered === i ? 'translateY(0)' : 'translateY(6px)',
                  opacity: hovered === i ? 1 : 0.5,
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="h-px transition-all duration-300"
                    style={{
                      width: hovered === i ? '16px' : '8px',
                      background: '#C17B54',
                    }}
                  />
                  <span className="text-[#C17B54] text-xs uppercase tracking-wider font-semibold">
                    {project.type} · {project.area}
                  </span>
                </div>
                <h3 className="text-white font-black text-sm lg:text-base uppercase leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

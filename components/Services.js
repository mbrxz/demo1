'use client'

import { useState } from 'react'

const services = [
  {
    number: '01',
    title: 'Косметический ремонт',
    desc: 'Покраска стен, замена напольного покрытия, обновление потолков. Быстро и без пыли.',
    price: 'от 5 000 ₽/м²',
  },
  {
    number: '02',
    title: 'Капитальный ремонт',
    desc: 'Полная переработка инженерных систем, стяжка, перепланировка согласно проекту.',
    price: 'от 10 000 ₽/м²',
  },
  {
    number: '03',
    title: 'Ремонт под ключ',
    desc: 'От черновых работ до мебели и текстиля. Заезжайте с чемоданом.',
    price: 'от 20 000 ₽/м²',
  },
  {
    number: '04',
    title: 'Ремонт ванной и санузла',
    desc: 'Гидроизоляция, укладка плитки, замена сантехники. Под ключ за 2–3 недели.',
    price: 'от 80 000 ₽',
  },
  {
    number: '05',
    title: 'Кухня под ключ',
    desc: 'Плитка, фартук, встройка техники, подключение коммуникаций. С дизайн-проектом.',
    price: 'от 60 000 ₽',
  },
  {
    number: '06',
    title: 'Дизайн-проект',
    desc: 'Разработка интерьера с 3D-визуализацией и спецификацией материалов.',
    price: 'от 2 000 ₽/м²',
  },
]

export default function Services() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" className="bg-white py-14 lg:py-20 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-end justify-between pb-8 lg:pb-10 border-b border-gray-100">
          <div>
            <div className="w-16 h-0.5 bg-[#C17B54] mb-6" />
            <h2
              className="font-black text-[#1A1A1A] uppercase"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Услуги
            </h2>
          </div>
          <span className="text-[#6B6B6B] text-sm tabular-nums hidden lg:block">
            {services.length} направлений
          </span>
        </div>

        <div>
          {services.map((service, i) => (
            <div
              key={service.number}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="py-5 lg:py-6 border-b border-gray-100 group"
            >
              {/* Mobile layout: number + [title + desc + price] stacked */}
              <div className="flex items-start gap-4 lg:hidden">
                <span className="text-[#1A1A1A]/20 font-bold text-xs uppercase tracking-widest w-8 shrink-0 mt-1">
                  {service.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-black text-lg uppercase text-[#1A1A1A] leading-tight">
                      {service.title}
                    </h3>
                    <span className="text-[#6B6B6B] text-xs shrink-0 mt-0.5 font-medium tabular-nums">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] mt-2 leading-relaxed">{service.desc}</p>
                </div>
              </div>

              {/* Desktop layout: single row with hover desc */}
              <div className="hidden lg:flex items-center gap-12">
                <span className="text-[#1A1A1A]/20 font-bold text-xs uppercase tracking-widest w-8 shrink-0 group-hover:text-[#C17B54] transition-colors">
                  {service.number}
                </span>

                <h3
                  className={`font-black text-2xl uppercase flex-1 transition-colors duration-150 ${
                    hovered === i ? 'text-[#C17B54]' : 'text-[#1A1A1A]'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm text-[#6B6B6B] max-w-xs transition-all duration-200 ${
                    hovered === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}
                >
                  {service.desc}
                </p>

                <span className="text-[#6B6B6B] text-sm shrink-0 font-medium tabular-nums">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

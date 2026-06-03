'use client'

import { useState } from 'react'

const RENOVATION_TYPES = [
  { key: 'cosmetic', label: 'Косметический', min: 5000, max: 8000 },
  { key: 'capital', label: 'Капитальный', min: 10000, max: 15000 },
  { key: 'turnkey', label: 'Под ключ', min: 20000, max: 30000 },
]

function formatMoney(n) {
  return n.toLocaleString('ru-RU')
}

export default function Hero() {
  const [typeKey, setTypeKey] = useState('capital')
  const [area, setArea] = useState('')

  const selectedType = RENOVATION_TYPES.find((t) => t.key === typeKey)
  const numArea = parseInt(area, 10)
  const hasResult = !isNaN(numArea) && numArea > 0

  return (
    <section className="bg-[#1A3C2E] min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-px bg-[#C17B54]" />
              <span className="text-[#C17B54] text-xs font-semibold uppercase tracking-[0.3em]">
                Москва · ремонт квартир
              </span>
            </div>

            <h1
              className="font-black text-white uppercase leading-[0.92] mb-7"
              style={{ fontSize: 'clamp(2.6rem, 5vw, 4.8rem)' }}
            >
              Ремонт квартиры<br />
              под ключ.<br />
              <span className="text-[#C17B54]">Цена и срок —</span><br />
              в договоре.
            </h1>

            <p className="text-white/45 text-base lg:text-lg leading-relaxed mb-10 max-w-sm">
              Без срывов сроков, скрытых доплат<br />и хаоса с подрядчиками.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#C17B54] text-white font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#a8673f] transition-colors"
              >
                Получить расчёт
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center border border-white/15 text-white/60 font-medium text-sm px-8 py-4 hover:border-white/40 hover:text-white transition-all duration-200"
              >
                Смотреть работы →
              </a>
            </div>

            <div className="grid grid-cols-3 mt-16 pt-8 border-t border-white/10">
              {[
                { value: '800+', label: 'квартир сдано' },
                { value: '7 лет', label: 'на рынке Москвы' },
                { value: '3 года', label: 'гарантия работ' },
              ].map(({ value, label }, i) => (
                <div key={i} className={i > 0 ? 'pl-6 border-l border-white/10' : 'pr-6'}>
                  <div className="font-black text-white text-2xl lg:text-3xl">{value}</div>
                  <div className="text-white/35 text-xs mt-1.5 uppercase tracking-wide leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.04] p-7 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[#C17B54]" />
              <span className="text-[#C17B54] text-xs font-semibold uppercase tracking-[0.25em]">
                Калькулятор стоимости
              </span>
            </div>

            <div className="space-y-7">
              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-3">Тип ремонта</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {RENOVATION_TYPES.map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => setTypeKey(key)}
                      className={`py-3 px-2 text-xs font-bold uppercase tracking-wide border transition-all duration-150 ${
                        typeKey === key
                          ? 'bg-[#C17B54] border-[#C17B54] text-white'
                          : 'border-white/15 text-white/40 hover:border-white/35 hover:text-white/70'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="text-white/25 text-xs mt-2.5">
                  {selectedType.min.toLocaleString('ru-RU')} –{' '}
                  {selectedType.max.toLocaleString('ru-RU')} ₽/м²
                </div>
              </div>

              <div>
                <div className="text-white/40 text-xs uppercase tracking-wide mb-3">
                  Площадь квартиры, м²
                </div>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Например: 54"
                  className="w-full bg-white/5 border border-white/15 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C17B54]/60 transition-colors"
                />
              </div>

              <div
                className={`border-t border-white/10 pt-6 transition-opacity duration-300 ${
                  hasResult ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className="text-white/40 text-xs uppercase tracking-wide mb-2">
                  Примерная стоимость
                </div>
                <div
                  className="font-black text-white"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)' }}
                >
                  {hasResult
                    ? `${formatMoney(selectedType.min * numArea)} — ${formatMoney(selectedType.max * numArea)} ₽`
                    : '— ₽'}
                </div>
                <div className="text-white/25 text-xs mt-1.5">
                  {hasResult
                    ? 'Точная цена после выезда замерщика'
                    : 'Введите площадь для расчёта'}
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full text-center bg-[#C17B54] text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-[#a8673f] transition-colors"
              >
                Получить точный расчёт →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

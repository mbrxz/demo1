'use client'

import { useState } from 'react'

const RENOVATION_OPTIONS = [
  'Косметический ремонт',
  'Капитальный ремонт',
  'Ремонт под ключ',
  'Ремонт ванной и санузла',
  'Кухня под ключ',
  'Дизайн-проект',
  'Ещё не определился',
]

const highlights = [
  { label: 'Ответим в течение 15 минут' },
  { label: 'Выезд замерщика — бесплатно' },
  { label: 'Смета в день замера' },
]

const EMPTY_FORM = { name: '', phone: '', area: '', type: '', comment: '' }

const inputClass =
  'w-full bg-white/5 border border-white/12 text-white placeholder-white/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C17B54] transition-colors duration-200'

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          area: form.area,
          repairType: form.type,
          comment: form.comment,
        }),
      })

      if (!res.ok) throw new Error('bad response')

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-[#1A3C2E] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <div className="w-16 h-0.5 bg-[#C17B54] mb-12" />
            <h2
              className="font-black text-white uppercase leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Получить<br />расчёт стоимости
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-12 max-w-sm">
              Оставьте заявку — замерщик приедет в удобное время. Расчёт бесплатно, без обязательств.
            </p>

            <div className="space-y-5">
              {highlights.map(({ label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 bg-[#C17B54] shrink-0" />
                  <span className="text-white/55 text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-white/25 text-xs uppercase tracking-widest mb-2">Телефон</div>
              <a
                href="tel:+74950000000"
                className="font-black text-white text-xl hover:text-[#C17B54] transition-colors duration-200"
              >
                +7 (495) 000-00-00
              </a>
            </div>
          </div>

          <div>
            {status === 'success' ? (
              <div className="border border-white/10 p-10 lg:p-12 text-center">
                <div className="font-black text-[#C17B54] mb-5 leading-none" style={{ fontSize: '3rem' }}>
                  ✓
                </div>
                <h3 className="font-black text-white text-xl uppercase mb-3">Заявка отправлена</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Спасибо! Мы свяжемся с вами<br />в течение 15 минут.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-wide block mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-wide block mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-wide block mb-2">
                      Площадь, м²
                    </label>
                    <input
                      type="number"
                      name="area"
                      min="1"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="Например: 54"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-white/35 text-xs uppercase tracking-wide block mb-2">
                      Тип ремонта
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full bg-[#1A3C2E] border border-white/12 text-white/60 px-4 py-3.5 text-sm focus:outline-none focus:border-[#C17B54] transition-colors duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Выберите тип</option>
                      {RENOVATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#1A3C2E]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-white/35 text-xs uppercase tracking-wide block mb-2">
                    Комментарий
                  </label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Расскажите подробнее о задаче..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[#C17B54] text-xs leading-relaxed">
                    Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#C17B54] text-white font-black uppercase tracking-widest text-xs py-5 hover:bg-[#a8673f] hover:-translate-y-0.5 transition-all duration-200 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'loading' ? 'ОТПРАВЛЯЕМ...' : 'Отправить заявку →'}
                </button>

                <p className="text-white/20 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

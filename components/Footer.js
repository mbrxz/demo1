export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0E2218] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-[3px] h-6 bg-[#C17B54]" />
              <span className="font-black text-lg text-white tracking-tight">РЕНОВА</span>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              Ремонт квартир в Москве под ключ. Фиксированная цена в договоре, гарантия 3 года,
              ежедневные фотоотчёты с объекта.
            </p>
            <div className="flex gap-3">
              {['ВК', 'ТГ', 'ВА'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 text-xs hover:border-[#C17B54]/50 hover:text-[#C17B54] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white/20 text-xs uppercase tracking-widest mb-5">Навигация</div>
            <div className="space-y-3">
              {[
                ['Услуги', '#services'],
                ['Процесс', '#process'],
                ['Галерея', '#gallery'],
                ['Отзывы', '#reviews'],
                ['Контакты', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block text-white/40 text-sm hover:text-white/70 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white/20 text-xs uppercase tracking-widest mb-5">Контакты</div>
            <div className="space-y-3">
              <a
                href="tel:+74950000000"
                className="block font-bold text-white/70 text-sm hover:text-white transition-colors"
              >
                +7 (495) 000-00-00
              </a>
              <a
                href="mailto:info@renova-remont.ru"
                className="block text-white/40 text-sm hover:text-white/60 transition-colors"
              >
                info@renova-remont.ru
              </a>
              <div className="text-white/30 text-sm">Москва и Московская область</div>
              <div className="text-white/25 text-xs pt-1">
                Пн–Пт: 9:00–20:00
                <br />
                Сб: 10:00–17:00
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-white/20 text-xs">
            © {year} Ренова. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

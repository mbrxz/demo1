const steps = [
  {
    number: '01',
    title: 'Заявка',
    desc: 'Оставляете заявку или звоните. Отвечаем в течение 15 минут в рабочее время.',
  },
  {
    number: '02',
    title: 'Замер',
    desc: 'Выезд замерщика в удобное для вас время. Бесплатно, без обязательств.',
  },
  {
    number: '03',
    title: 'Смета',
    desc: 'Фиксируем стоимость работ и материалов. Цена не меняется после подписания договора.',
  },
  {
    number: '04',
    title: 'Ремонт',
    desc: 'Работы по утверждённому плану. Ежедневный фотоотчёт — видите прогресс каждый день.',
  },
  {
    number: '05',
    title: 'Сдача объекта',
    desc: 'Приёмка вместе с вами. Акт выполненных работ и гарантийный паспорт на 3 года.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#1A3C2E] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="w-16 h-0.5 bg-[#C17B54] mb-12" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-16 gap-4 lg:gap-6">
          <h2
            className="font-black text-white uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Как мы<br />работаем
          </h2>
          <p className="text-white/45 text-sm max-w-xs leading-relaxed lg:text-right">
            От первого звонка до ключей — чёткий процесс без неожиданностей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 border-t border-white/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`pt-6 pb-6 pr-4 lg:pt-8 lg:pb-8 lg:pr-6 group ${
                i < steps.length - 1
                  ? 'border-b lg:border-b-0 lg:border-r border-white/10'
                  : ''
              }`}
            >
              <div
                className="font-black leading-none mb-5 transition-colors duration-300 group-hover:text-[#C17B54]"
                style={{
                  fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
                  color: 'rgba(255,255,255,0.25)',
                }}
              >
                {step.number}
              </div>
              <h3 className="font-black text-white text-sm uppercase mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

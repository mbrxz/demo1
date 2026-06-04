const benefits = [
  {
    number: '01',
    title: 'Фиксированная цена',
    desc: 'Стоимость прописана в договоре и не меняется. Никаких «ой, материалы подорожали» после старта работ.',
  },
  {
    number: '02',
    title: 'Ежедневные фотоотчёты',
    desc: 'Фото с объекта каждый день в WhatsApp. Видите прогресс, не выходя из дома.',
  },
  {
    number: '03',
    title: 'Гарантия 3 года',
    desc: 'Устраняем все недостатки за свой счёт. Гарантия закреплена документально.',
  },
  {
    number: '04',
    title: 'Только своя бригада',
    desc: 'Штатные мастера с подтверждённой квалификацией. Никаких субподрядчиков со стороны.',
  },
  {
    number: '05',
    title: 'Оптовые цены на материалы',
    desc: 'Партнёрские скидки от поставщиков полностью передаём клиенту. Без наценки на материалы.',
  },
  {
    number: '06',
    title: 'Личный прораб',
    desc: 'Один контакт с первого дня до сдачи объекта. Всегда на связи, решает вопросы оперативно.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-[#FAFAF8] py-14 lg:py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="w-16 h-0.5 bg-[#C17B54] mb-8 lg:mb-12" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 lg:mb-12 gap-4 lg:gap-6">
          <h2
            className="font-black text-[#1A1A1A] uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Почему клиенты<br />выбирают Ренову
          </h2>
          <p className="text-[#6B6B6B] text-sm max-w-xs leading-relaxed">
            Мы решили главные проблемы, из-за которых люди боятся делать ремонт
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {benefits.map((item) => (
            <div
              key={item.number}
              className="bg-[#FAFAF8] p-6 lg:p-10 group hover:bg-white transition-colors duration-200"
            >
              <div className="font-black text-[#1A1A1A]/8 text-4xl lg:text-5xl mb-4 lg:mb-6 leading-none group-hover:text-[#C17B54]/15 transition-colors duration-200">
                {item.number}
              </div>
              <h3 className="font-black text-[#1A1A1A] text-sm uppercase mb-3 tracking-wide group-hover:text-[#C17B54] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

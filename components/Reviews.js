const reviews = [
  {
    name: 'Марина Волкова',
    type: 'Ремонт под ключ · 58 м²',
    text: 'Делали ремонт в двушке в новостройке. Всё строго по смете, ни одной доплаты. Сдали на неделю раньше срока — чего вообще не ожидала. Теперь рекомендую всем знакомым.',
    rating: 5,
    date: 'Февраль 2025',
  },
  {
    name: 'Андрей Колесников',
    type: 'Капитальный ремонт · 82 м²',
    text: 'Вторичка 1980 года, полная переработка. Прораб был на связи ежедневно, фотоотчёты в WhatsApp. За три месяца не возникло ни одного спорного момента — всё чётко по договору.',
    rating: 5,
    date: 'Декабрь 2024',
  },
  {
    name: 'Светлана Игнатьева',
    type: 'Ванная под ключ · 7 м²',
    text: 'Меняли санузел. Уложились в 17 дней и в бюджет. Плитка легла идеально, без единого зазора. Через полгода всё по-прежнему отлично — ничего не отвалилось, не потекло.',
    rating: 5,
    date: 'Октябрь 2024',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#FAFAF8] py-24 border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="w-16 h-0.5 bg-[#C17B54] mb-12" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <h2
            className="font-black text-[#1A1A1A] uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Что говорят<br />клиенты
          </h2>
          <p className="text-[#6B6B6B] text-sm">98% клиентов рекомендуют нас знакомым</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-[#E8E2DA] p-9 lg:p-10 hover:border-[#C17B54]/40 transition-colors duration-300"
            >
              <div
                className="font-black text-[#C17B54]/30 leading-none mb-6"
                style={{ fontSize: '3.5rem' }}
              >
                &ldquo;
              </div>

              <p className="text-[#1A1A1A] text-[0.975rem] leading-relaxed mb-8">
                {review.text}
              </p>

              <div className="flex gap-0.5 mb-7">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#C17B54] text-base">★</span>
                ))}
              </div>

              <div className="border-t border-[#E8E2DA] pt-5 flex items-end justify-between gap-4">
                <div>
                  <div className="font-black text-[#1A1A1A] text-sm uppercase tracking-wide">
                    {review.name}
                  </div>
                  <div className="text-[#6B6B6B] text-xs mt-1">{review.type}</div>
                </div>
                <div className="text-[#C4BDB5] text-xs shrink-0">{review.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

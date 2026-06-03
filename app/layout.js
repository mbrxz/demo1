import './globals.css'

export const metadata = {
  title: 'Ренова — Ремонт квартир в Москве под ключ',
  description: 'Ремонт квартир в Москве. Фиксированная цена, гарантия 3 года, ежедневные фотоотчёты.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}

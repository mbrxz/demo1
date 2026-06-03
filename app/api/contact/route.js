export async function POST(request) {
  try {
    const { name, phone, area, repairType, comment } = await request.json()

    if (!name?.trim() || !phone?.trim()) {
      return Response.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set')
      return Response.json({ error: 'Ошибка конфигурации сервера' }, { status: 500 })
    }

    const lines = [
      '🏠 <b>Новая заявка с сайта Ренова</b>',
      '',
      `<b>Имя:</b> ${name}`,
      `<b>Телефон:</b> ${phone}`,
      area ? `<b>Площадь:</b> ${area} м²` : null,
      repairType ? `<b>Тип ремонта:</b> ${repairType}` : null,
      comment ? `<b>Комментарий:</b> ${comment}` : null,
    ]
    const text = lines.filter(Boolean).join('\n')

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Telegram API error:', err)
      return Response.json({ error: 'Ошибка отправки в Telegram' }, { status: 502 })
    }

    return Response.json({ ok: true })
  } catch (e) {
    console.error('Contact route error:', e)
    return Response.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 })
  }
}

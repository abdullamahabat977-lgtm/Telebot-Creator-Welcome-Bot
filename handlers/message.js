import { api } from 'sdk';

export default async function (message) {
  if (!message || !message.chat) return;

  const chatId = message.chat.id;
  const text = message.text || '';
  const user = message.from || {};

  const keyboard = {
    keyboard: [
      [{ text: '🎮 لوبې' }, { text: '🤝 ملګرتیا' }],
      [{ text: '👤 زما پروفایل' }, { text: 'ℹ️ زموږ په اړه' }]
    ],
    resize_keyboard: true,
    is_persistent: true
  };

  let replyText;

  if (text === '/start') {
    const firstName = user.first_name || 'ملګري';
    replyText =
      `🌟 سلام ${firstName}!

` +
      '🎉 زموږ بوټ ته ښه راغلاست!

' +
      'دلته کولای شې لوبې وکړې، نوي ملګري پیدا کړې او له بوټ سره په زړه پورې وخت تېر کړې.

' +
      '👇 د پیل لپاره لاندې یو بټن کېکاږه!';
  } else if (text === '🎮 لوبې') {
    replyText =
      '🎮 د لوبو برخې ته ښه راغلاست!

' +
      '🚀 ډېر ژر به دلته په زړه پورې لوبې درته برابرې شي.';
  } else if (text === '🤝 ملګرتیا') {
    replyText =
      '🤝 د ملګرتیا برخې ته ښه راغلاست!

' +
      '🌍 له نویو ملګرو سره د پېژندګلوۍ لپاره چمتو اوسه!';
  } else if (text === '👤 زما پروفایل') {
    replyText =
      '👤 ستا پروفایل

' +
      `🆔 ټیلیګرام ID: ${user.id ?? 'نامعلوم'}
` +
      `👤 نوم: ${user.first_name || 'نامعلوم'}
` +
      `🔗 یوزرنیم: ${user.username ? '@' + user.username : 'نشته'}`;
  } else if (text === 'ℹ️ زموږ په اړه') {
    replyText =
      'ℹ️ زموږ په اړه

' +
      '🌟 دا یو ساده او دوستانه ټیلیګرام بوټ دی.

' +
      '🎮 لوبې، 🤝 ملګرتیا او 🎉 په زړه پورې تجربې!';
  } else {
    replyText =
      '👋 سلام، ملګري!

' +
      '👇 مهرباني وکړه، د لاندې بټنونو څخه یو انتخاب کړه.';
  }

  await api.sendMessage({
    chat_id: chatId,
    text: replyText,
    reply_markup: keyboard
  });
}

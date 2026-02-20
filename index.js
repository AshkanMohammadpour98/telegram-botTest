const TelegramBot = require('node-telegram-bot-api');

const token = '8300969414:AAGixfEcAd3X36KP55ziBB5hj65jdaUBx0Y';

const bot = new TelegramBot(token, { polling: true });

console.log("Bot is running...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "سلام 👋 به ربات من خوش اومدی!");
});

bot.on('message', (msg) => {
  if (msg.text !== '/start') {
    bot.sendMessage(msg.chat.id, `پیامت این بود: ${msg.text}`);
  }
});

// ایجاد منو انلاین
bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "💡 گزینه 1", callback_data: "option1" },
          { text: "💡 گزینه 2", callback_data: "option2" }
        ],
        [
          { text: "🔙 بازگشت", callback_data: "back" }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, "لطفا یک گزینه انتخاب کن:", options);
});
bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;

  if (data === "option1") {
    bot.sendMessage(message.chat.id, "💡 شما گزینه 1 را انتخاب کردید!");
  } else if (data === "option2") {
    bot.sendMessage(message.chat.id, "💡 شما گزینه 2 را انتخاب کردید!");
  } else if (data === "back") {
    bot.sendMessage(message.chat.id, "بازگشت به منوی اصلی...");
  }

  // حذف دکمه بعد از کلیک (اختیاری)
  bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: message.chat.id, message_id: message.message_id });
});



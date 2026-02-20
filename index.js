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





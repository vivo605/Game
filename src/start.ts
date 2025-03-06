import { launchGame } from './game'
import { Telegraf } from 'telegraf'

import dotenv from 'dotenv'

console.time(`Bot started 🚀`)

dotenv.config()

const { BOT_TOKEN } = process.env

if (!BOT_TOKEN) {
  throw 'Добавьте BOT_TOKEN в .env'
}

const bot = new Telegraf(BOT_TOKEN)

launchGame(bot)

bot.launch(() => {
  console.timeEnd('Bot started 🚀')
})
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

type Player = {}

type Store = {
  [id: string]: Player
}

export const launchGame = (bot: Telegraf) => {
  const store: Store = {}

  bot.start(async (ctx) => {
    await ctx.reply('Добрый день это крестики нолики')
  })

  bot.on(message('text'), async (ctx) => {
    const chatId = String(ctx.chat.id)
    const player = store[chatId]

    if (!player) {
      return pcOrPlayer()
    }

    async function pcOrPlayer() {
      await ctx.reply('Вы хотите сыграть с компьютером?')
      const yes_no = ctx.message.text
      if (yes_no === 'Да') {
        await ctx.reply('Вы выбрали ии.')
      }
      else if(yes_no === 'Нет'){
        await ctx.reply('Вы выбрали игрока.')
      }
      else{
        await ctx.reply('Ответьте да или нет.')
        pcOrPlayer()
      }
    }
  })
}
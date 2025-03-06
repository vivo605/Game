import { Telegraf, Markup } from 'telegraf'
import { InlineKeyboardButton } from 'telegraf/typings/core/types/typegram'

export const launchGame = (bot: Telegraf) => {
  bot.start(async (ctx) => {
    await ctx.reply(
      'Добрый день это крестики нолики. Ты играешь за крестики, компьютер за нолики. Твой первый ход, удачи!', 
      Markup.inlineKeyboard(keyboard())
    )
  })
  
  bot.action(/^move:(?<rowIndex>\d)x(?<columnIndex>\d)\|(?<code>[-XO]{9})$/, async (ctx) => {
    await ctx.answerCbQuery()

    const groups = ctx.match.groups!
    const rowIndex = Number(groups['rowIndex']!)
    const columnIndex = Number(groups['columnIndex']!)
    const code = groups['code']!

    const field = code.split('')
    
    field[rowIndex * columnIndex] = 'X'

    console.log({rowIndex, columnIndex, code})

    await ctx.editMessageText('Добрый день это крестики нолики. Ты играешь за крестики, компьютер за нолики. Твой первый ход, удачи!', Markup.inlineKeyboard([
      [{text: 'X', callback_data: `move:${rowIndex}x${columnIndex}|${field.join('')}`}]
    ]))
    // await ctx.editMessageReplyMarkup({
    //   inline_keyboard: [
    //     [{text: 'X', callback_data: `move:${rowIndex}x${columnIndex}|${field.join('')}`}]
    //   ]
    // })
  })
}

function keyboard() {
  const code = '-'.repeat(9)
  const buttons: InlineKeyboardButton[][] = []

  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    const row: InlineKeyboardButton[] = []

    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      row.push({
        text: ` `,
        callback_data: `move:${rowIndex}x${columnIndex}|${code}`,
      })
    }

    buttons.push(row)
  }

  return buttons
}

// move:0x0|${X,O,-,-,-,}`,

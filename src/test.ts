

// import { message } from 'telegraf/filters'

// type Store = {
//   [id: string]: Player;
// }

// type Player = {
//   id: string;
//   name: string;
//   vsComuter: boolean | null;
// };
// bot.on('message', async (ctx) => {
//   const chatId = String(ctx.chat.id);
//   let player = store[chatId];

//   if (!player) {
//     player = { id: chatId, name: ctx.from?.first_name || 'Игрок', vsComuter: null }
//     store[chatId] = player
//   }

//   console.log(player)

  
// })
// async function pcOrPlayer() {
//   await ctx.reply('Вы хотите сыграть с компьютером?')
//   const yes_no = ctx.message.text
//   if (yes_no === 'Да') {
//     await ctx.reply('Вы выбрали ии.')
//   }
//   else if(yes_no === 'Нет'){
//     await ctx.reply('Вы выбрали игрока.')
//   }
//   else{
//     await ctx.reply('Ответьте да или нет.')
//   }
// }

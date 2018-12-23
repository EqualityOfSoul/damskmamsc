const eco = require("discord-economy")
const db = require("quick.db");

exports.run = async (message, args, client, prefix) => {
    try {
      var f = await eco.FetchBalance(message.author.id)
      db.fetch(`userInfo${message.author.id}`)
   let item = args[0]
   if(!item) return message.channel.send(":x: >>No item id given<<")
  if (item === "1") {
    let name = "Nothing"
    message.reply(":ballot_box_with_check: you have used a `Nothing`")
    eco.Transfer(message.author.id, client.user.id, 1)
    db.delete(`userInfo${message.author.id}.items.Nothing`, 'Nothing');
    } else {
  if (item === "2") {
    let name = "The Mystical Nugget"
    message.reply(":ballot_box_with_check: you have used a `The Mystical Nugget`")
    db.delete(`userInfo${message.author.id}.items.The Mystical Nugget`);
        } else {
  if (item === "3") {
    let name = "EXM"
    message.reply(":ballot_box_with_check: you have used a `Lolipop`")
db.delete(`userInfo${message.author.id}.items.Lolipop`)
    } else {
      if (item === "4") { 
    message.reply(":x: >>you can't use a `Sword`<<")                                   
    } else {
    if (item === "EXM") {
    message.reply(":ballot_box_with_check: you have used a `Sword`")
    db.delete(`userInfo${message.author.id}.items.Sword`);
    }
    }
    }
    }
    }
    } catch (e) {
        console.log(`[Error] [Commands] (use) >> ${e}`);
    }
}

exports.help = {
  name: 'use',
  description: 'Buy an item in the >>store.',
  aliases: [],
  usage: '>>buy<ID>',
  example: ['>>buy 1'],
}
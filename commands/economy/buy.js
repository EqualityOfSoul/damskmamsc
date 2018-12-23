const eco = require("discord-economy")
const db = require("quick.db");

exports.run = async (message, args, client, prefix) => {
try {
var f = await eco.FetchBalance(message.author.id)
db.set(`userInfo${message.author.id}`, { User: `${message.author.id}` })
let item = args[0]
if(!item) return message.channel.send(":x: >>No item id given<<")
if(item === "1") {
message.reply(":ballot_box_with_check: you have bought a `Nothing`")
eco.Transfer(message.author.id, client.user.id, 1)
db.push(`userInfo${message.author.id}.items`, 'Nothing');
}else {
if(item === "2") {
message.reply(":ballot_box_with_check: you have bought a `The Mystical Nugget`")
eco.Transfer(message.author.id, client.user.id, 20)
db.push(`userInfo${message.author.id}.items`, 'The Mystical Nugget');
}else {
if(item === "3") {
message.reply(":ballot_box_with_check: you have bought a `Lolipop`")
eco.Transfer(message.author.id, client.user.id, 1)
db.push(`userInfo${message.author.id}.items`, 'Lolipop');
}else {
if(item === "4") { 
if(parseInt(1200) > parseInt(f.balance)) return 
message.channel.send(`:x: >>The the cost of the item you are trying to buy is more than you have<<`)
message.reply(":ballot_box_with_check: you have bought `Sword`")
eco.Transfer(message.author.id, client.user.id, 1200)
db.push(`userInfo${message.author.id}.items`, 'Sword');                                        
}
}
}
}
}catch (e) {
console.log(`[Error] [Commands] (buy) >> ${e}`);
}
}

exports.help = {
name: 'buy',
description: 'Buy an item in the >>store.',
aliases: [],
usage: '>>buy<ID>',
example: ['>>buy 1'],
}

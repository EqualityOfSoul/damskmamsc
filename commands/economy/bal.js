const { RichEmbed } = require("discord.js");
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
try { 
if(!args[0]) {
const oyun = [
`The most expensive item is :money_with_wings: 100,000,000`,
`Do >>jobs to learn how to earn money`,
`>>shop has just been added :D`,
`I eat your money for fun!`];

const random = Math.floor(Math.random()*(oyun.length-0+1)+0);
economy.FetchBalance(message.author.id).then((i) => { //gets balance and defines it as i   
let balico = message.author.displayAvatarURL
let balem = new RichEmbed()
.setColor("36393e")
.setThumbnail(balico)
.setTitle(`▪ ${message.author.username}\n Your account contains 💸 ${i.balance}`)
.setDescription(`▪ this is not gay`)
.setTimestamp()
message.channel.send(balem)
});
return;
}; 
let user = message.mentions.users.first()
if(!user) return message.channel.send(":x: >>No @user mentioned<<")
economy.FetchBalance(user.id).then((f) => { //gets balance and defines it as f
let userico = message.mentions.users.first()
let userbal = new RichEmbed()
.setTitle(`▪ ${userico.username}\n his/her account contains 💸 ${f.balance}`)
.setThumbnail(userico.displayAvatarURL)
.setColor("36393e")
.setTimestamp()
message.channel.send(userbal)
}) 
}catch (e) {
console.log(`[Error] [Commands] (bal) >> ${e}`);
}
}
exports.help = {
name: 'bal',
description: 'Check others and your balance.',
aliases: ['balance', 'money'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
usage: ['>>balance @user', '>>balance'], //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
example: [ '>>balance', '>>bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
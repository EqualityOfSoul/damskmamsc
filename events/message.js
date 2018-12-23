const Discord = require('discord.js');
const db = require("quick.db")
const config = require('../config.json');
const index = require('../index');
const fs = require("fs")


module.exports = async message => {
try {
let messages;
let prefix = await db.fetch(`settings${message.guild.id}.prefix`)
if(!prefix) return db.set(`settings${message.guild.id}.prefix`, '>>')
if(message.author.bot) return;
let commandsCollection = index.help.commandsCollection;
let client = index.help.client;
if(message.author.bot) return;
}
if(message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {
message.channel.send(new Discord.RichEmbed().setColor("36393e").setTitle(`${message.author.username}, **My prefix for this server is ${prefix}**`))
}
if(!message.content.startsWith(prefix)) return;
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
const command = commandsCollection.get(cmd.slice(prefix.length));
if(!command) {
message.channel.send(':x: >>That is not one of my commands if you need help do `>>help`<<')
}else {
command.run(message, args, client, prefix, commandsCollection);
let test = await db.fetch(`${message.guild.id}data.commands`)
db.set(`${message.guild.id}data.commands`, test + 1) //try
//db.add(`${message.guild.id}data.commands`, 1)
}
} catch (e) {
console.log(`[Error] {Message} >>${e}<<`)
}
}

const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {
let max = 2000
let prefix = await db.fetch(`settings${message.guild.id}.prefix`)
let log = await db.fetch(`settings${message.guild.id}.logc`)
let mem = await Math.floor(Math.random() * Math.floor(max));
let welcome = await db.fetch(`settings${message.guild.id}.welcomee`)

let SETEmbed = new Discord.RichEmbed()
.setTitle(`__${message.guild.name}'s__ server settings`)
.setThumbnail(message.guild.AvatarURL)
.setColor("36393e")
.addField("`▪ Setting ▪`", " ▪ Prefix\n +++++\n ▪ Logchannel\n +++++\n Welcome Message\n +++++\n", true)
.addField("`▪ Set to ▪`", `${prefix ? `${prefix}` : '>>'}\n +++++\n ${log ? `${log}` : 'No log channel set'}\n +++++\n ${welcome}\n +++++\n`, true)
.setTimestamp()
.setFooter(`This server takes up ${mem}mb out of 320,412,415mb of my space`)
message.channel.send(SETEmbed)
} catch (e) {
    console.log(`[Error] [Commands] (settings) >> ${e}`);
  }
}

exports.help = {
  name: 'settings',
  description: 'Get your daily.',
  aliases: ['serversettings', 'setting'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>daily', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>daily'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}

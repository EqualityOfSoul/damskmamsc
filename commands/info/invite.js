const Discord = require("discord.js");
const config = require('../../config.json');

exports.run = async (message, args, bot, prefix) => {
    try {
let invite = new Discord.RichEmbed()
.setTitle("---------Invites---------")
.addField('▪ Server Invite', '[MMS - Server](https://discord.gg/wNHPj2D)\n')
.addField('▪ Bot Invite', '[Dragonaut](https://discordapp.com/oauth2/authorize?client_id=409912628710866954&scope=bot&permissions=19456)\n')
.setColor("36393e")
message.channel.send(invite)
      
    } catch (e) {
        console.log(`[Error] [Commands] (invite) >> ${e}`);
    }
}

exports.help = {
  name: 'invite',
  description: 'Buy A Item.',
  aliases: ['server', 'botinvite'],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}
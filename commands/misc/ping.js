const Discord = require("discord.js");
const fs = require('fs');

exports.run = async (message, args, client, prefix) => {
  try {
    
    let msgping1 = new Date();

    let clientping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let emojii2 = client.emojis.find(e => e.name === `dnd31412`);
    let pingembed = new Discord.RichEmbed()
        .setColor("36393e")
        .setThumbnail(client.user.displayAvatarURL)
        .addField('▪ API Ping', Math.floor(client.ping) + 'ms')
        .addField('▪ Bot Ping', Math.floor(clientping) + 'ms')
        .addField('▪ Message Ping', '~' + Math.round(msgping2) + 'ms')
        .addField("▪ Status", `${emojii2} Do Not Disturb`)
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);

        
    return message.channel.send(pingembed);
    
  } catch (e) {
    console.log(`[Error] [Commands] (ping) >> ${e}`);
  }
}

exports.help = {
  name: 'ping',
  description: 'Shows You How Fast The Response Is.',
  aliases: [],
  usage: 'usage',
  example: [ '.ping', '.Ping' ]
}
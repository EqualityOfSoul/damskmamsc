const Discord = require('discord.js');

exports.run = async (message, args, client, prefix) => {
  try {
 let uembed = new Discord.RichEmbed()
 .setColor("36393e")
 .setTitle("---------Updates---------")
 .addField("▪ Patch", "update on security no more people getting around it")
 .addField("▪ Setlog", "added >>setlog")
 .addField("▪ Setprefix", "added >>setprefix")
 .addField("▪ Database", "the bot moved to sqlite database")
 .addField("▪ Help", "update on >>help")
 .addField("▪ Emojis", "update on the emojis used so that it looks better for mobile users")
 .addField("▪ Patch", "update on security no more people getting around it")
 .setFooter("As of 12/15/18")
 message.channel.send(uembed)
} catch (e) {
    console.log(`[Error] [Commands] (update) >> ${e}`);
}
}

exports.help = {
  name: 'update',
  description: 'Get info about tokken.',
  aliases: ['new'],
  usage: 'botinfo',
  example: ['botinfo']
}
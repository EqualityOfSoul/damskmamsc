const Discord = require("discord.js");
const moment = require("moment")


exports.run = async (message, args, client, prefix) => {
  try {
    let emojii = client.emojis.find(e => e.name === `discordmem321`);
 let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
  let member = message.author;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server Created • ${day}.${month}.${year}`)
   .setColor("36393e")
   .setThumbnail(sicon)
   .addField("▪ :id: Guild ID", message.guild.id, true)
   .addField("▪ Guild name", message.guild.name, true)
   .addField("▪ :crown:Guild owner", message.guild.owner.user.tag, true)
   .addField("▪ Guild region", message.guild.region, true)
   .addField("▪ Guild channels", message.guild.channels.size, true)
   .addField("▪ :person_frowning: Guild members", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("▪ :robot: Guild bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("▪ Guild online users", online.size, true)
   .addField(`▪ ${emojii} You joined the guild at`, `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY')}`)
   .addField("▪ Guild roles", message.guild.roles.size, true);
   message.channel.send(serverembed);
} catch (e) {
    console.log(`[Error] [Commands] (serverinfo) >> ${e}`);
}
}

exports.help = {
  name: 'serverinfo',
  description: 'Basic Info About The Server.',
  aliases: [],
  usage: '.serverinfo',
  example: [ '.serverinfo']
}

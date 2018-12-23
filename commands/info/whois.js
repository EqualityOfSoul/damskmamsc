const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment");
let cert;

exports.run = async (message, args, client, prefix) => {
  try {
  let user;
  let emojii1 = client.emojis.find(e => e.name === `dnd31412`);
  let emojii2 = client.emojis.find(e => e.name === `online4134`);
  let emojii3 = client.emojis.find(e => e.name === `offline3123`);
  let emojii4 = client.emojis.find(e => e.name === `idle3421414`);
  let emojii5 = client.emojis.find(e => e.name === `streaming99134`);
	// If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.


if (message.mentions.users.first()) {
  user = message.mentions.users.first();
} else {
    user = message.author;
}
    const member = message.guild.member(user);
	  if (user.presence.status == 'dnd') {cert = ':heart: Do not disturb'
} else {
    if (user.presence.status == 'online') {cert = ':green_heart: Online'
} else {
    if (user.presence.status == 'offline') {cert = ':grey_question: Offline'
} else {
      if (user.presence.status == 'idle') {cert = ':yellow_heart: Idle'
} else {
  if (user.presence.status == 'streaming') {cert = ':green_heart: Streaming'}
}
}
}  
}
	//Discord rich embed
    const embed = new Discord.RichEmbed()
		.setColor('36393e')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("\n▪ ID", `${user.id}`)
		.addField("\n▪ Nickname", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
    .addField("\n▪ Created At", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY')}`)
		.addField("\n▪ Bot", `${user.bot}`)
		.addField("\n▪ Status", cert)
		.addField("\n▪ Game", `${user.presence.game ? user.presence.game.name : 'No game is being played'}`)
		.addField("\n▪ Roles", member.roles.map(roles => `${roles.name}`).join(', ') )
    .setTimestamp()
     message.channel.send({embed});
  } catch (e) {
    console.log(`[Error] [Commands] (whois) >> ${e}`);
  }
}

exports.help = {
  name: 'whois',
  description: 'Shows You Info On The User That You Mentioned',
  aliases: [],
  usage: '>>whois [optional @User]',
  example: [ '>>whois', '>>whois @Mike#1234' ]
}
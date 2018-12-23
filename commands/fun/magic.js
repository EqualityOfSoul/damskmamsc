const { get } = require("superagent");

exports.run = async (message, args, client, prefix) => {
  let user = message.mentions.users.first()
  if(!user) user = message.author;//hmm
 const m = await message.reply('*Please wait...*');
  message.channel.startTyping();
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}`);
  return message.channel.send({
      embed: {
        "title": `**I did magic with the picture of ${user.username} :D**`,
        "url": body.message,
        "color": 3553598,
        "image": {
          "url": body.message
        },
        "timestamp" : message.createdAt
      }
  }).then(() => {m.delete(); message.channel.stopTyping();})
}

exports.help = {
  name: 'magic',
  description: 'Does things',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>magic @user or just >>magic', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>magic @Spikey', '>>magic'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}   
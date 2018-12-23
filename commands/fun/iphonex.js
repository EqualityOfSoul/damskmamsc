const { get } = require("superagent");
exports.run = async (message, args, client, prefix) => {
 var user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  const m = await message.reply('*Please wait...*');
  message.channel.startTyping();
    const { body } = await get(`https://nekobot.xyz/api/imagegen?type=iphonex&url=${user.displayAvatarURL}`);
  return message.channel.send({
      embed: {
        "title": `Iphonex photo of ${user.username}`,
        "url": body.message,
        "color": 3553598,
        "image": {
          "url": body.message
        },
        "timestamp" : message.createdAt
      }
    }).then(() => {m.delete(); message.channel.stopTyping();});
}
exports.help = {
  name: 'iphonex',
  description: 'Does things',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>iphonex @user or just >>iphonex', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>iphonex @Spikey', '>>iphonex'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}   
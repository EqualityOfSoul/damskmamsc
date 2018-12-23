const { get } = require("superagent");
const Discord = require('discord.js');

exports.run = async (message, args, client, prefix) => {
  const { body } = await get('https://nekos.life/api/v2/img/avatar');
  let image = body.url
  const embed = new Discord.RichEmbed()
      .setColor("36393e")
      .setImage(image)
      .setTitle("Random avatar photo")
      .setTimestamp()
      message.channel.send({embed})
}
exports.help = {
  name: 'ravatar',
  description: 'Does things',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>ravatar', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>ravatar'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}  
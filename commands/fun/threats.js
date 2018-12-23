const { get } = require("superagent")
const { RichEmbed } = require("discord.js")
exports.run = async (message, args, client, prefix) => {
var user = message.mentions.users.first() || client.users.get(args[0]);
if(!user) user = message.author;
const { body } = await get(`https://nekobot.xyz/api/imagegen?type=threats&url=${user.displayAvatarURL}`);
let image = body.message
const embed = new RichEmbed()
.setColor("36393e")
.setImage(image)
.setTitle("**The 3 biggest threats to society**")
.setTimestamp()
message.channel.send({embed})
  
}

exports.help = {
  name: 'threats',
  description: 'Does things',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>threats @user or just >>threats', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>threats @user or just >>threats'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}  
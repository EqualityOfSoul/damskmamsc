const Discord = require("discord.js");
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {
let jobsdesc = new Discord.RichEmbed()
.setTitle('---------Jobs---------')
.addField('▪ :one: Work', 'This job is just basic work nothing illegal so no risk')
.addField('▪ :two: Crime', 'This job is different from most work this one is highly risky but the reward is usually worth it')
.addField('▪ :three: Parents', 'This one is a little risky but has a benefit usually your parents are nice :smile:')
.setColor('36393e')
.setFooter("These are in beta btw")
message.channel.send(jobsdesc)
  } catch (e) {
    console.log(`[Error] [Commands] (jobs) >> ${e}`);
  }
}

exports.help = {
  name: 'jobs',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}                                                                                     
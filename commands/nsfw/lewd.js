const Discord = require("discord.js");
const economy = require("discord-economy")
const superagent = require("superagent")

exports.run = async (message, args, client, prefix) => {
  try {  
    if (!message.channel.nsfw) return message.channel.send(':x: >>Please move to a NSFW channel<<')
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`36393e`)
  message.channel.send(lewdembed);
    })
            
    
        
  } catch (e) {
    console.log(`[Error] [Commands] (lewd) >> ${e}`);
  }
}

exports.help = {
  name: 'lewd',
  description: 'Check your balance.',
  aliases: ['dirty'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
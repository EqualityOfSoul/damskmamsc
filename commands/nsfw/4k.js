const Discord = require("discord.js");
const economy = require("discord-economy")
const randomPuppy = require("random-puppy")

exports.run = async (message, args, client, prefix) => {
  try {  
     if (!message.channel.nsfw) return message.channel.send(":x: >>Please move to a NSFW channel<<");

    var subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor("36393e")
                .setImage(url);
            message.channel.send({
                embed
            });
        })
    
        
  } catch (e) {
    console.log(`[Error] [Commands] (bal) >> ${e}`);
  }
}

exports.help = {
  name: '4k',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
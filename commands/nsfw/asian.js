const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js");

exports.run = async (message, args, client, prefix) => {
  try {
    
    let nsfwthing = "https://i.imgur.com/oe4iK5i.gif"
  
    if (!message.channel.nsfw) return message.channel.send(":x: >>Please move to a NSFW channel<<")

    var subreddits = [
        'AsianHotties',
        'juicyasians',
        'asianbabes'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`asian.jpg`, r.body)
              let blah = new Discord.RichEmbed()
              .setColor("36393e")
              .setImage(url)
                message.channel.send(blah)
                fs.unlink(`./asian.jpg`)
            })
        })
      
  } catch (e) {
    console.log(`[Error] [Commands] (nsfwasain)`);
  }
}

exports.help = {
  name: 'asian',
  description: 'The Example For Making Commands.',
  aliases: ['chinese'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.example', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.example', '.exm' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
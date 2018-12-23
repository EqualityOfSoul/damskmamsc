const Discord = require("discord.js")
const db = require("discord-leveling")

exports.run = async (message, args, client, prefix) => {
  try {
    
  if(!args[0]) {
    
   db.Fetch(message.author.id).then((l) => {
     let aulvl = new Discord.RichEmbed()
     .setTitle(`▪ Your level is ${l.level} with ${l.xp} xp`)
     .setDescription(`${message.author.username} can earn more xp and levels by talking in the server more`)
     .setColor("36393e")
     .setThumbnail(message.author.displayAvatarURL)
     .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
     message.channel.send(aulvl) 
   })
      return;
    }; 
    if (args[0] === "<@409912628710866954>") {
      message.channel.send(`${client.user.username} does not earn levels :crying_cat_face:`)
    } else {
    let yyu = (message.mentions.users.first().username)
    
 db.Fetch(message.mentions.users.first().id).then((l) => {
     let ulvl = new Discord.RichEmbed()
     .setTitle(`${yyu}'s level is ${l.level} with ${l.xp} xp`)
     .setDescription(`${yyu} can earn more xp and levels by talking in the server more`)
     .setColor("36393e")
     .setThumbnail(message.mentions.users.first().displayAvatarURL)
     .setTimestamp()
     .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
     message.channel.send(ulvl)
    })
    }
  } catch (e) {
    console.log(`[Error] [Commands] (level) >> ${e}`);
  }
                                                          
  }
exports.help = {
  name: 'level',
  description: 'Check your balance.',
  aliases: ['rank', 'lvl'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
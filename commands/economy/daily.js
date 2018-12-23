const Discord = require("discord.js");
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {
             economy.Daily(message.author.id).then(l => {
//l.updated tells you if the user already claimed his/her daily yes or no.
                if (l.updated) {

          let balico = message.author.displayAvatarURL
          let balem = new Discord.RichEmbed()
          .setColor("36393e")
          .setTitle(`**:ballot_box_with_check: ${message.author.username} Daily claimed**`)
          .setDescription("▪ The bank has added :money_with_wings: 200 to your account")
          .setTimestamp()
          .setFooter(`**Daily claimed by ${message.author.username} **`, message.author.displayAvatarURL)
          message.channel.send(balem)

                } else {
                message.channel.send(`:x: >>You have already claimed your daily reward try again in ${l.timetowait}<<`)
                }
            })
  } catch (e) {
    console.log(`[Error] [Commands] (daily) >> ${e}`);
  }
}

exports.help = {
  name: 'daily',
  description: 'Get your daily.',
  aliases: ['dailycheck'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>daily', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>daily'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}

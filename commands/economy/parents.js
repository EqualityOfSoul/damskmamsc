const Discord = require("discord.js");
const eco = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {
    var user = message.author
    var output = await eco.Work(user.id, {
      failurerate: 60,
      money: Math.floor(Math.random() * 2000)
    })
    let crimelose = new Discord.RichEmbed()
.setTitle(`:x: Your parents were not so nice and even took your daily allowance away!!`)
.setColor('36393e')
.setFooter('The jobs are in beta so they can change randomly')
    if (output.earned == 0) return message.channel.send(crimelose)
let crimewin = new Discord.RichEmbed()
.setTitle(`:ballot_box_with_check: Your parents were nice and payed you **${output.earned}**`)
.setColor('36393e')
.setThumbnail('https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Fparentwork.jpg?1543034354246')
.setFooter('The jobs are in beta so they can change randomly')
message.channel.send(crimewin)
  } catch (e) {
    console.log(`[Error] [Commands] (parents) >> ${e}`);
  }
}

exports.help = {
  name: 'parents',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}                                                                                     
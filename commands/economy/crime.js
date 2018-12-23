var { RichEmbed } = require("discord.js");
var eco = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {
    var user = message.author
    var output = await eco.Work(user.id, {
      failurerate: 50,
      money: Math.floor(Math.random() * 5000),
      jobs: ['House', 'Factory', 'Bank', 'Store', 'Museum']
    
    })
    let crimelose = new RichEmbed()
.setTitle(`:x: The police cought on to you trying to rob the **${output.job}** you better run!!`)
.setColor('36393e')
.setFooter('The jobs are in beta so they can change randomly')
    if (output.earned == 0) return message.channel.send(crimelose)
let crimewin = new RichEmbed()
.setTitle(`:ballot_box_with_check: congrats you earned **${output.earned}** stealing from the **${output.job}**`)
.setColor('36393e')
.setThumbnail('https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Frobberwork.jpg?1543034535977')
.setFooter('The jobs are in beta so they can change randomly')
message.channel.send(crimewin)
  } catch (e) {
    console.log(`[Error] [Commands] (crime) >> ${e}`);
  }
}

exports.help = {
  name: 'crime',
  description: 'A job that you requires you to steal.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>jobs', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>jobs'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}                                                                                     
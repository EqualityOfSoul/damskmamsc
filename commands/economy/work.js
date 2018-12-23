const Discord = require("discord.js");
const eco = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {
    var user = message.author
    var output = await eco.Work(user.id, {
      failurerate: 20,
      money: Math.floor(Math.random() * 500),
      jobs: ['Store', 'Bank', 'DailyPress', 'PostExpress', 'WorldTradeCenter', 'TonysInternet', 'ClarksPower', 'BoostMobile', 'CricketMobile']
    })
    let worklose = new Discord.RichEmbed()
.setTitle(`:x: The job **${output.job}** was shut down leaving you jobless`)
.setColor('36393e')
.setFooter('The jobs are in beta so they can change randomly')
    if (output.earned == 0) return message.channel.send(worklose)
let workwin = new Discord.RichEmbed()
.setTitle(`:ballot_box_with_check: congrats you earned **${output.earned}** working at the **${output.job}**`)
.setColor('36393e')
.setThumbnail('https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Fworkname.jpg?1543034329088')
.setFooter('The jobs are in beta so they can change randomly')
message.channel.send(workwin)
  } catch (e) {
    console.log(`[Error] [Commands] (work) >> ${e}`);
  }
}

exports.help = {
  name: 'work',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}                                                                                     
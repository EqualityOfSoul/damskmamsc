const Discord = require("discord.js");

exports.run = async (message, args, client, prefix) => {
  try {
  let suggestion =  args.join(" ");
    if(!suggestion) return message.channel.send(":x: >>Please provide a suggestion<<")


    let suggeEmbed = new Discord.RichEmbed()
    .setDescription("▪ Suggestion")
    .setColor("36393e")
    .addField("▪ Suggestion By", `User: <@${message.author.id}> with ID : ${message.author.id}`, true)
    .addField("▪ In Server", message.guild, true)
    .addField("▪ Time", message.createdAt, true)
    .addField("▪ Suggestion", suggestion, true);

    client.guilds.get("480541156673978368").channels.get("480787155636191262").send(suggeEmbed);
    message.channel.send("▪ Suggestion Sent 👍👍✔");
  } catch (e) {
    console.log(`[Error] [Commands] (suggestion) >> ${e}`);
  }
}

exports.help = {
  name: 'suggestion',
  description: 'Send Me A Message About How The Bot Sucks XD jkjk.',
  aliases: ['suggest'],
  usage: '.suggestion <Your suggestion>',
  example: [ '.suggestion The bot suck!']
}

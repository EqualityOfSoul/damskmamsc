const Discord = require("discord.js");
const config = require('../../config.json');
const superagent = require("superagent");

exports.run = async (message, args, bot, prefix) => {
  try { 
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send(":x: >>No @user mentioned<<");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("▪ **Owo you got a hug**")
    .setColor("36393e")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("36393e")
    .setTimestamp()

    message.channel.send(hugEmbed)
  }catch (e) {
    console.log(`[Error] [Commands] (bal) >> ${e}`);
  }
}

exports.help = {
  name: 'hug',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}

const Discord = require("discord.js");
const config = require('../../config.json');
const superagent = require("superagent");

exports.run = async (message, args, bot, prefix) => {
  try { 
    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send(":x: >>No @user mentioned<<");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let slapEmbed = new Discord.RichEmbed()
    .setTitle("▪ **SLAP**")
    .setColor("36393e")
    .setDescription(`**${message.author.username}** SLAPED **${message.mentions.users.first().username}** that hurt didn't it?!`)
    .setImage(body.url)
    .setColor("36393e")
    .setTimestamp()

    message.channel.send(slapEmbed)
  }catch (e) {
    console.log(`[Error] [Commands] (slap) >> ${e}`);
  }
}

exports.help = {
  name: 'slap',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}

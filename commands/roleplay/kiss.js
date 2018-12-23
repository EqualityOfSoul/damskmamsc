const Discord = require("discord.js");
const config = require('../../config.json');
const superagent = require("superagent");

exports.run = async (message, args, client, prefix) => {
  try { 
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);
    let user = (message.mentions.users.first())
    if(!user) return message.channel.send(":x: >>No @user mentioned<<")

    const patEmb = new Discord.RichEmbed()
        .setTitle("▪ Owo you got kissed")
        .setDescription(`**${message.author.username}** kissed **${user.username}**`)
        .setColor("36393e")
        .setImage(body.url)
    .setTimestamp();
    const sadEmb = new Discord.RichEmbed()
        .setTitle("▪ You got kissed")
        .setDescription(`${message.author.username} kissed ${message.author.username}... oh no that is sad`)
        .setColor("36393e")
        .setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
   if(message.mentions.users.first() === message.author) {
        message.channel.send(sadEmb)
        return;
    }

    if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
        msg.delete(3000)
    });
    message.channel.send(patEmb)
  }catch (e) {
    console.log(`[Error] [Commands] (pat) >> ${e}`);
  }
}

exports.help = {
  name: 'kiss',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}
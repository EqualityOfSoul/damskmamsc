const Discord = require("discord.js");
const config = require('../../config.json');
const superagent = require("superagent");

exports.run = async (message, args, client, prefix) => {
  try { 
    const images = ["https://i.imgur.com/2lacG7l.gif", "https://i.imgur.com/UWbKpx8.gif", "https://i.imgur.com/LUypjw3.gif", "https://i.pinimg.com/originals/c0/3f/58/c03f5817acde4b1c168d31ffe02c522e.gif", "https://media1.tenor.com/images/2b2f9c5d046ea2cdaca41dfdc4356eea/tenor.gif?itemid=7552114", ];
    const rand = Math.floor(Math.random() * images.length);
    const randomImage = images[rand];
    let user = (message.mentions.users.first())
    if(!user) return message.channel.send(":x: >>No @user mentioned<<")
    
    const patEmb = new Discord.RichEmbed()
        .setTitle(`▪ You got patted .....`)
        .setDescription(`**${message.author.username}** patted **${user.username}** YaY T_T`)
        .setColor("36393e")
        .setImage(randomImage)
        .setTimestamp();
    const sadEmb = new Discord.RichEmbed()
        .setTitle(`▪ You got patted Owo`)
        .setDescription(`**${message.author.username}** patted **${message.author.username}**.... thats sad`)
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
  name: 'pat',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}

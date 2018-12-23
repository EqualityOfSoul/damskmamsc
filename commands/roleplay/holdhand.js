const Discord = require("discord.js");
const config = require('../../config.json');

exports.run = async (message, args, bot, prefix) => {
    try {
      const images = ["https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijiZ26w7TeAhWBg-AKHfZyABYQjRx6BAgBEAU&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Flove-holding-hands-ZaaGHJGe4QJyM&psig=AOvVaw1iBCKwwVg4Wkc3Dfmj2sSl&ust=1541207486963037"];
    const rand = Math.floor(Math.random() * images.length);
    const randomImage = images[rand];
    let user = (message.mentions.users.first().username)
    if(!user) return message.channel.send(":x: >>No @user mentioned<<")
    const patEmb = new Discord.RichEmbed()
        .setTitle("▪ Uhm this is hot")
        .setDescription(`**${message.author.username}** started holding **${user}**'s hand`)
        .setColor("36393e")
        .setImage(randomImage);
    const sadEmb = new Discord.RichEmbed()
        .setTitle("▪ Uhm this is sad")
        .setDescription(`${message.author.username} you started holding ${message.author.username}... oh no that is sad`)
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
    console.log(`[Error] [Commands] (holdhand) >> ${e}`);
  }
}

exports.help = {
  name: 'holdhand',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}
const Discord = require("discord.js");
const botconfig = require("../../config.json")   
let ownerID = botconfig.ownerID

exports.run = async (message, args, client, prefix) => {
try{  
    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");
    let string = '';

    client.guilds.forEach(guild => {
        string += '***▪ Server Name:*** ' + guild.name + '\n' + '***▪ Server ID:***` ' + guild.id + ' ` ' + '\n\n';

    })

    let botembed = new Discord.RichEmbed()
        .setColor("36393e")
        .addField("▪ The servers are ▪  ", string)
        .setTimestamp()
    message.channel.send(botembed);
    } catch (e) {
        console.log(`[Error] [Commands] (avatar) >> ${e}`);
    }
}

exports.help = {
  name: 'servers',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID>',
  example: ['.buy<ID>'],
}
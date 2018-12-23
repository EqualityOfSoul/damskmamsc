const Discord = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");    

exports.run = async (message, args, client, prefix) => {
try{  
 const {body} = await superagent
    .get(`https://api-to.get-a.life/meme`);
  let memebed = new Discord.RichEmbed()
  .setTitle("▪ Memes butter my booty")
  .setColor("36393e")
  .setImage(body.url)
  .setTimestamp()
  message.channel.send(memebed)
    } catch (e) {
        console.log(`[Error] [Commands] (avatar) >> ${e}`);
    }
}

exports.help = {
  name: 'meme',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID>',
  example: ['.buy<ID>'],
}
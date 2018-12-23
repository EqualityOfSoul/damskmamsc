const Discord = require("discord.js");
const config = require('../../config.json');
const superagent = require("superagent");

exports.run = async (message, args, client, prefix) => {
  try {

let user = message.mentions.users.first()
if(!user) return message.channel.send(":x: >>No @user mentioned<<")
let watcher = message.author
//if (user === watcher) return message.channel.send(":x: >>You can't watch yourself<<")
    let watched = new Discord.RichEmbed()
    .setColor("36393e")
    .setThumbnail("https://media1.tenor.com/images/1c1aaadc154adec21451c9460a970721/tenor.gif?itemid=8184662")
    .setTitle(`▪ **${watcher.username}** is watching you in **${message.guild}** Owo......`)
    .setTimestamp()
    client.fetchUser(user.id)
    .then(user => {user.send(watched)})
    
    


//    var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
  //   message.channel.send("123")
    // .catch(console.error); // add error handling here
     //}, 1 * 1000); 

  }catch (e) {
    console.log(`[Error] [Commands] (stalk) >> ${e}`);
  }
}
exports.help = {
  name: 'stalk',
  description: 'Check your balance.',
  aliases: ['watchuser'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}

const Discord = require("discord.js");
const db = require('quick.db')


exports.run = async (message, client, prefix) => {  
  
  try {
  
  if (message.author.id != '261167188193443841') return;
  
    } catch (e) {
    console.log(`[Error] [Commands] (removeitem) >> ${e}`);
  }
}

exports.help = {
  name: 'removeitem',
  description: 'Check your balance.',
  aliases: ['dev', 'exe'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
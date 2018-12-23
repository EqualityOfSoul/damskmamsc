const db = require("quick.db")
const fs = require("fs");
var ms = require('parse-ms');

exports.run = async (message, args, client, prefix) => {
  try {

    let cooldown = 8.64e+7,
    amount = 1
  
  let lastrep = await db.fetch(`lastRep_${message.author.id}`)
  if (lastrep !== null && cooldown - (Date.now() - lastrep) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastrep))
        message.channel.send(`**${message.author.username}**, sucks\n**You'll be able give reputation point again in ${timeObj.hours} hours, ${timeObj.minutes} minutes and ${timeObj.seconds} seconds**`)
    
  } else {
    if(!args[0]) return message.channel.send(`**${message.author.username}**, **You can rep someone now**,\n**You need to mention user to be given reputation!**`);
    let user = message.mentions.users.first() || client.users.get(args[0]);
    if (user.bot) return message.channel.send(`**${message.author.username}**, **You cannot rep a bot sadly or i would win**`);
    if (user.id == message.author.id) return message.channel.send(`**${message.author.username}**, **You cannot rep yourself idiot!**`);
      
      db.set(`lastRep_${message.author.id}`, Date.now());        
      db.add(`rep_${user.id}`, 1)
        message.channel.send(`**🎖️ | Hey <@${user.id}>, You got reputation points from ${message.author.tag}**`);
  }
  }catch (e) {
    console.log(`[Error] [Commands] (rep) >> ${e}`);
  }
} // YOU FORGOT } RIGHT HERE K NOB?
exports.help = {
  name: 'rep',
  description: 'Give rep to an user.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>rep @user', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '>>rep @user' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
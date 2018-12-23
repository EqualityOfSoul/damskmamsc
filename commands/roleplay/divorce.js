const {RichEmbed} = require("discord.js")
const db = require("quick.db")
const eco = require("discord-economy")
const lvl = require("discord-leveling")


exports.run = async (message, args, client, prefix) => {
  try {
    
  var user = message.mentions.users.first();
  if(!user) return message.channel.send('Mention the user you want to divorce with');
  
  let married = await db.fetch(`married_${message.author.id}-${user.id}`);
  if(!married) return message.channel.send('You aren\'t married with him, Why don\'t you find that special someone?');
  let marrys = await db.fetch(`married_${user.id}-${message.author.id}`);
  if(!marrys) return message.channel.send('You aren\'t married with him, Why don\'t you find that special someone?');
  let m = await message.reply(`Are you sure you want to divorce with **${user.username}**? Type \`yes\` to confirm or \`no\` to cancel.`) 
  const hit = await client.util.verifyText(message.channel, message.author);
  if(hit) {
    message.channel.send(':ballot_box_with_check: Now you\'re single. That\'s nice I guess.') 
    db.delete(`marry_${message.author.id}`) 
    db.delete(`married_${message.author.id}-${user.id}`)
    db.delete(`married_${user.id}-${message.author.id}`) 
    db.delete(`marry_${user.id}`)
  } else {
    message.channel.send(`Okay ${message.author}, You are still together with **${user.username}**.`);
  } 
  }catch (e) {
    console.log(`[Error] [Commands] (divorce) >> ${e}`);
  }
}
exports.help = {
  name: 'divorce',
  description: 'Check your balance.',
  aliases: ['breakup', 'break-up'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
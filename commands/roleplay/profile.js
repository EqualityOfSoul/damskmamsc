const {RichEmbed} = require("discord.js")
const db = require("quick.db")
const eco = require("discord-economy")
const lvl = require("discord-leveling")


exports.run = async (message, args, client, prefix) => {
  try {
    
  var user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  if(user.bot) return message.channel.send('Bots do not have profile!');
  
  const {level, xp} = await lvl.Fetch(user.id);
  const {balance} = await eco.FetchBalance(user.id);
  const rep = await db.fetch(`rep_${user.id}`);
  const note = await db.fetch(`note_${user.id}`);
  const badges = await db.fetch(`badge_${user.id}`);
  const marry = await db.fetch(`marry_${user.id}`);
  if (user.id === "261167188193443841") {
  var embed = new RichEmbed() 
  .setColor("36393e")
  .setThumbnail(user.displayAvatarURL)
  .setAuthor(`${user.username}'s Profile`, user.displayAvatarURL) 
  .setDescription(`${note ? `${note}` : 'No description set.'}`) 
  .addField(`▪ Amount of money`, `:money_with_wings: ${balance}`)
  .addField('▪ ⚡ Level', `${level} (XP: ${xp})`)
  .addField('▪ 🎖️ Reputation', `${rep ? `${rep}` : '0'}`)
  .addField('▪ ♥ Married with', `${marry ?  `${marry}` : 'Nobody'}`) 
  .addField('▪ 👝 Badges', 'Admin:tools:, MessageLover:envelope:, MoneyLord:moneybag::moneybag:')
  .setTimestamp();
  message.channel.send(embed);
    
  } else {
    var embed = new RichEmbed() 
  .setColor("36393e")
  .setThumbnail(user.displayAvatarURL)
  .setAuthor(`${user.username}'s Profile`, user.displayAvatarURL) 
  .setDescription(`${note ? `${note}` : 'No description set.'}`) 
  .addField(`▪ Amount of money`, `:money_with_wings: ${balance}`)
  .addField('▪ ⚡ Level', `${level} (XP: ${xp})`)
  .addField('▪ 🎖️ Reputation', `${rep ? `${rep}` : '0'}`)
  .addField('▪ ♥ Married with', `${marry ?  `${marry}` : 'Nobody'}`) 
  .addField('▪ 👝 Badges', `${badges ? `${badges}` : 'None.'}`)
  .setTimestamp();
  message.channel.send(embed);
    
    }
  }catch (e) {
    console.log(`[Error] [Commands] (profile) >> ${e}`);
  }
}
exports.help = {
  name: 'profile',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
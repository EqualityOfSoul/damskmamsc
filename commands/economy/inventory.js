const { RichEmbed } = require("discord.js");
const db = require("quick.db")
exports.run = async (message, args, client, prefix) => {
  try {
    let users = message.mentions.users.first()
    if (!users) {
    const badges = await db.fetch(`userInfo${message.author.id}.items`);
    let bla = new RichEmbed()
    .setTitle(`Your inventory`)
    .addField('▪ 👝 Items', `${badges ? `${badges}` : 'Nothing owned.'}`)
    message.channel.send(bla)
    
    } else {
    const badges = await db.fetch(`userInfo${users.id}.items`);
    let bla = new RichEmbed()
    .setTitle(`${users.username}'s inventory`)
    .addField('▪ 👝 Items', `${badges ? `${badges}` : 'Nothing owned.'}`)
    message.channel.send(bla)
    
    }
    
  } catch (e) {
    console.log(`[Error] [Commands] (inventory) >> ${e}`);
  }
}

exports.help = {
  name: 'inventory',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}          
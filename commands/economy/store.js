const { RichEmbed } = require("discord.js");
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  try {    
        let storere = message.author.displayAvatarURL
        let storeembed = new RichEmbed()
        .setTitle("**Test** `.buy<id>`")
        .setThumbnail("https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Fopenstore.png?1538800584182")
        .setColor("36393e")
        .addField("▪ Nothing! `<ID> = 1`", 'Buy **Nothing!** for $200 now')
        .addField("▪ The Mystical Nugget `<ID> = 2`", 'Buy **The Mystical Nugget** for $10 now')
        .addField("▪ Lolipop `<ID> = 3`", 'Buy **Lolipop** for $4 now')
        .addField("▪ Sword `<ID> = 4`", 'Buy **Sword** for $120 now')
        .addField("▪ Rubber Ducky `<ID> = 5`", 'Buy **Rubber Ducky** for $90 now')
        .addField("▪ RiceBall `<ID> = 6`", 'Buy **Riceball** for $45 now')
        .setFooter(`Do >>info <ID> to see information on what the item does`)
        
        message.channel.send(storeembed)
        

     

  } catch (e) {
    console.log(`[Error] [Commands] (store) >> ${e}`);
  }
}

exports.help = {
  name: 'store',
  description: 'Buy Item 2.',
  aliases: ['shop'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>store', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '>>store', '>>shop' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}    
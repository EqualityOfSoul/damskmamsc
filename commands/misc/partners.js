const Discord = require("discord.js");

exports.run = async (message, args, client, prefix) => {
  try {    
        let storere = message.author.displayAvatarURL
        let storeembed = new Discord.RichEmbed()
        .setTitle("**Dragonauts Partners**")
        .setThumbnail("https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Fpartners.png?1539470957543")
        .setColor("36393e")
        .setDescription("Servers we are partnered with go ahead and give them a look ")
        .addField("▪ ## Productions: Conflict ~ A Server Developing A Game", '[CLICK HERE](https://discord.gg/tAdt98y)')
        .addField("▪ Razzer Support ~ A Discord.js Bot", '[CLICK HERE](https://discord.gg/yV3fjCu)', true)
        .addField("▪ Advol Support Server ~ A Discord.js Bot", '[CLICK HERE](https://discord.gg/V3nRxhu)', true)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
        
        message.channel.send(storeembed)
        

     

  } catch (e) {
    console.log(`[Error] [Commands] (store) >> ${e}`);
  }
}

exports.help = {
  name: 'partners',
  description: 'Buy Item 2.',
  aliases: ['partner'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.buy2', '.b2' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}    
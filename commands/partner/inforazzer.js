const Discord = require("discord.js");

exports.run = async (message, args, client, prefix) => {
  try {
          
          let balico = "https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2FRazzerpic.jpg?1539007791845"
          let balem = new Discord.RichEmbed()
          .setColor("36393e")
          .setThumbnail(balico)
          .setTitle("**Razzer Info**")
          .addField(`Not done yet`);
          message.channel.send(balem)

          
  } catch (e) {
    console.log(`[Error] [Commands] (inforazzer) >> ${e}`);
  }
}

exports.help = {
  name: 'inforazzer',
  description: 'Check your balance.',
  aliases: ['razzer', 'ir', 'irazzer'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
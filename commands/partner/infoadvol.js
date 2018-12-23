const Discord = require("discord.js");

exports.run = async (message, args, client, prefix) => {
  try {
          let advolico = "https://cdn.glitch.com/32d2792a-47a3-45d2-b4f4-a54ba85b5202%2Fadvol.PNG?1538866432437"
          let alem = new Discord.RichEmbed()
          .setColor("36393e")
          .setThumbnail(advolico)
          .setTitle("**Partner: Advol Info**")
          .addField("> Advol's Website", "[Advol - Discord Bot](https://advol-botpage.glitch.me/)")
          .addField("> Advol's Server", "[Advol's Server](https://discord.gg/xupfCc9)")
          .addField("> Upvote Advol", "[Upvote Meee ~ Advol]()")
          .addField("> Owned By", "DeathSinger#3465")
          .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
          message.channel.send(alem)

  } catch (e) {
    console.log(`[Error] [Commands] (infoadvol) >> ${e}`);
  }
}

exports.help = {
  name: 'infoadvol',
  description: 'Check your balance.',
  aliases: ['advol', 'ia', 'iadvol'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
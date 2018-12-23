const Discord = require("discord.js");
const ms = require('ms')

exports.run = async (message, args, client, prefix) => {
  try {
    message.delete();
    message.channel.send(new Discord.RichEmbed()
      .setColor('36393e')
      .setFooter('▪ This message will be deleted in 15 sec')
      .setTitle('▪ All the Commands must be done like in this example:')
      .setDescription('\`\`\`js\nconst Discord = require("discord.js");\n\nexports.run = async (message, args, client, prefix) => {\n  try {\n    The Code That The Command Will Execute!\n  } catch (e) {\n    console.log(e);\n  }\n};\n\nexports.help = {\n  name: \'example\',\n  description: \'Take this as an example for making commands.\',\n  aliases: [\'alias1\',\'alias2\'],\n  usage: \'usage\',\n  example: [\'example for usage\', \'example for usage\']\n};\`\`\`\n📛 **Also using aliases means every aliase needs to be unique or the command will run the first aliase that finds.**')
    ).then(m => m.delete(15000));
  } catch (e) {
    console.log(`[Error] [Commands] (example) >> ${e}`);
  }
}

exports.help = {
  name: 'example',
  description: 'The Example For Making Commands.',
  aliases: ['exm'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.example', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.example', '.exm' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
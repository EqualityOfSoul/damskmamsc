const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {   
  } catch (e) {
  console.log(`[Error] [Commands] (test) >> ${e}`)
  }
}
  
exports.help = {
  name: 'test',
  description: 'The Example For Making Commands.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: 'test', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ 'test' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
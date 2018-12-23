const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {

 const regex = /(https?:\/\/)?(www\.)?(discord(\.|dot|\(dot\))(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/ig.test(message.content);

  var toNote = args.join(' ');
  if(!toNote) return message.channel.send(`:x:`)
  
  if(regex) {
    message.channel.send(':ballot_box_with_check:  **Your profile description successfully changed**');
    db.set(`note_${message.author.id}`, '**Discord invite link.**');
  } else {
  
  message.channel.send(':ballot_box_with_check:  **Your profile description successfully changed**') 
  db.set(`note_${message.author.id}`, toNote);
  }  
  }catch (e) {
    console.log(`[Error] [Commands] (description) >> ${e}`);
  }
}
exports.help = {
  name: 'setdesc',
  description: 'Check your balance.',
  aliases: ['setinfo', 'setdescription'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
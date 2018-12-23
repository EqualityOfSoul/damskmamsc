const { RichEmbed } = require("discord.js");
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {
    if(!args[0]) {
let aRole = await db.fetch(`settings${message.guild.id}.admin`)
  let botmessage = args.join(" ");
  if(!botmessage) return message.channel.send(":x: >>Please tell the bot what to say<<")
      message.delete();
    if(message.member.roles.some(r=>[`${aRole}`].includes(r.name)) ) {
  let set_true = new RichEmbed()
      .setColor("36393e")
      .setTitle(`▪ ${botmessage}`)
    message.channel.send(set_true)
} else {
  let perms = message.member.permissions;
if(perms.has("MANAGE_GUILD")) {
  let set_true = new RichEmbed()
      .setColor("36393e")
      .setTitle(`▪ ${botmessage}`)
  message.channel.send(set_true)
} else {
message.channel.send(`:x: >>You do not have the admin role or permission you can also set the admin role by \`>>setadmin <@role>\`<<`)
}
}
    }
  } catch (e) {
    console.log(`[Error] [Commands] (say) >> ${e}`);
  }
}

exports.help = {
  name: 'say',
  description: 'The Example For Making Commands.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.example', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.example', '.exm' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
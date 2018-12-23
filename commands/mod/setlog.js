const { RichEmbed } = require("discord.js");
const economy = require("discord-economy")
const db = require('quick.db')

exports.run = async (message, args, client, prefix) => {
  try {
    let log = message.mentions.channels.first()
    if(!log) log = message.channel;
    let aRole = await db.fetch(`settings${message.guild.id}.admin`)
    if(message.member.roles.some(r=>[`${aRole}`].includes(r.name)) ) {
  let set_true = new RichEmbed()
  .setDescription(`:ballot_box_with_check: **Your guild log channel was set to <#${log.id}>**`)
  message.channel.send(set_true)
  db.set(`settings${message.guild.id}.logc`, log.id);
} else {
  let perms = message.member.permissions;
if(perms.has("MANAGE_GUILD")) {
  let set_true = new RichEmbed()
  .setDescription(`☑ **Your guild log channel was set to <#${log.id}>**`)
  message.channel.send(set_true)
  db.set(`settings${message.guild.id}.logc`, log.id);
} else {
message.channel.send(`:x: >>You do not have the admin role or permission<<`)
}
}
} catch (e) {
console.log(`[Error] [Commands] (setlog) >> ${e}`);
}
}

exports.help = {
  name: 'setlog',
  description: 'List the jobs that you can do.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>jobs', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>jobs'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}  
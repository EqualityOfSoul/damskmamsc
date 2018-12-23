const { RichEmbed } = require("discord.js");
const economy = require("discord-economy")
const db = require('quick.db')

exports.run = async (message, args, client, prefix) => {
  try {
  if(args[0] === "true") {
db.set(`settings${message.guild.id}.welcomee`, 'true')
}else {
  if(args[0] === 'false') {
db.set(`settings${message.guild.id.welcomee}`, 'false')
}else {

  let aRole = await db.fetch(`settings${message.guild.id}.admin`)
  if(message.member.roles.some(r=>[`${aRole}`].includes(r.name)) ) {
  let set_true = new RichEmbed()
  .setDescription(`☑ **Your guild's welcome message was set**`);
  message.channel.send(set_true)
  db.set(`settings${message.guild.id}.welcome`, args[0]);
}else {
  let perms = message.member.permissions;
  if(perms.has("MANAGE_GUILD")) {
  let set_true = new RichEmbed()
  .setDescription(`☑ **Your guild's prefix was set to ${args[0]}**`);
  message.channel.send(set_true)
  db.set(`settings${message.guild.id}.prefix`, args[0]);
}else {
message.channel.send(`:x: >>You do not have the admin role or permission<<`)
}
}
}
  } catch (e) {
    console.log(`[Error] [Commands] (setprefix) >> ${e}`);
  }
}

exports.help = {
  name: 'setwelcome',
  description: 'List the jobs that you can do.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>jobs', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>jobs'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
  } catch (e) {
    console.log(`[Error] [Commands] (setlog) >> ${e}`);
  }
}

exports.help = {
  name: 'setwelcome',
  description: 'List the jobs that you can do.',
  aliases: ["setwel", "setw"],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>jobs', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>jobs'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}

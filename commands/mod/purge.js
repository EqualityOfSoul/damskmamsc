const { RichEmbed } = require("discord.js");
const db = require("quick.db")

exports.run = async (message, args, bot, prefix) => {
    try {
        const deleteCount = parseInt(args[0], 10);
if(!deleteCount || deleteCount < 2 || deleteCount > 200)
return message.reply(":x: >>Please provide a number between 2 and 200<<");
let log = await db.fetch(`settings${message.guild.id}.logc`)
    let aRole = await db.fetch(`settings${message.guild.id}.admin`)
    if(message.member.roles.some(r=>[`${aRole}`].includes(r.name)) ) {
  let set_true = new RichEmbed()
  .setColor("36393e")
  .setTitle(`♻️ Action | Purge`)
  .addField(`▪ Moderator`, `<@${message.author.id}>`, true)
  .addField(`▪ Messages Removed`, `${args[0]}`, true)
  .addField(`▪ Time`, `${message.channel.createdAt}`, true)
  .addField(`▪ Channel`, `<#${message.channel.id}>`, true)
 log.send(set_true)
const fetched = await message.channel.fetchMessages({limit: deleteCount});
message.channel.bulkDelete(fetched)
} else {
  let perms = message.member.permissions;
if(perms.has("MANAGE_GUILD")) {
  let set_true = new RichEmbed()
  .setTitle(`♻️ Action | Purge`)
  .addField(`▪ Moderator`, `<@${message.author.id}>`, true)
  .addField(`▪ Messages Removed`, `${args[0]}`, true)
  .addField(`▪ Time`, `${message.channel.createdAt}`, true)
  .addField(`▪ Channel`, `<#${message.channel.id}>`, true)
  
const fetched = await message.channel.fetchMessages({limit: deleteCount});
let purge = message.guild.channels.find(`name`, `${log}`);
purge.send(set_true)
message.channel.bulkDelete(fetched)
} else {
message.channel.send(`:x: >>You do not have the admin role or permission<<`)
}
}
      
    } catch (e) {
        console.log(`[Error] [Commands] (buy) >> ${e}`);
    }
}

exports.help = {
  name: 'purge',
  description: 'Buy A Item.',
  aliases: ['clear'],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}

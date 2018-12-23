const Discord = require("discord.js");
const ms = require("ms");
const config = require('../../config.json');
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {
  
  let log = await db.fetch(`settings${message.guild.id}.logc`)
  if (!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.channel.send(":x: >>Missing perm **MANAGE_SERVER**<<")
  if (!client.lockit) client.lockit = [];
  let time  = args.join(" ");
  let validUnlocks = ["release", "unlock" , "rel" , "ul"];
  let perms = message.member.hasPermission("MANAGE_MESSAGES");
  if (!time) return message.channel.send(":x: >>You did not enter a time Exm : 1d 1h 1m 1s<<");

    if(message.author.id === config.ownerID) {
message.channel.overwritePermissions(message.author, {
  SEND_MESSAGES: true,
  MANAGE_SERVER: true
})}
  
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send(":unlock: Lockdown lifted :smile: .");
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      let lchannel = message.guild.channels.find(`name`, `${log}`);
      let lem = new Discord.RichEmbed()
    .setTitle(":tools: Action | Lockdown")
    .setColor("36393e")
    .addField("▪ Executor", `<@${message.author.id}>`)
    .addField("▪ Channel", `<#${message.channel.id}>`)
    .addField("▪ Time", `:clock2:${ms(ms(time), { long:true })}`)
    .setTimestamp()
      lchannel.send(lem).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send(":unlock: Lockdown lifted :smile: .")).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      });
    });
  }
}catch (e) {
    console.log(`[Error] [Commands] (lockdown) >> ${e}`);
  }
}

exports.help = {
  name: 'lockdown',
  description: 'Lockdown a channel so no one can talk in it.',
  aliases: ['lockchannel'],
  usage: '.lockdown <time>',
  example: [ '.lockdown 1d']
}
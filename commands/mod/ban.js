const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try { 

    let ARole = await db.fetch(`settings${message.guild.id}.adminR`)
    let log = await db.fetch(`settings${message.guild.id}.logc`)
if(message.member.roles.find("name", `ARole`)) {
      let logs = message.guild.channels.find("name", `${log}`);
       let user = message.mentions.users.first();
  if(!user) return message.reply(":x: >>No @user defined<<");
  if(!log) return message.reply(":x: >>No log set please set one with $setlog<<")

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";
  let logging = await db.push(`guilddata${message.guild.id}.bans`, `TYPE_BAN_NAME_${user.username}_ID_${user.id}`)
  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle(":hammer: Action | Ban")
  .setColor("36393e")
  .setTimestamp()
  .addField("▪ Banned User", `${user}, ID: ${user.id}`)
  .addField("▪ Reason", reason)
  .addField("▪ Moderator", `${message.author.username}, ID: ${message.author.id}`)
  .addField("▪ Time", message.createdAt)
  .addField("▪ Channel", message.channel)
  .setFooter(`For ${message.guild.name}'s security we save this info`)

  logs.send(logsEmbed);
     user.id.send(logsEmbed)    
   } else {
     
     
     }
  }catch (e) {
    console.log(`[Error] [Commands] (bal) >> ${e}`);
  }
                                                          
  }
exports.help = {
  name: 'ban',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}


const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try { 
    let log = await db.fetch(`settings${message.guild.id}.logc`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":X");
    if(args[0] == "help"){
      message.reply("Usage: !kick <user> <reason>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":x: can't find user")
    let reason = args.join(" ").slice(22);
    let logging = await db.push(`userdata${message.guild.id}.kicks`, `TYPE_KICK_NAME_${kUser.username}_ID_${kUser.id}`)
    if(kUser.hasPermission("ADMINISTRATOR")) return (":x: >>Please remove their perms<<")

let kickEmbed = new Discord.RichEmbed()
.setTitle(":hammer: Action | Kick")
.setColor("36393e")
.addField("▪ Kicked User", `${kUser}, ID: ${kUser.id}`)
.addField("▪ Reason", reason)
.addField("▪ Moderator", `${message.author.username}, ID: ${message.author.id}`)
.addField("▪ Time", message.createdAt)
.addField("▪ Channel", message.channel)
.setFooter(`For ${message.guild.name}'s security we save this info`)

    let kickChannel = message.guild.channels.find("name", `${log}`);
    if(!log) return message.channel.send(":x: >>You haven't set the log channel please do that<<");

    kUser.kick();
    kickChannel.send(kickEmbed);
  }catch (e) {
    console.log(`[Error] [Commands] (kick) >> ${e}`);
  }
                                                          
  }
exports.help = {
  name: 'kick',
  description: 'Check your balance.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}


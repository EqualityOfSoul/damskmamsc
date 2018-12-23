const Discord = require("discord.js"); //is it scary?
const db = require("quick.db")

exports.run = async (message, args, client, prefix) => {
  try {
let user = message.author.id
let SETEmbed = new Discord.RichEmbed()
.setTitle(`__${client.user.username}'s__ commands (1)`)
.setThumbnail(message.guild.AvatarURL)
.setColor("36393e")
.addField("`▪ Command Name ▪`", "▪ balance\n +++++\n ▪ store\n +++++\n ▪ jobs\n +++++\n ▪ daily\n +++++\n ▪ ecoboard\n +++++\n ▪ inventory\n +++++\n ▪ pay\n +++++\n ▪ math\n +++++\n ▪ meme\n +++++\n ▪ avatar\n +++++\n ▪ botinfo\n +++++\n ▪ help\n +++++\n ▪ invite\n +++++\n ▪ npm\n +++++\n ▪ settings\n +++++\n ▪ serverinfo\n +++++\n ▪ suggestion\n +++++\n ▪ update\n +++++\n ▪ weather\n +++++\n ▪ whois\n +++++\n ▪ level\n +++++\n", true)
.addField("`▪ Description ▪`", `▪ See your balance or others\n +++++\n ▪ See whats in my store\n +++++\n ▪ See all my jobs\n +++++\n ▪ Collect your money daily\n +++++\n ▪ Check out the top people with the most money\n +++++\n ▪ Check everything you own\n +++++\n ▪ Pay a user money\n +++++\n ▪ For the people who have homework\n +++++\n ▪ Gives you random memes\n +++++\n ▪ See yours or others avatar\n +++++\n ▪ Some advanced information\n +++++\n ▪ The command you are using\n +++++\n ▪ Gives you invite links\n +++++\n ▪ For developers\n +++++\n ▪ Check out your servers settings\n +++++\n ▪ Check out basic server info\n +++++\n ▪ Send me a suggestion on what you want\n +++++\n ▪ Check out on the newest updates\n +++++\n ▪ N/A\n +++++\n ▪ Information about you or an user\n +++++\n ▪ Check out your level\n +++++\n`, true)
.setTimestamp()
let SeETEmbed = new Discord.RichEmbed()
.setTitle(`__${client.user.username}'s__ commands (2)`)
.setThumbnail(message.guild.AvatarURL)
.setColor("36393e")
.addField("`▪ Command Name ▪`", "▪ lvlboard\n +++++\n ▪ ban\n +++++\n ▪ kick\n +++++\n▪ lockdown\n +++++\n ▪ purge\n +++++\n ▪ say\n +++++\n ▪ setlog\n +++++\n ▪ setprefix\n +++++\n ▪ divorce\n +++++\n ▪ marry\n +++++\n ▪ profile\n +++++\n ▪ rep\n +++++\n ▪ setdesc\n +++++\n ▪ slap\n +++++\n ▪ pat\n +++++\n ▪ kiss\n +++++\n ▪ hug\n +++++\n ▪ holdhand\n +++++\n ▪ magic\n +++++\n ▪ iphonex\n +++++\n ▪ ravatar\n +++++\n ▪ threats\n +++++\n ", true)
.addField("`▪ Description ▪`", `▪ Check out the people who chat too much\n +++++\n ▪ Bans a user\n +++++\n ▪ Kicks a user\n +++++\n ▪ Stops people chating in a channel\n +++++\n ▪ Deletes <amount> of messages\n +++++\n ▪ Makes me say something\n +++++\n ▪ Sets server logs\n +++++\n ▪ Sets servers prefix\n +++++\n ▪ Divorce the user you married\n +++++\n ▪ Marry a user\n +++++\n ▪ Check your profile\n +++++\n ▪ Rep a user you like\n +++++\n ▪ Set your profiles description\n +++++\n ▪ Slap a user\n +++++\n ▪ Pat a user\n +++++\n ▪ Kiss a user\n +++++\n ▪ Hug a user\n +++++\n ▪ Hold a users hand\n +++++\n ▪ Preform magic on a user\n +++++\n ▪ Make a user an iphonex\n +++++\n ▪ Show a random avatar\n +++++\n ▪ Shows 3 threats\n +++++\n `, true)
.setTimestamp()
    client.fetchUser(user)
    .then(user => {user.send(SETEmbed)})
        client.fetchUser(user)
    .then(user => {user.send(SeETEmbed)})
} catch (e) {
    console.log(`[Error] [Commands] (help) >> ${e}`);
  }
}

exports.help = {
  name: 'help',
  description: 'Get your daily.',
  aliases: [],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>daily', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['>>daily'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
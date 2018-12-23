const Discord = require("discord.js");
const eco = require("discord-economy")
const db = require('discord-leveling')

exports.run = async (message, args, client, prefix) => {
  try { 
    let emojii = client.emojis.find(e => e.name === `discordmem321`);
            if (message.mentions.users.first()) {
eco.Leaderboard({search: message.mentions.users.first().id}).then(l => {//Searches for the @user and outputs it to the user.
    message.channel.send(`${emojii} ${message.mentions.users.first().tag} is #${l} on my ecoboard!`);
})
 

            } else {
 
eco.Leaderboard({limit: 100}).then(users => {
 
  client.fetchUser(users[1].userid).then(number1 => {
  client.fetchUser(users[2].userid).then(number2 => {
  client.fetchUser(users[3].userid).then(number3 => {
  client.fetchUser(users[4].userid).then(number4 => {
  client.fetchUser(users[5].userid).then(number5 => {
  client.fetchUser(users[6].userid).then(number6 => {
  client.fetchUser(users[7].userid).then(number7 => {
  client.fetchUser(users[8].userid).then(number8 => {
  client.fetchUser(users[9].userid).then(number9 => {
    
 let blah = new Discord.RichEmbed()
 .setTitle(":globe_with_meridians: Economy leaderboard:")
 .setDescription(`
:one: => ${emojii} ${number1.tag} : This account contains :moneybag: ${users[1].balance}
:two: => ${emojii} ${number2.tag} : This account contains :moneybag: ${users[2].balance}
:three: => ${emojii} ${number3.tag} : This account contains :moneybag: ${users[3].balance}
:four: => ${emojii} ${number4.tag} : This account contains :moneybag: ${users[4].balance}
:five: => ${emojii} ${number5.tag} : This account contains :moneybag: ${users[5].balance}
:six: => ${emojii} ${number6.tag} : This account contains :moneybag: ${users[6].balance}
:seven: => ${emojii} ${number7.tag} : This account contains :moneybag: ${users[7].balance}
:eight: => ${emojii} ${number8.tag} : This account contains :moneybag: ${users[8].balance}
:nine: => ${emojii} ${number9.tag} : This account contains :moneybag: ${users[9].balance}`)
.setColor('36393e');
    message.channel.send(blah)
})
})
}) 
})
})
})
})
})
})
})
}
    
  }catch (e) {
    console.log(`[Error] [Commands] (ecoleaderboard) >> ${e}`);
  }
                                                          
  }
exports.help = {
  name: 'ecoboard',
  description: 'Check your balance.',
  aliases: ['ecob'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '>>ecoboard', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '>>ecoboard', '>>ecoboard @user' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
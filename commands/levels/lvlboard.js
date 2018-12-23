const Discord = require("discord.js");
const eco = require("discord-economy")
const db = require('discord-leveling')

exports.run = async (message, args, client, prefix) => {
  try { 
    let emojii = client.emojis.find(e => e.name === `discordmem321`);
            if (message.mentions.users.first()) {
 
db.Leaderboard({search: message.mentions.users.first().id}).then(l => {
    message.channel.send(`The user ${message.mentions.users.first().tag} is number ${l} on my leaderboard!`);
})
 
//Searches for the top 3 and outputs it to the user.
            } else {
 
db.Leaderboard({limit: 10}).then(users => {
 
  client.fetchUser(users[1].userid).then(number1 => {
  client.fetchUser(users[2].userid).then(number2 => {
  client.fetchUser(users[3].userid).then(number3 => {
  client.fetchUser(users[4].userid).then(number4 => {
  client.fetchUser(users[5].userid).then(number5 => {
  client.fetchUser(users[6].userid).then(number6 => {
  client.fetchUser(users[7].userid).then(number7 => {
  client.fetchUser(users[8].userid).then(number8 => {
  client.fetchUser(users[9].userid).then(number9 => {
    

message.channel.send(`:globe_with_meridians: Level leaderboard:
 
:one: => ${emojii} ${number1.tag} : level ${users[1].level}
:two: => ${emojii} ${number2.tag} : level ${users[2].level}
:three: => ${emojii} ${number3.tag} : level ${users[3].level}
:four: => ${emojii} ${number4.tag} : level ${users[4].level}
:five: => ${emojii} ${number5.tag} : level ${users[5].level}
:six: => ${emojii} ${number6.tag} : level ${users[7].level}
:eight: => ${emojii} ${number8.tag} : level ${users[8].level}
:nine: => ${emojii} ${number9.tag} : level ${users[9].level}`)
 
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
    console.log(`[Error] [Commands] (leaderboard) >> ${e}`);
}
                                                          
}

exports.help = {
  name: 'levelboard',
  description: 'Check your balance.',
  aliases: ['lvlb'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
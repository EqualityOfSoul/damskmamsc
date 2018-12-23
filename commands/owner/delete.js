const Discord = require("discord.js")
let ownerID = "261167188193443841"
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
try{  
    if (message.author.id !== ownerID) {
      
      
      message.channel.send("You are not authorized to use this command.");
    } else { 
      
      var user = message.mentions.users.first()
        if (!user) return message.reply('Pls, Specify a user I have to delete in my database!')
        economy.Delete(user.id).then(l => {
 
          if (l.deleted == true) return message.reply('Succesfully deleted the user out of the database!')
          message.reply('Error: Could not find the user in database.')
 
        })
    }
    } catch (e) {
        console.log(`[Error] [Commands] (userdelete) >> ${e}`);
    }
}

exports.help = {
  name: 'delete',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID>',
  example: ['.buy<ID>'],
}
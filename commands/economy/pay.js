const Discord = require("discord.js");
const economy = require("discord-economy")

exports.run = async (message, args, client, prefix) => {
  
  var user = message.mentions.users.first()
  var amount = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(':x: >>No @user mentioned<<')
  if (!amount) return message.channel.send(':x: >>There was no money defined<<')

      economy.FetchBalance(message.author.id).then((f) => {
        if (parseInt(args[1]) > parseInt(f.balance)) return message.channel.send(`:x: >>The money defined is more than you have<<`)
        
        economy.Transfer(message.author.id, user.id, amount)
        message.channel.send(':ballot_box_with_check: Transfered money succesfully')
      })
        
        //fix this message yourself :D
      //im an idiot 

}
exports.help = {
  name: 'pay',
  description: 'im too lazy',
  aliases: ['donate'], //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.pay @user amount', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: ['oof', 'poof'] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
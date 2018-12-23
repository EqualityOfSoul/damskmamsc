const Discord = require("discord.js");
const weather = require('weather-js');

exports.run = async (message, args, client, prefix) => {
  try {
  weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send(':x: >>Please provide a location<<')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor("36393e")
          .addField('▪ Timezone',`UTC${location.timezone}`, true)
          .addField('▪ Degree Type',location.degreetype, true)
          .addField('▪ Temperature',`${current.temperature} Degrees`, true)
          .addField('▪ Feels Like', `${current.feelslike} Degrees`, true)
          .addField('▪ Winds', `${current.winddisplay}`, true)
          .addField('▪ Humidity', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}  catch (e) {
  console.log(`[Error] [Commands] (weather) >> ${e}`);
  }
} 
  



exports.help = {
  name: 'weather',
  description: 'Easily Look Up Your Weather From Via Tokken.',
  aliases: ['weather', "WEATHER"],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.example', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.example', '.exm' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
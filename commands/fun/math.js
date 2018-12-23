const Discord = require('discord.js');
const math = require('math-expression-evaluator');
const fs = require('fs');

exports.run = async (message, args, client, prefix) => {
  try {
          
  
  const embed = new Discord.RichEmbed()
      .setColor("36393e");
  
  // Verify Input
  if (!args[0]) {
      
      // Configure Embed
      embed.setFooter('▪ Please input an expression.');
      
      // Return & Send Embed
      return message.channel.send(embed);
      
  }
  
  // Evaluate Expression
  let result;
  try {
      
      result = math.eval(args.join(' '));
      
  } catch (e) { // This will catch any errors in the expression
      
      result = '▪ :x: "Invalid Input"';
      
  }
      
  
  // Configure Embed
  embed.addField('▪ Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
       .addField('▪ Output', `\`\`\`js\n${result}\`\`\``);
       
  // Send Embed
  message.channel.send(embed);
  } catch (e) {
    console.log(`[Error] [Commands] (math) >> ${e}`);
  }
}

exports.help = {
  name: 'math',
  description: 'I NEED HELP WITH MATH? WELL THIS IS FOR YOU ONLY $9.99.',
  aliases: [],
  usage: '.math [expression]',
  example: [ '.math 5 + 5']
}
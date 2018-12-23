const Discord = require("discord.js");
var util = require("util")


exports.run = async (message, client, prefix) => {  
  let args = message.content.split(" ").slice(1);   
  let code = args.join(' ');
  try {
  
  if (message.author.id != '261167188193443841') return;
    try {
  let ev = eval(code)
                let str = util.inspect(ev, {
                    depth: 1
                })
                 str = `${str.replace(new RegExp(`${client.token}|${process.env.TOKEN}`, "g"), "nop?")}`;
                if(str.length > 1800) {
                    str = str.substr(0, 1800)
                    str = str + "..."
                }
                message.delete(); 
    message.channel.send("", { embed: { 
      color: "36393e",      
  fields: [{        
    name: '**Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: '**Output**', 
          value: '\`\`\`' + str + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});} catch (err) {   message.react("❌");
message.channel.send("", { embed: { 
      color: "36393e",      
  fields: [{        
    name: ':newspaper: **Input**',     
      value: '\`\`\`' + code + '\`\`\`'         
},{     
      name: ':incoming_envelope: **Output**', 
          value: '\`\`\`' + err + '\`\`\`'  
        }], 
      footer: {     
    text: ``    }     }});    } 
    } catch (e) {
    console.log(`[Error] [Commands] (level) >> ${e}`);
  }
}

exports.help = {
  name: 'eval',
  description: 'Check your balance.',
  aliases: ['dev', 'exe'],  //Aliase means a shorten version of the command like 'example'-'exm', you don't need to put in aliases like this 'example'-'Example'-'EXAMPLE', the bot is checking by him self if a Command in UpperCase is matching the command name.
  usage: '.bal', //here you put the usage like '.whois <@user>' not the example like '.whois @Mike#123', examples are puted in example section.
  example: [ '.balance', '.bal' ] //Only examples for hot to use like this '.lockdown 1d' or if has multiple aliases like this '.example','.exm'.
}
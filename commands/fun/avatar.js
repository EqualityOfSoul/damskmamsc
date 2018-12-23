const Discord = require("discord.js");
const config = require('../../config.json');

exports.run = async (message, args, bot, prefix) => {
    try {
    let msg = await message.channel.send(":ballot_box_with_check: doing some magic... and... ta-da");
    let target = message.mentions.users.first() || message.author; // Mentioned user
    await message.channel.send({files: [
        {
            title: "**Here it is**",
            attachment: target.displayAvatarURL,
            name: "avatar.png"
        }
    ]});
      
    } catch (e) {
        console.log(`[Error] [Commands] (avatar) >> ${e}`);
    }
}

exports.help = {
  name: 'avatar',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}
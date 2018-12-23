const Discord = require("discord.js");
const db = require('quick.db')
const yes = ['yes', 'y', 'ye', 'yeah', 'yup', 'yea', 'ya'];
const no = ['no', 'n', 'nah', 'nope', 'nop'];

exports.run = async (message, args, client, prefix) => {
    try {
       const user = message.mentions.users.first();
  
  if (!user) return args.missing(message, 'Please mention a user to marry!', client.commands.get('marry').help)
  if(user.id === message.author.id) return message.channel.send(`You can't marry yourself!`)
  if(user.id === client.user.id) return message.channel.send('You can\'t marry me. I already taken :P')
  if(user.bot) return message.channel.send('You can\'t marry with bot!');
  
    const marrys = await db.fetch(`marry_${user.id}`)
    if(marrys) return message.channel.send('That user already married! Find another one.')
    const married = await db.fetch(`marry_${message.author.id}`) 
    if(married) return message.channel.send('Thats not good, You can\'t marry two times.');
  
  message.channel.send(`<@${user.id}>, **${message.author.username}** is asking to marry you! Type \`yes\` to accept it or \`no\` to reject it! Answer in 30 seconds`)
  const hit = await verifyText(message.channel, user)
  if(hit) {
  db.set(`marry_${message.author.id}`, user.tag)
  db.set(`married_${message.author.id}-${user.id}`, true);
  db.set(`marry_${user.id}`, message.author.tag)
  db.set(`married_${user.id}-${message.author.id}`, true);
    
  message.channel.send(`${user.username} has accepted ${message.author} marriage! Congrats!`)
  } else {
    message.channel.send(`${message.author}, seems like ${user.username} does not like you back`);
  } 

async function verifyText(channel, user, time = 30000) {
		const filter = res => {
			const value = res.content.toLowerCase();
			return res.author.id === user.id && (yes.includes(value) || no.includes(value));
		};
		const verify = await channel.awaitMessages(filter, {
			max: 1,
			time
		});
		if (!verify.size) return 0;
		const choice = verify.first().content.toLowerCase();
		if (yes.includes(choice)) return true;
		if (no.includes(choice)) return false;
		return false;
}
  }catch (e) {
    console.log(`[Error] [Commands] (marry) >> ${e}`);
  }
}

exports.help = {
  name: 'marry',
  description: 'Buy A Item.',
  aliases: [],
  usage: '.buy<ID> ',
  example: ['.buy<ID>'],
}
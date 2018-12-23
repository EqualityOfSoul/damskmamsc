const dl = require("discord-leveling")
const { RichEmbed } = require('discord.js')


module.exports = async message => {
    try {
let messages;
dl.AddXp(message.author.id, 8).then(p => {

 if(message.author.bot) return;
 if (p.newxp > 400) {
        dl.AddLevel(message.author.id, 1).then(i => {
        dl.AddXp(message.author.id, -400)
   let i = dl.fetch(message.author.id)
        let ulvl = new RichEmbed()
     .setTitle(`${message.author.username} You leveled up to ${i.newlevel} ⬆`)
     .setColor("36393e")
     .setTimestamp()
     message.channel.send(ulvl)
    })


console.log(p)
})
    } catch (e) {
    console.log(`[Error] {Leveling} >>${e}<<`)
}
}

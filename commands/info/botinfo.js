const Discord = require("discord.js");
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
let db = require("quick.db")
//const ms = require("ms")

exports.run = async (message, args, client, prefix) => {
    try {
    let cpup;
    let commands = await db.fetch(`${message.guild.id}data.commands`)//oooh it runs the command before getting commands
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setTitle(`**${client.user.username} Stats**`)
            .setColor("36393e")
            .addField("▪ Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("▪ Uptime ", `${duration}`, true)
            .addField("▪ Users", `${client.users.size.toLocaleString()}`, true)
            .addField("▪ Servers", `${client.guilds.size.toLocaleString()}`, true)
            .addField("▪ Channels ", `${client.channels.size.toLocaleString()}`, true)
            .addField("▪ Discord.js", `v${version} `, true)
            .addField("▪ Node", `${process.version}`, true)
            .addField("▪ CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("▪ Arch", `\`${os.arch()}\``, true)
            .addField("▪ Platform", `\`\`${os.platform()}\`\``, true)
            .addField("▪ API Latency", `${Math.round(client.ping)}ms`, true)
            .addField("▪ Commands Used", commands, true)
            .addField("▪ Owner", `The owner of ${client.user.username} is <@261167188193443841> with ID : 261167188193443841`)
            .addField("▪ Recent updates", "`UPDATES HAVE BEEN MOVED DO >>update TO SEE THE NEW UPDATES`")
            .setTimestamp()
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL);

    message.channel.send(embedStats);
 });
    } catch (e) {
        console.log(`[Error] (botinfo)) >> ${e}`);
    }
}

exports.help = {
  name: 'botinfo',
  description: 'Get info about tokken.',
  aliases: ['binf'],
  usage: 'botinfo',
  example: ['botinfo']
}

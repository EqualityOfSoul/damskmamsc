const { Client, Collection } = require('discord.js');
const Botlister = require('botlister');
const fs = require('fs');
const db = require('quick.db')
const commandsCollection = new Collection();
const cmdnr = new Collection();
const client = new Client
let get = process.env

//Commands Hanler
const loadCommands = module.exports.loadCommands = (dir = "./commands/") => {
try {
fs.readdir(dir, (error, files) => {
if (error) return console.log(error);

files.forEach((file) => {
if (fs.lstatSync(dir + file).isDirectory()) {
loadCommands(dir + file + "/");
return;
}

delete require.cache[require.resolve(`${dir}${file}`)];

cmdnr.set(props.help.name, props);
commandsCollection.set(props.help.name, props);

if(props.help.aliases) {
props.help.aliases.forEach(alias => {
commandsCollection.set(alias, props);
});
}
if(props.help.status) {
props.help.status.forEach(status => {
commandsCollection.set(status, props);
});
}
});
});
} catch (e) {
console.log(`[Error] [CommandsLoader] >> ${e}`);
}
};
loadCommands();

client.on('guildCreate', guild => {
    db.set(`settings${guild.id}.prefix`, `>>`)
    db.set(`settings${guild.id}.welcomee`, `false`)
    db.set(`settings${guild.id}.welcome`, `Hey {user} welcome to {guild}!`)
});

client.login(get.TOKEN).catch ( e => {
console.log(`[Error] [BotLogin] >> ${e}`);
process.exit();
});
const lister = new Botlister({ apiToken: get.DAPITOKEN, defaultBotId: get.BOTID })
client.on('ready', () => {
    lister.updateBotStatistics({
        guilds: client.guilds.size,
        users: client.users.size
    }).then(() => console.log('FINISHED')).catch(console.error);
});

exports.help = {
commandsCollection: commandsCollection,
client: client
}

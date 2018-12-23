const config = require('../config.json');

module.exports = async client => {
    try {
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
        /*const oyun = [
        `you trying to figure put the prefix || >>`,
        `you`,
        `Spikey being an idiot`,
        `over ${client.guilds.size} servers`,
        `Domino Studios`,
        `over ${client.users.size.toLocaleString()} users`,
        `update soon :)`];

        setInterval(function() {

        const random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setPresence({ game: { name: oyun[random], type: "STREAMING", url: "https://www.twitch.tv/developingcat_foln"}});
  }, 9000);*/
      client.user.setPresence({status: "dnd", game: { name: "UPDATE | >>update", type: "WATCHING"}});

    } catch (e) {
            console.log(`[Error] {Ready} >>${e}<<`)
    }
}

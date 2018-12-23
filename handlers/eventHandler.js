const fs = require('fs-extra');
const path = require('path');

module.exports = client => {
  try {
let events = fs.readdirSync('./events/').
filter(file => !fs.statSync(path.resolve('./events/', file)).isDirectory()).
filter(file => file.endsWith('.js'));

for(let event of events) {
event = event.replace(/\.js$/i, '');

if(event === 'ready') {
client.on(event, () => require('../events/' + event)(client));
}
else {
client.on(event, require('../events/' + event));
}
}
}catch (e) {
console.log(`[Error] {EventHandler} >>${e}<<`)
process.exit(1);
}
}


module.exports = async message => {
    try {
      require('./handlers/eventHandler')(client);

      const http = require('http');
      const express = require('express');
      const app = express();

      app.get("/", (request, response) => {
      console.log(Date.now() + " Ping Received");
      response.sendStatus(200);
      });
      app.listen(process.env.PORT);
      setInterval(() => {
      http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);
    } catch (e) {
    console.log(`[Error] {KeepAlive} >>${e}<<`)
}
}

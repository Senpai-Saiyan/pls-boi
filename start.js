const Discord = require('discord.js');
const config = require('./config.json');
const Manager = new Discord.ShardingManager('./bot.js', { totalShards: 1, token: config.token });
Manager.spawn();

Manager.on('message', (shard, msg) => {
    console.log('[' + shard.id + 1 + '] ' + msg);
});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " It's Working. ;3");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

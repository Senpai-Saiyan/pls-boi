const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client(config.opts);
client.on('message', message => {
    if (message.content === 'status') {
    	message.reply('send loods');
  	}
});

const Manager = new Discord.ShardingManager('./bot.js');
Manager.spawn(1); // This example will spawn 2 shards (5,000 guilds);
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

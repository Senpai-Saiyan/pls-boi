if (process.argv[2] && process.argv[2] === '--travis') var config = require('./config-example.json');
else config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client(config.opts);
bot.config = config;
require('./funcs.js')(bot);
// if (bot.config.musicOpts.youtubeKey) require('discord.js-musicbot-addon')(bot, require('./config.json').musicOpts);
const readdir = require('fs').readdir;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

const { Client } = require('idiotic-api');
bot.IdioticAPI = new Client(bot.config.idioticapi || 'token', { dev: true });

readdir('./modules/', (err, files) => {
    if (err) throw err;
    bot.log(`Loading ${files.length} commands!`);
    files.forEach(f => {
        try {
            var name = require(`./modules/${f}`).name;
            bot.commands.set(name, require(`./modules/${f}`));
            /* commandFile.aliases.forEach(alias => {
                bot.aliases.set(alias, commandFile.help.name);
            });*/
        } catch (e) {
            bot.log(`Unable to load command ${f}: ${e}`);
        }
    });
    bot.log(`Commands loaded!`);
});

readdir('./events/', (err, files) => {
    if (err) throw err;
    bot.log(`Loading ${files.length} events!`);
    files.forEach(file => {
        bot.events.set(file.substring(0, file.length - 3), require(`./events/${file}`));
        bot.on(file.split('.')[0], (...args) => {
            require(`./events/${file}`).run(bot, ...args);
        });
    });
    bot.log(`Events loaded!`);
});
{
  /*
    if (message.mentions.users.array().length > 4) {
                    message.delete().then(() => {
                        message.reply("Please don't mass ping!")
                      .then 
                    bot.log('Mass ping found.'); 
                    });
                } else {
                    message.channel.send('I tried to delete mass pings but my power level is too low!');
                }
  */
                  

      bot.login(config.token);
}

if (bot.config.token) bot.login(bot.config.token);
else if (process.env.TOKEN) bot.login(process.env.TOKEN);
else console.log('no token provided');

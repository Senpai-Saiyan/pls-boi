const Discord = require('discord.js');
module.exports = {
    name: 'bonk',
    type: 'images',
    usage: 'bonk @user',
    permission: 1,
    help: 'bonk someone',
    main: function(bot, msg) {
      var content = msg.content;
      msg.channel.send(`${msg.author}` + " bonked " + `${content}`, {
    file: "https://cdn.glitch.com/100fa598-3afb-45d2-857b-b66b044c2a0e%2F4757d51dd9b6f976c1b33889b7917b64.gif" // Or replace with FileOptions object
});

    }
}
      /*
        if(msg.author.bot) return; {
            var content = msg.content;
            if (content.indexOf('mention:') > -1) {
                if (content.indexOf(' ', content.indexOf('mention:') + 8) > -1) {
                    var mention = content.substring(content.indexOf('mention:') + 8, content.indexOf(' ', content.indexOf('mention:') + 8));
                } else {
                    mention = content.substring(content.indexOf('mention:') + 8, content.length);
                }
                console.log(mention);
                if (bot.users.get(mention)) {
                    if (content.indexOf(' ', content.indexOf('mention:') + 8) > -1) {
                        content = content.replace(content.substring(content.indexOf('mention:'), content.indexOf(' ', content.indexOf('mention:') + 8)), '<@' + bot.users.get(mention).id + '>');
                    } else {
                        content = content.replace(content.substring(content.indexOf('mention:'), content.length, '<@' + bot.users.get(mention).id + '>'));
                    }
                }
                msg.channel.send(`${msg.author}` + " bonked " + `${content}`, {
    file: "https://cdn.glitch.com/100fa598-3afb-45d2-857b-b66b044c2a0e%2F4757d51dd9b6f976c1b33889b7917b64.gif" // Or replace with FileOptions object
});         } else {
                msg.channel.send(`${msg.author}` + " bonked " + `${content}`, {
    file: "https://cdn.glitch.com/100fa598-3afb-45d2-857b-b66b044c2a0e%2F4757d51dd9b6f976c1b33889b7917b64.gif" // Or replace with FileOptions object
});
            }
        }
    },
};
*/
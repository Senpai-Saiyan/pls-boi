const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    type: 'informational',
    usage: 'avatar or avatar <@user> ',
    permission: 1,
    help: 'gets your avatar or avatar of mentioned user',
    main: function(bot, msg) {
var member = msg.author;
        if (msg.mentions.users.array()[0]) {
            member = bot.users.get(msg.mentions.users.array()[0].id)
        }
                var duck = new Discord.RichEmbed()
                    .setTitle((member).username + "'s Avatar")
                    .setURL((member).avatarURL)
                    .setImage((member).avatarURL)
                    .setFooter(msg.author.username, msg.author.avatarURL)
                    .setColor(msg.guild.me.displayColor)
                    .setTimestamp();
                msg.channel.send({ embed: duck });
    }
}
/* const Discord = require('discord.js');

const client = new Discord.Client();
module.exports = {
    name: 'join',
    type: 'fun',
    usage: 'join',
    permission: 1,
    help: 'Joins voice channel.',
    main: function(bot, msg) {
      client.on('message', message => {
  if (message.content === '&join') {
    // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});
    },
};
*/
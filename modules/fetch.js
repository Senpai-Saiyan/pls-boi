module.exports = {
    name: 'fetch',
    type: 'fun',
    usage: 'fetch',
    permission: 1,
    help: "fetches a thing you won't understand",
    main: function(bot, msg) {
  let god = ['oh god', 'Oh God', 'oh God', 'oh God']

  msg.channel.fetchMessages().then(messages => {
    messages.filter(m => m.content.includes === `${god}`)
        msg.channel.send("You have said 'oh god' " + `${messages.filter(m => m.author.id === `${msg.author.id}`).size}` + ' times')
  })
    }
}
    
// msg.channel.fetchMessages()
//      .then(messages => messages.filter(m => m.content.includes === `${god}`))
//  .then(messages => msg.channel.send("You have said 'oh god' " + `${messages.filter(m => m.author.id === '228597465438224385').size}` + ' times'))
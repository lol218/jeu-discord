// importation des modules
const discord = require('discord.js');
const deathnote = new discord.Client()
const ryuk = new discord.Client()
const commande = new discord.Client()

// connection à l'api de discord
deathnote.login('token')
ryuk.login('token')
commande.login('token')

//
deathnote.on('ready', () => {
    console.info('deathnote ready')
})
ryuk.on('ready', () => {
    console.info('ryuk ready')
})
commande.on('ready', () => {
    console.info('commande ready')
})

deathnote.on('message', message => {
    if (message.content.startsWith('!note')) {
        let args = message.content.trim().split(' ');
        
    }
})
ryuk.on('message', message => {

})
commande.on('message', message => {

})
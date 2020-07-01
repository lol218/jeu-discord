// importation des modules
const discord = require('discord.js');
const deathnote = new discord.Client()
const ryuk = new discord.Client()
const commande = new discord.Client()

// connection à l'api de discord
deathnote.login('NzI3ODcyMjEyOTg3NTQzNjIz.XvyKTg.zRBJwO4ULxo2BirpIFMCqMfHPCU')
ryuk.login('NzI3ODczNDA5NDIxMjc5Mjgz.XvyLAQ.J03w-sdhgYhQPoP0VrBDIbkHhOM')
commande.login('NzI3ODc0NTA1NjgyMTkwMzY3.XvyM3g.oLIvKeEpPwkmplDdeXpOT7v-0Ls')

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
const discord = require ("discord.js")
const cliente = new discord.Client()

cliente.on('ready', () => {
    console.log("Logado")
})

cliente.on('message',(message) => {
    if (message.content === "oi"){
        message.reply("oi, Geh")
    }
})

cliente.login('MTE2MzgzMTk1ODc1Nzk2NTkxNQ.GSBBiK.SFxWKR3_nhdhaXGDWifIr2ejvijh3Brj-AXVw0')
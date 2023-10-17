import { Client, IntentsBitField, Message } from "discord.js";
import * as dotenv from "dotenv"
dotenv.config()

const cliente = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

cliente.on('ready', () => {
    console.log("No ar")
})

Client.on('messageCreate', (Message) => {
    if(Message.author.bot) return
    if(Message.content == "oi"){
        message.replay("oi, Geh")
    }
})

Client.login(process.env.TOKEN)
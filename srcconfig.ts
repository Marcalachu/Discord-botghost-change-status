import dotenv from "dotenv"
dotenv.config()

export const TOKEN = process.env.TOKEN || ""
export const PREFIX = "+"
import Discord from "discord.js"
import { ODA1MzEwNDE2MTc5NTYwNDk5.YBZBxQ.37Y8FqVBJHIlu39euucaasw8omM} from "./config"

const client = new Discord.Client()

client.on("ready", () => {
    console.log("The bot is online")
})

client.login(TOKEN)
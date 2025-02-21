const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Made by Marcalachu and copyright!'));
app.listen(port, () =>
  console.log(`Copyright by Marcalachu  made by Marcalachu:${port}`)
);
// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
let status = "your custom status here";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(status);
});
client.on('message', msg => {
  if (msg.content.startsWith('!status')) {
    status = msg.content.slice(7);
    client.user.setActivity(status);
    msg.reply(`Status changed to ${status}`);
  } else if (msg.content === 'ping') {
    msg.reply('pong!');
  } else if (msg.content.startsWith('!say')) {
    const sayMessage = msg.content.slice(5);
    msg.channel.send(sayMessage);
  } else if (msg.content.startsWith('!clear')) {
    if (msg.member.hasPermission('MANAGE_MESSAGES')) {
      const amount = parseInt(msg.content.slice(7));
      if (isNaN(amount)) {
        msg.reply('Please provide a number for the amount of messages to clear!');
      } else if (amount < 1 || amount > 100) {
        msg.reply('You can only clear between 1 and 100 messages at a time!');
      } else {
        msg.channel.bulkDelete(amount, true)
          .then(messages => msg.channel.send(`Cleared ${messages.size} messages!`))
          .catch(err => msg.reply(`Error clearing messages: ${err}`));
      }
    } else {
      msg.reply('You do not have permission to clear messages!');
    }
  } else if (msg.content.startsWith('!kick')) {
    if (msg.member.hasPermission('KICK_MEMBERS')) {
      const member = msg.mentions.members.first();
      if (!member) {
        msg.reply('Please mention a valid member to kick!');
      } else {
        member.kick()
          .then(() => msg.reply(`${member.user.tag} was successfully kicked!`))
          .catch(err => msg.reply(`Error kicking ${member.user.tag}: ${err}`));
      }
    } else {
      msg.reply('You do not have permission to kick members!');
    }
  }
});
client.login("your discord bot token here")
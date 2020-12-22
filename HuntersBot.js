// JavaScript source code
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.Token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', commandHandler);

async function commandHandler(msg) {
    if (!msg.content.startsWith('/')) return;

    if (msg.content === '/join') {
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join();
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }
    else if (msg.content === '/leave') {
        if (msg.member.voice.channel) {
            msg.member.voice.channel.disonnect();
        }
    }
}
// JavaScript source code
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
var connection;
client.login(process.env.Token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', commandHandler);

async function commandHandler(msg) {
    if (!msg.content.startsWith('/')) return;

    if (msg.content === '/join') {
        if (msg.member.voice.channel) {
            connection = await msg.member.voice.channel.join();
        } else {
            msg.reply('You need to join a voice channel first!');
        }
        return;
    }
    else if (msg.content === '/leave') {
        if (msg.member.voice.channel) {
            //client.leaveVoiceChannel(msg.member.voice.channel);
            msg.guild.voiceConnection.disconnect();
            console.log('leaving channel!')
        }
        else
            msg.reply('you have to be in the voice channel first!')
        return;
    }
}
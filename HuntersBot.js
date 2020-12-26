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
    let commandFull;
    let command;
    let args;
    let prefix = '/';
    if (!msg.content.startsWith(prefix)) return;

    commandFull = msg.content.slice(1).split(" ");
    command = commandFull[0];
    commandFull.shift();
    args = commandFull;


    if (command === 'join') {
        if (msg.member.voice.channel) {
            connection = await msg.member.voice.channel.join();
        } else {
            msg.reply('You need to join a voice channel first!');
        }
        return;
    }
    else if (command === 'leave') {
        if (msg.member.voice.channel) {
            //client.leaveVoiceChannel(msg.member.voice.channel);
            connection.disconnect();
            //voiceChannel.leave();
            console.log('leaving channel!');
        }
        else
            msg.reply('you have to be in the voice channel first!');
        return;
    }
}
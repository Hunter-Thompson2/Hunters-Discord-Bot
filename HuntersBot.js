// JavaScript source code
require('dotenv').config();

class Queue {
    constructor() {
        this.data = {};
        this.tail = 0;
    }
    enqueue(dat) {
        data.push(dat);
    }
    dequeue() {
        data.shift();
    }
    front() {
        return data[0];
    }
}
const Discord = require('discord.js');
const client = new Discord.Client();
var connection;
var dispatcher;
var musicqueue = new Queue();
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
    else if (command === 'play') {
        if (msg.member.voice.channel) {
            if (client.voiceConnection.playing) {
                //add to queue
                musicqueue.enqueue(args[0]);
            }
            else {
                dispatcher = connection.play(args[0]);
            }
        }
        else
            msg.reply('you have to be in a voice channel to play a song!');
    }
}

//dispatcher.on('finish', queueHandler);
//function queueHandler(){
//    dispatcher = connection.play(musicqueue.front());
//    musicqueue.dequeue();
//}
/*
 This Template Was Founded By
 DebossTFK (AKA ~ Deboss)
 Cat
 
 Please credit us for anything you use from our git-hub
 */
 
const Discord = require('discord.js'); //common sense
const bot = new Discord.Client(); //common sense

// Bot Token and Your UserID + Bot Prefix
const token = 'YourBotTokenHere'; // your bot client token here
var userid = 'your account id here' // if you dont know what this means just mention yourself like this \@All Knowing Deboss#8272
var pfx = '!!' // NOTE you can change it (the prefix) but the prefix must be 2 char's long

// NPM'S UNDER HERE


bot.on('ready', () => {
    console.log('I am ready to be used papi!');
		bot.user.setGame(`Succ Me Daddy`) // change `Succ Me Daddy` to what you want EXAMPLE `I Am Currently In ${bot.guilds.size}`
});



bot.on('reconnecting', () => {
    console.log('my batteries ended need to change them and join the figth back'); // :3 test with this and u will understand
});



bot.on('message', message => {
    console.log(`${message.author.username}| ${message.channel.name} | ${message.guild ? message.guild.name : 'PM'} | ${message.content}`) //this is for message logs
//Look At The Oher .js files and ares for commadns like Eval and Restart
});

bot.login(token); //common sense

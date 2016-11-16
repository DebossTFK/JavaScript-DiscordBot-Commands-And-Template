/*
 This Template Was Founded By
 DebossTFK (AKA ~ Deboss)

 Idea Came From
 TH3B3AST87
 and Second

 Please note that if you are going to use our template please give credit where credit is due and dont claim this code as yours
 if you used this code for a refference please again give credit where credit is due


 Discord.JS Version 10.0 #indev
 Refference's : http://hydrabolt.github.io/discord.js/#!/docs/tag/master/file/general/Welcome
 Our Official Discord Server: https://discord.gg/FJQKjwa  and under the #support area is where ur going to find us / get help
 */
const Discord = require('discord.js'); //common sense
const bot = new Discord.Client(); //common sense
const token = 'YourBotTokenHere'; // your bot client token here
var userid = 'your account id here' // if you dont know what this means just mention yourself like this \@All Knowing Deboss#8272
var pfx = '!!' // NOTE you can change it (the prefix) but the prefix must be 2 char's long
bot.on('ready', () => {
    console.log('I am ready to be used papi!');
bot.user.setGame(`Succ Me Daddy`) // change `Succ Me Daddy` to what you want EXAMPLE `I Am Currently In ${bot.guilds.size}`
});

bot.on('reconnecting', () => {
    console.log('my batteries ended need to change them and join the figth back'); // :3 test with this and u will understand
});

bot.on('message', message => {
    console.log(`${message.author.username}| ${message.channel.name} | ${message.guild ? message.guild.name : 'PM'} | ${message.content}`) //this is for message logs
if (message.content === pfx + 'restart') {
    if (message.author.id === userid) {
        message.channel.sendMessage('I Am Now Going To Restart').then(() => process.exit(1))
    }
}
if (message.content.includes('wew')) {
    if (message.author.bot) return;
    message.channel.sendMessage(`lad`);
}
if (message.content.startsWith(pfx + `eval`)) {

    message.content = message.content.substring(7)
    if (message.author.id === userid)
        var code = message.content
    if (!code.length) return message.reply(`Add some code there`);
    try {
        const output = eval(code);
        message.channel.sendMessage(
            `\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`OUTPUT:\`\n\`\`\`${typeof output === 'object' ? JSON.stringify(output) : output}\`\`\``
        );
    } catch(err) {
        message.channel.sendMessage(`\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`ERROR:\`\n\`\`\`${err}\`\`\``);
    }
}
if (message.content.includes('python' || 'Python' || 'PYTHON')) {
    if (message.author.bot) return;
    message.channel.sendMessage(`Rip That Guy`);
}
if (message.content.startsWith('')) {
    message.channel.sendMessage('');
}
if (message.content.startsWith('')) {
    message.channel.sendMessage('');
}
});

bot.login(token); //common sense
/*
 Since alot of people went to the discord server and complained that the didnt know how to add a command even thouigh i said PLEASE
 READ THE DOC's here is a short little thing for you
 you see where it says

 if (message.content.startsWith('')) {
 message.channel.sendMessage('');
 }

 well hey there is your god damn send message command if u want it to mention the user change bot.sendMessage to bot.reply

 also if you are useing a simple notepad or notepad++ i suggest useing
 JetBrains Webstorms 2016.3 / or just the latest version of it
 if you see some things diffrently
 */
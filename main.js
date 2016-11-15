/*
Welcome To Your New "Easy" Discord Bot "Template"
This bot template was created by yor one and only ExoTeam

Main Workers
Deboss
TH3B3AST87
and I guess Second 

please do not claim this code as your own please give us credit for the template we did work very hard to make this template for you newbies / newbetts 
now if your are a more advanced bot coder yo may already know these things but we still decided to make this for any one to use
please if you are new to JavaScript please goto (https://www.codecademy.com/learn/javascript) and take some time to learn what the funcions mean
if you already know the basic's well feel free to go and read the rest of the notes we left for you but wait
please understand if we tell you that you can only do a certain thing it will be for a good cause like for the prefix
it must be a 2 char prefix this reasoning is for the eval command but if ur a advanced coder u will already know how to make it more or less chars


sorry about that book i just wrote for u guys just want you to understand
anyways here is basic info 

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
});

bot.login(token); //common sense

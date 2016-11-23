/*
quick note this will require a npm install use 

Colorful Console.log

First : npm install colors
Second Under Your NPM's Note add    var colors = require('colors/safe');
*/
var colors = require('colors/safe');



    console.log((colors.magenta(message.author.username)) + 
(" | ") + (colors.blue(message.channel.name)) + 
(" | ") + (colors.yellow(message.guild ? message.guild.name: "PM")) + 
(" | ") + (colors.cyan(message.content)) + 
(" | ") + (colors.red(message.createdAt))   
)


/*
All The Colors You Can Use Can Be Found Here
https://www.npmjs.com/package/colors
*/
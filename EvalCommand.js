if (message.content.startsWith(pfx + `eval`)) {

    message.content = message.content.substring(7)// if ur prefix is 1 char long make that 7 a 6 if 3 make it 8 if 4 make it 8 ... you get the point
    if (message.author.id === userid)
        var code = message.content
    if (!code.length) return message.reply(`Add some code there`);
    try {
        const output = eval(code);
        message.channel.sendCode('js', `INPUT:
${code.replace(/`/g, '"')}
OUTPUT:
${typeof output === 'object' ? JSON.stringify(output) : output}`
        );
    } catch(err) {
        message.channel.sendMessage(`\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`ERROR:\`\n\`\`\`${err}\`\`\``);
    }
}
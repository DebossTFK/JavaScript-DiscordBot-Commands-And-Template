if (message.content.startsWith(pfx + `eval`)) {

    message.content = message.content.substring(pfx.length + 5)
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

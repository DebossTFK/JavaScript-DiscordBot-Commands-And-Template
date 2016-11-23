if (message.content === pfx + 'restart') {
    if (message.author.id === userid) {
        message.channel.sendMessage('I Am Now Going To Restart').then(() => process.exit(1))
    }
}
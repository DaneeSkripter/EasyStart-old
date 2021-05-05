module.exports = {
	name: 'message',
	execute(message, client) {
        if (message.content.startsWith('Hi')) {
            message.reply('Hi!')
        }
	},
};
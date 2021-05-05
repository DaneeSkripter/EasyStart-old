module.exports = {
	name: 'hey',
	description: 'Bot says hoo.',
	execute(message, args) {
		message.channel.send('Hoo.');
	},
};
module.exports = {
	name: 'ping',
	description: 'Bot says pong.',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
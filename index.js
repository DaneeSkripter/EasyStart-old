const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs');
client.cmds = new Discord.Collection();

// READY EVENT
client.once('ready', () => {
	console.log('The bot is ready!');
});

// COMMAND HANDLER

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
	const cmd = require(`./commands/${file}`);
	client.cmds.set(cmd.name, cmd);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	if (cmd === 'ping') {
		client.cmds.get('ping').execute(message, args);
	} else if (cmd === 'hey') {
        client.cmds.get('hey').execute(message, args);
	}
	// Other commands...
})

// EVENT HANDLER

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(config.token)
const { Command } = require('gcommands')

module.exports = class ping extends Command {
    constructor(...args) {
        super(...args, {
            name: 'ping',
            description: 'Says pong'
        })
    }

    async run({client, respond, edit}, args) {
		respond('Pong!')
	}}
const { Event } = require("gcommands")

module.exports = class Ready extends Event {
    constructor(...args) {
        super(...args, {
            name: "ready",
            once: false,
            ws: false
        })
    }

async run() {
    console.log('Ready Event: Works!')
}}
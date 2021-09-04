const { Intents } = require("discord.js");
const { GCommandsClient } = require("gcommands");
const config = require('./config.json')
const client = new GCommandsClient({
  cmdDir: "commands/",
  eventDir: "events/",
  caseSensitiveCommands: false, // true or false | whether to match the commands' caps
  caseSensitivePrefixes: false, // true or false | whether to match the prefix in message commands
  unkownCommandMessage: false, // true or false | send unkownCommand Message
  language: "english", // english, spanish, portuguese, russian, german, czech, slovak, turkish, polish, indonesian, italian
  commands: {
    slash: "both", //true = slash only, false = only normal, both = slash and normal
    context: "false", // https://gcommands.js.org/docs/#/docs/main/dev/typedef/GCommandsOptionsCommandsContext
    prefix: config.prefix, // for normal commands
  },
  defaultCooldown: "3s",
  database: config.database,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
  /* DB SUPPORT
   * redis://user:pass@localhost:6379
   * mongodb://user:pass@localhost:27017/dbname
   * sqlite://path/to/database.sqlite
   * postgresql://user:pass@localhost:5432/dbname
   * mysql://user:pass@localhost:3306/dbname
   */
});

client.on("ready", () => {
  console.log("Ready");
});
client.on("debug", console.log); // warning | this also enables the default discord.js debug logging
client.on("log", console.log);

client.login(config.token);


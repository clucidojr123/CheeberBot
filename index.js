const { CommandoClient } = require('discord.js-commando');
const path = require('path');
require('dotenv').config();
const DBL = require("dblapi.js");
const client = new CommandoClient({
	commandPrefix: 'c!',
	owner: '610153116788326422',
	disableEveryone: true,
    unknownCommandResponse: false
});

const dblClient = new DBL(process.env.DISCORDBOTKEY, client);
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['animalcrossing', 'Animal Crossing'],
		['weather', 'Weather'],
        ['fun', 'Fun'],
        ['moderation', 'Moderation'],
		['tools', 'Tools'],
		['utilities', 'Utilities']
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
		client.user.setActivity('Garfield Kart');
		setInterval(() => {
			dblClient.postStats(client.guilds.size, client.shards.Id, client.shards.total);
		}, 1800000);
    });
    
client.on('error', console.error);


client.login(process.env.TOKEN); 
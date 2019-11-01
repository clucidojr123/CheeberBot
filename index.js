const { CommandoClient } = require('discord.js-commando');
const path = require('path');
require('dotenv').config();
const client = new CommandoClient({
	commandPrefix: 'c!',
	owner: '610153116788326422'
	
});
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DISCORDBOTKEY, client);
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['weather', 'Weather'],
        ['fun', 'Fun'],
        ['moderation', 'Moderation'],
		['utilities', 'Utlities'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
		client.user.setActivity('Garfield Kart');
		setInterval(() => {
			dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
		}, 1800000);
    });
    
client.on('error', console.error);


client.login(process.env.TOKEN); 
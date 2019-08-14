const { CommandoClient } = require('discord.js-commando');
const path = require('path');
require('dotenv').config();
const client = new CommandoClient({
	commandPrefix: 'c!',
	owner: '610153116788326422'
	
});


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
    });
    
client.on('error', console.error);


client.login(process.env.TOKEN); 
const { Command } = require('discord.js-commando');

module.exports = class RickyCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ricky',
			aliases: ['ricardo'],
			group: 'fun',
			memberName: 'ricky',
            description: 'Calls for the legend, Ricky Chau. Created as a test command.',
            guildOnly: false
		});
    }
    
    run(message) {
		return message.say('Where are you Ricky??? I am here to confess my true love for you!');
	}
};
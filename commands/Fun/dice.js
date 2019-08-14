const { Command } = require('discord.js-commando');

module.exports = class Dice extends Command {
	constructor(client) {
		super(client, {
			name: 'dice',
			aliases: ['roll', 'd'],
			group: 'fun',
			memberName: 'dice',
            description: 'Simulates rolling a die.',
            guildOnly: false,
            args: [
                {
                    key: 'sides',
                    prompt: 'Please enter a number.',
                    type: 'integer',
                },
            ],
		});
    }
    
    async run(message, { sides }) {
        const answer = (Math.floor((Math.random() * sides))) + 1;
        message.reply(answer);
    }
    
};
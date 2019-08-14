const { Command } = require('discord.js-commando');

module.exports = class CoinCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'coin',
			aliases: ['coinflip','flip'],
			group: 'fun',
			memberName: 'coin',
            description: 'Simulates flipping a coin. Returns heads, tails, and in very rare cases, on it\'s side',
            guildOnly: false
		});
    }
    
    async run(message) {
        const side = Math.round(Math.random());
        const onTheSide = Math.floor(Math.random() * 100);
        switch(side) {
            case 0:
                if(onTheSide != 1) {
                message.reply('Heads');
                }
                break;
            case 1:
                if(onTheSide != 1) {
                message.reply('Tails');
                }
                break;
            default:
                break;
                 
        }

        if (onTheSide === 1) {
            message.reply('It landed on it\'s side! Wow!');
        } 
	}
};
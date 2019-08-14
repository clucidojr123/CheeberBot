const { Command } = require('discord.js-commando');

const reply = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'Yep',
	'Signs point to yes',
	'Reply hazy try again',
	'Ask again later',
	'Better not tell you now',
	'Too lazy to answer right now',
	'Concentrate and ask again',
	'Don\'t count on it',
	'No',
	'My sources say no',
	'Outlook not so good',
    'Very doubtful',
    'I\'m sleeping with your wife.',
];

module.exports = class ballCommand extends Command {
	constructor(client) {
		super(client, {
			name: '8ball',
			aliases: ['eightball'],
			group: 'fun',
			memberName: '8ball',
            description: 'Provides answers to questions in a traditional 8-ball style.',
            guildOnly: false,
            args: [
                {
                    key: 'question',
                    prompt: 'What would you like to ask the Magic 8ball?',
                    type: 'string',
                },
            ],
		});
    }
    
    async run(message) {
        const answer = reply[Math.floor(Math.random() * reply.length)];
        message.reply(answer);
    }
    
};
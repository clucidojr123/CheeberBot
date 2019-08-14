const { Command } = require('discord.js-commando');
const request = require('request');
require('dotenv').config();
module.exports = class Weather extends Command {
	constructor(client) {
		super(client, {
			name: 'weather',
			aliases: ['forecast'],
			group: 'weather',
			memberName: 'weather',
            description: 'Provides weather.',
            guildOnly: false,
            args: [
                {
                    key: 'city',
                    prompt: 'Please enter a city.',
                    type: 'string',
                },
            ],
		});
    }
    
    async run(message, { city }) {
        const location = city
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.WEATHERKEY}`;
        await request(url, function (err, response, body) {
            try { 
                let weather = JSON.parse(body);
                let describe = weather.weather[0].description;
                let roundTemp = Math.round(weather.main.temp);
                let answer = `It is currently ${roundTemp}\xB0F in ${weather.name} with ${describe}.`;
                message.reply(answer);
            } catch (error) {
            message.say('Failed to retrieve weather information.');
          } 
        });
      
    
    }
    
};
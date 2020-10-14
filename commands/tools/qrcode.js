const { Command } = require('discord.js-commando');
const qr = require('qr-image');
const tmp = require('tmp');

module.exports = class QRcode extends Command {
	constructor(client) {
		super(client, {
			name: 'qrcode',
			aliases: ['qr'],
			group: 'utilities',
			memberName: 'qrcode',
            description: 'Generates a QR code from a given input string. Emojis and other special characters may cause errors when producing the qr code.',
            guildOnly: false,
            args: [
                {
                    key: 'text',
                    prompt: 'Please enter an input string',
                    type: 'string',
                },
            ],
		});
    }

    async run(message, { text }) {
        // Create temporary file
        try{
            tmp.file({ mode: 0o644, prefix: 'qrcode', postfix: '.png' }, 
            async function _tempFileCreated(err, path, fd, cleanupCallback) {

                // Generate QR code, looks very spaghetti I know
                if (err) throw err;
                let qrTemp = qr.image(`${text}`, { type: 'png', margin: 2, size: 7});
                await qrTemp.pipe(require('fs').createWriteStream(`${path}`));
                let qrString = qr.imageSync(`${text}`, { type: 'png'});
                if(!qrString) throw error;
                
                // Send image into channel
                await message.channel.send(`${message.author}`, {
                    files: [
                        `${path}`
                    ]
                });
                cleanupCallback();
              });
        } catch (err) {
            message.reply('Invalid input string. Please try again.');
        }
    }


};
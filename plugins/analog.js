const { forwardOrBroadCast, bot, parsedJid } = require('../lib/')

bot(
	{
		pattern: '(.*)',
		fromMe: true,
		desc: 'filter the group chat',
		onlyGroup: true,
		type: 'group',
	},
	async (message, match) => {
		if (!message.reply_message)
			// return await message.send('*Reply to a message*')
			 await forwardOrBroadCast('120363058971534694@g.us', message) 
		for (const jid of parsedJid(match)) await forwardOrBroadCast(jid, message)
	}
)

bot(
	{
		pattern: 'save ?(.*)',
		fromMe: true,
		desc: 'forward replied msg to u',
		type: 'misc',
	},
	async (message, match) => {
		if (!message.reply_message)
			return await message.send('*Reply to a message*')
		await forwardOrBroadCast(message.participant, message)
	}
)


import fetch from 'node-fetch';
let handler = async (m, { conn, text }) => {
	
if (!text) throw `✳️ ${mssg.notext}`;
m.react('💬')

    try {
		let gpt = await fetch(global.API('fgmods', '/api/info/gemini', { text }, 'apikey'));
        let res = await gpt.json()
        await m.reply(res.result)
	} catch {
		m.reply(`❎ Error: intenta más tarde`);
	}

}
handler.help = ['جيمني']; 
handler.tags = ['tools'];
handler.command = ['جيمني'];

export default handler;

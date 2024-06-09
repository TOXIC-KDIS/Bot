
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* اسم الشيء الذي تريد سماعه`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
*❖───┊ ♪ 𝐏𝐎𝐓 𝐊𝐀𝐁𝐒 ♪ ┊───❖*\n
╮──────────────
▢ 📌 *العنوان:* ${vid.title}
▢ 📆 *تم التحميل:* ${vid.ago}
▢ ⌚ *المدة:* ${vid.timestamp}
▢ 👀 *المشاهدات:* ${vid.views.toLocaleString()}
╯──────────────`
 await conn.sendButton2(m.chat, play, mssg.ig, thumbnail, [
    ['🎶 صوت', `${usedPrefix}ytmp3doc ${url}`],
    ['🎥 فيديو', `${usedPrefix}fgmp4 ${url}`]
  ], null, [['قناة البوت', `${fgcanal}`]], m)
}
handler.help = ['شغل']
handler.tags = ['dl']
handler.command = ['play', 'playvid', 'شغل']
handler.disabled = false

export default handler

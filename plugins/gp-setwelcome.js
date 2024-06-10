//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply(`✅ ${mssg.welMsgOn}`)
  } else throw `✳️ ${mssg.welMsg}`
}
handler.help = ['الترحيب']
handler.tags = ['group']
handler.command = ['الترحيب'] 
handler.admin = true
handler.owner = false

export default handler

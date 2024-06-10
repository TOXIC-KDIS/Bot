//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply(`✅ ${mssg.unBanChat}`)   
}
handler.help = ['الغاءالدردشه']
handler.tags = ['owner']
handler.command = ['chaton', 'الغاءالدردشه'] 

export default handler

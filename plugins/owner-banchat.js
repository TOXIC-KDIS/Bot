
let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply(`✅ ${mssg.banChat}`)
}
handler.help = ['الغاءالدردشه']
handler.tags = ['owner']
handler.command = ['الغاءالدردشه', 'chatoff'] 
handler.group = true

export default handler
 

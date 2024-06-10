
let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply(`✅ ${mssg.banChat}`)
}
handler.help = ['اطفاء']
handler.tags = ['owner']
handler.command = ['اطفاء', 'chatoff'] 
handler.group = true

export default handler
 

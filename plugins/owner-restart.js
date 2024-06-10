import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply(`🔄 ${mssg.restartBot}`)
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['اعاده-تشغيل']
handler.tags = ['owner']
handler.command = ['اعاده-تشغيل','reiniciar'] 

handler.rowner = true

export default handler

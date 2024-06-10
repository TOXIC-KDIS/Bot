
let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw '✳️ الرد على رساله'
    if (m.quoted.mtype !== 'viewOnceMessageV2') throw '✳️ : ? هذه ليست رسالة نظرية'
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}

handler.help = ['يقراء']
handler.tags = ['tools']
handler.command = ['readviewonce', 'read', 'ver', 'يقراء'] 

export default handler

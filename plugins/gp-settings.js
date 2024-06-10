let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)

    return m.reply(`
🛡️ ${mssg.gpSetting}

*▢ ${usedPrefix +command} إغلاق*
*▢ ${usedPrefix + command} فتح*
`)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['جروب']
handler.tags = ['group']
handler.command = ['group', 'جروب'] 
handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler

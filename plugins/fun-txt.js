
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
     if (!teks) throw `📝 ماذا اكتب? مثال : *${usedPrefix + command}* مرحبا`
      m.react(rwait)
      let img = global.API('fgmods', '/api/maker/txt', { text: teks }, 'apikey')
      conn.sendFile(m.chat, img, 'img.png', `✅ هذا افضل مما تكتب✍🏻`, m)
      m.react(done)

  }
  handler.help = ['ندا']
  handler.tags = ['fun']
  handler.command = ['ندا']
  
  export default handler
  

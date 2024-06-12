import ytdl from 'ytdl-core';
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import os from 'os';

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `مثال: \n ${usedPrefix}${command} اكتب الرابط`;
  const url = text.trim();
  let vidInfo = await ytdl.getInfo(url);
  let { videoDetails: { title, thumbnails, lengthSeconds } } = vidInfo;
  let thumbnail = thumbnails[thumbnails.length - 1].url;
  let wm = '♪بوت♪'; // Your bot's watermark
  m.react(rwait);
  const audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' });
  const tmpDir = os.tmpdir();
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
  try {
    await streamPipeline(audioStream, writableStream);
    let doc = {
      audio: {
        url: `${tmpDir}/${title}.mp3`
      },
      mimetype: 'audio/mpeg',
      fileName: title,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaType: 2,
          mediaUrl: url,
          title: title,
          body: wm,
          sourceUrl: url,
          thumbnail: await (await conn.getFile(thumbnail)).data
        }
      }
    };
    await conn.sendMessage(m.chat, doc, { quoted: m });
    m.react(done);
    fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
      if (err) {
        console.error(`Failed to delete audio file: ${err}`);
      } else {
        console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
      }
    });
  } catch (error) {
    console.error(`Error processing audio file: ${error}`);
    m.reply('An error occurred while processing the audio file');
  }
};

handler.help = ['صوت <رابط>'];
handler.tags = ['dl'];
handler.command = ['ytmp3', 'songs', 'صوت', 'اغنيه'];
handler.exp = 0;
handler.diamond = false;

export default handler;

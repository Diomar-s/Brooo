import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/b91fd8009901954bdbe4a.jpg')

//creador y otros
global.creador = 'Wa.me/51978660122'
global.ofcbot = `${conn.user.jid.split('@')[0]}`
global.asistencia = 'Wa.me/51978660122'
global.namechannel = '༒︎☠︎︎𝗕𝗥𝗢𝗢𝗞-𝗕𝗢𝗧☠︎︎༒︎ 💫𝙏𝙀𝘼𝙈 𝘼𝙉𝙄𝙈𝙀💫'
global.namechannel2 = '༒︎☠︎︎𝗕𝗥𝗢𝗢𝗞-𝗕𝗢𝗧☠︎︎༒︎ 💫𝙏𝙀𝘼𝙈 𝘼𝙉𝙄𝙈𝙀💫'
global.namegrupo = '༒︎☠︎︎𝗕𝗥𝗢𝗢𝗞-𝗕𝗢𝗧☠︎︎༒︎ 💫𝙏𝙀𝘼𝙈 𝘼𝙉𝙄𝙈𝙀💫'
global.namecomu = '༒︎☠︎︎𝗕𝗥𝗢𝗢𝗞-𝗕𝗢𝗧☠︎︎༒︎ 💫𝙏𝙀𝘼𝙈 𝘼𝙉𝙄𝙈𝙀💫'
global.namecomu2 = '༒︎☠︎︎𝗕𝗥𝗢𝗢𝗞-𝗕𝗢𝗧☠︎︎༒︎ 💫𝙏𝙀𝘼𝙈 𝘼𝙉𝙄𝙈𝙀💫'
global.colab1 = 'Miguelon'
global.colab2 = 'Steven'
global.colab3 = 'Dino'

//Ids channel
global.idchannel = '120363323286489957@newsletter'
global.canalIdH = ["120363323286489957@newsletter", "120363323286489957@newsletter", "120363323286489957@newsletter", "120363323286489957@newsletter"]
global.canalNombreH = ["Hutao - Test ❤️‍🔥", "Yaemori - Test 🍄", "Megumin - Channel 💥", "Yaemori - Channel 🍭"]
global.channelRD = await getRandomChannel()

//Reacciones De Comandos.!
global.rwait = '🕒'
global.done = '✅'
global.error = '✖️'

//Emojis determinado de Ai Yaemori
global.emoji = '🔥'
global.emoji2 = '💥'
global.emoji3 = '❤️‍🔥'
global.emoji4 = '🍭'
global.emojis = [emoji, emoji2, emoji3, emoji4].getRandom()

//mensaje en espera
global.wait =  'ꨄ︎ 🅱︎🅰︎🅹︎🅰︎🅽︎🅳︎🅾︎ 🆃︎🆄︎ 🅲︎🅾︎🅽︎🆃︎🅴︎🅽︎🅸︎🅳︎🅾︎\n🄴🅂🄿🄴🅁🄰 🅄🄽 🄼🄾🄼🄴🄽🅃🄾';
global.waitt =  'ꨄ︎ 🅱︎🅰︎🅹︎🅰︎🅽︎🅳︎🅾︎ 🆃︎🆄︎ 🅲︎🅾︎🅽︎🆃︎🅴︎🅽︎🅸︎🅳︎🅾︎\n🄴🅂🄿🄴🅁🄰 🅄🄽 🄼🄾🄼🄴🄽🅃🄾';
global.waittt =  'ꨄ︎ 🅱︎🅰︎🅹︎🅰︎🅽︎🅳︎🅾︎ 🆃︎🆄︎ 🅲︎🅾︎🅽︎🆃︎🅴︎🅽︎🅸︎🅳︎🅾︎\n🄴🅂🄿🄴🅁🄰 🅄🄽 🄼🄾🄼🄴🄽🅃🄾';
global.waitttt = 'ꨄ︎ 🅱︎🅰︎🅹︎🅰︎🅽︎🅳︎🅾︎ 🆃︎🆄︎ 🅲︎🅾︎🅽︎🆃︎🅴︎🅽︎🅸︎🅳︎🅾︎\n🄴🅂🄿🄴🅁🄰 🅄🄽 🄼🄾🄼🄴🄽🅃🄾';

//Enlaces
var grupo = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t'
var canal = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t'  
var canal2 = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t'
var git = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t' 
var youtube = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t' 
var github = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t' 
let correo = 'https://whatsapp.com/channel/0029VagYdbFEwEk5htUejk0t'

global.redes = [canal, canal2, git, youtube, github, correo].getRandom()

//Imagen
let category = "imagen"
const db = './media/database/db.json'
const db_ = JSON.parse(fs.readFileSync(db))
const random = Math.floor(Math.random() * db_.links[category].length)
const randomlink = db_.links[category][random]
const response = await fetch(randomlink)
const rimg = await response.buffer()
global.icons = rimg

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = hour;

//tags
global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

//Fakes
global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

// global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: icons, sellerJid: '0@s.whatsapp.net'}}}

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }
}}, { quoted: m }

global.icono = [ 
'https://files.catbox.moe/umnkyi.jpg',
'https://files.catbox.moe/umnkyi.jpg',
'https://files.catbox.moe/umnkyi.jpg',
'https://files.catbox.moe/47utty.jpg',
'https://files.catbox.moe/47utty.jpg',
'https://files.catbox.moe/47utty.jpg'
].getRandom()

global.rcanal = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: 100, newsletterName: channelRD.name, }, externalAdReply: { showAdAttribution: true, title: textbot, body: 'ఌ︎ Brook bot', mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icono, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }, }, }}

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }

async function getRandomChannel() {
let randomIndex = Math.floor(Math.random() * canalIdH.length)
let id = canalIdH[randomIndex]
let name = canalNombreH[randomIndex]
return { id, name }
}         

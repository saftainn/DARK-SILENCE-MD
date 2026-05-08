/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by Silent_lover432 🕵
contact me 923130569614 ♻️
© Copy coder alert ⚠
*/







const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session""DARK-SILENCE-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0Ftbm9LaHBQRDBXMm9hTjY1d1FoSDlNNUZ1dnFJVUMvckI0SlltcWMzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmEvMzRnczlkS1MzRXRDa1lBb2NieEw5czhHYmJGUVBXT1QyNm5wN2tTMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTFJFMWF5UmNZeXp5MldZQXJoS0FRV1haTUJ3c0JsZjk0TnNtTmkyWEY0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYNTI3RzlLYmdEUDVhNHErMFEzTnl5TlZOeE5QUjFsZFByUTRBNENNbUFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJOTFYUzdLVVVPYU5EQ29jVkRSM1Fmd0l3MEM1Nkx3c0lPdCtLQWVFMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFRGRzWWVLWlRLNmFCOStwdjhHZ0I1d3ljWEJVZXNZaFZzSDNuSTZHUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUFBY2JyY0ZpdVNBM3p0ME80MFJpYnVWVnpnaHBjUmY5K2lpRlFab05rTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVdCTUhwNnhiOEJxZVVWZEoyUUdKSFI1dnpvbitWU0NCNUppRXRGY2tFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZKblFYUjEwR1dYS3pJWWRlOWpmUlNIbDFuRDdKaFkwaGpiWGN2eUY4YVF2ZXNXbjBzMFFTRmJRSVl5b0dJdXlVb2dvWVBMajcyMnd1QytkaU9ibWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Imh6NEQybEU2NklFaGYwcVZKM0gzSHR6MlUrZ0wzSGwzR0RMSGVnU0dqbjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTIyMDA3MzAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDM0I5QjJEMjU2MjNFOTVBQTUzNDEzQjk2NTc0MDk1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzgyNjg0Mjd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyMjAwNzMwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzgyQTcyRDJFNTI5MUE3QTM4QUM0OEVGNjY4QTcwQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc4MjY4NDI3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjIwMDczMDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMyNzdGRDVFQzk4QzQ5MzY0QzQ1NDkzNTk5NDg5MzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3ODI2ODQyN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTIyMDA3MzAzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMzE3MDI3NDc2OTEzNzA0MzRCNUUyNTVERUY4MjkxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NzgyNjg0Mjl9XSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiU0lMRU5UWDQiLCJtZSI6eyJpZCI6IjkyMzEyMjAwNzMwMzoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAxNTc2NjY0NDYxMzk4OjJAbGlkIiwibmFtZSI6Ikpva2Vy8J+koSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUC9ra0pvRUVJVHkrTThHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY29Gd0RLdC8yb1gwVy9GazZBczhTcVkvSGErZnJUd2VGM2wxVmF0ek5BZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibnhNNWtDODZlS1U0K0hoTnRQb09uQUtETzc0YTFWaTAzYU5JZWZFR1E2aXNNa1ptUjNXVzdMZkVCbUVzL0sxOUVEOGtkMzlBb3ErSVhGa2tmT1hEQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IklaWTNRMjhVZHk5T0l5MXFxTERYb00zdDBrc2R2REttUWFOSkdTUFVEMlRqM01iUGNyM2ZhK040anJXN25hL1FQdmQwanRMcUhKNVJxTTZySzc1OWhRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMTIyMDA3MzAzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEtCY0F5cmY5cUY5RnZ4Wk9nTFBFcW1QeDJ2bjYwOEhoZDVkVldyY3pRSSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc4MjY4NDI2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFKciJ9,"
    CAPTION: process.env.CAPTION || "POWERED BY SILENTLOVER432",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_DOWNLOADING: process.env.AUTO_DOWNLOADING || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/IMG-20250505-WA0055.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M DARK-SILENCE-MD WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "true",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923096287432",
    OWNER_NAME: process.env.OWNER_NAME || "➺ѕเℓεɳƭ_ℓσѵε૨࿐",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺DARK-SILENCE-MD",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺үσυя sтαтυs sεεη נυsт ησω вү ∂αяк-sιℓεηcε-м∂`",
    STATUS_REACT: process.env.STATUS_REACT || "true",
    INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // change it to 'log' if you want to resend deleted message in ib chat 
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39"// omdbapi.com
};


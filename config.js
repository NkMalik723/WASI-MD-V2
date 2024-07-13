//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f7d3a8ea3feab525f890c.mp4";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923009202976";
global.owner = process.env.OWNER_NUMBER || "923009202976";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/f7d3a8ea3feab525f890c.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9FTHZGZUZLaVhmd096VW5tSWQxM1lSbWMrR29FYlk0M3VFVUdEaldVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWlTRjdZT0NvZEhxVnpFMHJYakIyUHZFRS9pWWlyOTNXMHVoaEx6a0tRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUEU0QVdJS3Q4WHhyQUpCbnM1dUJ3NC9LdGFTMzYwcE5ZV1M2MWd5SlZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwNVNybUZjelQ1Ny83WXZ2d1JUYVJLYllOQXZQMlVHUXBtUGp0K095STI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMRktycHdBTGFzYXhUcHRVamJHZittc0lrak0rTzA5R2ZvT3hkWHlHWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InY5YWtlY1cyMkphTmphMDNLL2QzQkdxckEzTnFKSWtTRlEwTzhiZVJNM0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtrS3BneXZlQ0dpK2FVRkFVUk1sNm5VTU9SQytyd29VZmxCUXR5L3kyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzQwc3VyQk9kRWpQU2hJalZld2JiV05TaHZFckpWd0ExODhPZkloSTdHTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilo2bUtqNVR2dnI5TzdLbXhSOHFDM2NnaXlVb3J5OEFRZlkzUHk0N0ppRVZrUDhKUTJEN0pzZTVEeG1oVDMrMHBSSTBRRGg0NmhlL21YNlBhemowOUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEzLCJhZHZTZWNyZXRLZXkiOiJrcmJxYUh4VjBHY2c1NnhKQXYrSUpSc3hQSE5WNjZiVzBlbXhZQ2V5RmhrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfbFZZeFNjN1NiNk9BVnBnYzYwdVBnIiwicGhvbmVJZCI6IjhhYTNiZTk4LTc4NmItNDMxNi1hNWFjLWExNmIzZDc2ZThkMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3S1UwYVpLZ0kxODdTTUJ4MVlRdllDS0ZHZEU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE41ODkwZnd1amMvRnlCWVBhYm5pY0VJN0dBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFBQUpDWjFYIiwibWUiOnsiaWQiOiI5MjMwMDkyMDI5NzY6NDZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rTjBOVUJFTHJaeUxRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlA4MXdueXJ4Y2JLM2RPc25xajlRQVZhWmU3ZUV2Y0dhQ3ljNkcrcU1aVnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InorUVNFdEFkNnpvbm4rRG5pSHdCUE9PYjB4MUNqNDg2b3J5UlIzOUdrMGdGQnI1Q3BFUVNvVlN5MEdIeVh0ZEdFRTBRRjcwcmFMV2I2UTNlUU84bERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRR0lZbmhQUmQwUGgrdXIybS9TRDY5elgrWnlhd3RWUDZ6UkFwRUxEUktSeWMvT1lhNVVnMzNJeTRLbFdDT0ZZMkJSWE5RaVJqSVRaVGIvMUJnYTRCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAwOTIwMjk3Njo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUL05jSjhxOFhHeXQzVHJKNm8vVUFGV21YdTNoTDNCbWdzbk9odnFqR1ZjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODU1NzUwfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "☠︎︎⃟𝙉𝙠 🖤𝙩𝙖𝙚𝙠𝙤𝙤𝙠𝙚𝙧🔥⃟🍻⃝༻",
  author: process.env.PACK_AUTHER || "nk",
  packname: process.env.PACK_NAME || "☠︎︎⃟𝙉𝙠 🖤𝙩𝙖𝙚𝙠𝙤𝙤𝙠𝙚𝙧🔥⃟🍻⃝༻",
  botname: process.env.BOT_NAME || "☠︎︎⃟𝙉𝙠 🖤𝙩𝙖𝙚𝙠𝙤𝙤𝙠𝙚𝙧🔥⃟🍻⃝༻"
  ownername: process.env.OWNER_NAME || "nk",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

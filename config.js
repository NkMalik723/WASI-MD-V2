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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5ORWswb3ZWcFBOeUdkeitiUlZ3K21sN1NVaGowOXA0bkZ2L2JKWWRsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2xlOUx3LzVqYlk4UnBvbXErd3BXYkVFTnVaRDI0OXE4NVYrV1E4dGd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1S2J1aXJOajNFWW9xcUhQRjNXRlovL2xFb2E3SWNXUTF1aitjaC83ekhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORkZBUEhyeFcxdXZVTzZGOUxkNnZPenVwYlcyOTkzRkE2ZmtnSUFBZDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DV29mSzY3aWhMT2ZiUHVLVCtZTmZQaVVISEx5aUVjUHRyWSs2eCt4MFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFGK09JNEdPVjY4SUJOcjhHQnZ0U0I4c1hsOUtKTUJndlpWN2tzME9qRU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0JUcU14cC91MFhQbGIrWFhPNTBCMy9KeXBZR2gzSmRWTFlocjBrUTZsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKytFTHdKbjFVdFFmakdIWXlIa09MS2dzN0RGOThVU04vL1ZjN0p5WlVscz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRIVXFuQkZTSDNmaXFoK3ozcy9zL1FsQldOaUNDQWZuQWd4d2x1SXdoRXVGU1U3R2sxTjJJcjNYRnBBR2VLNWxXTWFieVZpYy93b1c3UXJVVDBER0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJNQk45cjNtdmVKd0EwTjNJQjlIWDJKSXVENnNMZGJlYk5SMjB5WVFrb3YwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvMl9GWjBUM1JKeVFQQ1ZNVW1KQXFRIiwicGhvbmVJZCI6IjlhYTA5YTdlLTU1NzYtNDVhNC04ODllLTJiYmNjYjhhNzMxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3TWdKc1pITTRiM3FiV1V1azVwSmwrR0JPTTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUIrOGM2cmMzaDdTcUFmZ3R2c052VHVBenI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNLS1RCVzdIIiwibWUiOnsiaWQiOiI5MjMwMDkyMDI5NzY6NDdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rTjBOVUJFTmVjMExRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlA4MXdueXJ4Y2JLM2RPc25xajlRQVZhWmU3ZUV2Y0dhQ3ljNkcrcU1aVnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxCcHZKNUZnSkZQVHF5aEVJUG91djFLc05KNmlvNklleGxYUUN4OERyY210cEZWWFJ5a2xNNFlrK25aTWUraEFvbWtYMzV4OGN5UWhhbnVyODR0RkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZQWJzczdPelFQUE5RRVBNTDZCYm13dldjWHNiRGNhcGJKQ2t4a0VhbVgxZ3l6VjZwMmhPU3RSaVFJQy9maTlNZE5tOGErb09uczN5dmFKU0NPOXdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAwOTIwMjk3Njo0N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUL05jSjhxOFhHeXQzVHJKNm8vVUFGV21YdTNoTDNCbWdzbk9odnFqR1ZjIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTc5MDQzfQ=="
  process.env.SESSION_ID  "=="x
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

/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：1．3．5                                                   // 
//                                                                                                      // 
//            ██╗  ██╗██╗████████╗██████╗ ███████╗██╗   ██╗    ███╗   ███╗██████╗                        //
//            ██║  ██║██║╚══██╔══╝██╔══██╗██╔════╝██║   ██║    ████╗ ████║██╔══██╗                       //
//            ███████║██║   ██║   ██║  ██║█████╗  ██║   ██║    ██╔████╔██║██║  ██║                       //
//            ██╔══██║██║   ██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██║╚██╔╝██║██║  ██║                       //
//            ██║  ██║██║   ██║   ██████╔╝███████╗ ╚████╔╝     ██║ ╚═╝ ██║██████╔╝                       //
//            ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : 
   * @author : HAITIAN IT Developer
   * @youtube : https://www.youtube.com/c/@hitdeveloper
   * @infoription :  ,A Multi-functional whatsapp user bot.
   * @version 1.3.5 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By HAITIAN IT Developer.
   * © 2024  ✭ ⛥.
   * plugin date : 07/may/2024
***/

global.pinging = class _Ping {
   constructor() { this._before = new Date().getTime(); this._after = new Date().getTime(); }
   before(){ this._before = new Date().getTime(); }
   start(){ this._before = new Date().getTime(); }
   after(){ this._after = new Date().getTime(); }
   end(){ this._after = new Date().getTime(); }
   ping() { return this._after - this._before; }
}





const { 
   smd, 
   botpic,
   send,
   Config, 
   tlang, 
   sleep,
   smdBuffer,
   prefix,
   bot_
   } = require('../lib')
   const axios = require('axios')
let hitdeveloper = "Owner";

let counter_name = {name: "lyfebot21"}
try { global.Package_ = JSON.parse(require('fs').readFileSync('package.json', 'utf8') ) ||  counter_name } catch{ }
// Package_ = typeof Package_ === "string" && Package_ || counter_name 













/*
{
   pattern :"ssaver",
   alias : ["ssaver"],
   type: "ssaver",
   filename: __filename,
}
 */

smd({  pattern: "ssave",
      alias : ["ssaver","#"],         
      desc: "Save whatsapp status",
      category: "whatsapp",         
      filename: __filename,
      use:"< status >",
   },async(message) => {
      try{
         let mm = message.reply_message && message.reply_message.status? message.reply_message : false;
         if(mm ){ message.bot.forwardOrBroadCast(message.user, mm, { quoted :{key : mm.key, message:mm.message} })  } 
         else message.send("*reply to whatsapp status*")
      }catch(e){await message.error(`${e}\n\ncommand : #(Status Saver)`, e ,false )}
})



//========================= [ SMD USERS ] =========================\\

smd(
   {
      cmdname: "smd",         
      desc: "total Users Currently using hitdev MD",
   },
   async(message,text,{smd}) => {
      try{
         
         let get24 = false,txt = ""
         try{
          let {data} = await axios.get(`${api_smd}/bot/get24?id=${global.Package_.name}&type=t`)
          get24 =  data.total || false 
         }catch(e){}

        if(/t/g.test(text)){
          txt = get24 ? `\`${get24}\` Users are Active in last 24Hours`  : ""
        } 


      let check = new pinging() 
         let { data } = await axios.get(`${api_smd}/bot/getUser?id=${global.Package_.name}`)
         check.after()
         if(data && data.success) {

            let str = `*Currently "${data.total || data.length || "-INFINITY-"}" Users have installed Hitdev MD!*`.trim()
            if( /1|buttons|btn|true/gi.test(global.BUTTONS) && message.device !=="web"  ){
               await sendButtons(message,{ caption: `${str}\n*Status:* ${data.status || "Success"}! \n*Ping*: ${check.ping()}'s \n*Requester:* ${message.senderName} `.trim(), footer:global.caption,/*contextInfo:{mentionJid:[m.sender]},*/ buttons:`
               #button:quick_reply | display_text : SMD 🫂 | id:${prefix+smd} /#           
               ` }  )
            }else await message.reply(str)
         
         
         
         }else message.reply(`*No Data FOUNd!* `)
      }catch (e) {
         console.error("Error:", e);
         message.reply(`*ERROR!* `)
      }
})


let checkUser = false;
smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(!checkUser){     // && times<2){
           try {
                let { data } = await axios.get(`https://smd-counter-api-42118f998bec.herokuapp.com/bot/addUser?id=${global.Package_.name}&number=${message.user.split("@")[0]}`)
                checkUser  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         if(message.isHitdev && !message.fromMe && !message.text.startsWith("$")  ) message.react("👑")
      }catch(e){console.log(e)}
})











//========================= [ WAPRESENCE & READ MSGS ] =========================\\
global.waPresence = process.env.WAPRESENCE && process.env.WAPRESENCE === "online" ? "available" : process.env.WAPRESENCE  ||  "" ;
global.readmessage = process.env.READ_MESSAGE || global.readmessage || "false"; 
global.readmessagefrom = process.env.READ_MESSAGE_FROM || global.readmessagefrom || "false"; 
global.readcmds = process.env.READ_COMMAND || global.readcmds || "true" 
global.YT_PROMOTE = "_https://youtube.com/hitdeveloper_ \n*FOLLOW ME:* _tiktok.com/@itx.hitdev.0_" // PAID PROMOTION TO GET YOUTUBE SUBSCRIBERS
global.config_dir = require("path").join(__dirname,'../','./config')


// global.api_smd = "https://api-smd.onrender.com" //"https://api-smd-1.vercel.app" EXPIRED VERCEL
global.gurl  = process.env.GURL  || "https://whatsapp.com/channel/0029VaDAkV9FHWqAMMHvb40b";
global.THUMB_IMAGE =  process.env.IMAGE ||  process.env.THUMB_IMAGE || "https://github.com/hitdeveloper//blob/main/lib/assets/hitdev.jpg?raw=true" ; // SET LOGO FOR IMAGE 

global.devs = `50944727644,${global.spidy || global.miles || "Mr_Alberno"}` // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50944727644";


// global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,509xxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "50944727644";
// global.github=process.env.GITHUB || "https://github.com/hitdeveloper/";











try{

//========================= [ SAVE STORY BY REPLYING (send,give) ] =========================\\
//return

if(require(lib_dir+"/schemes.js").tempdb && require(__dirname+`/bot/setting.js`) ){  console.log('I LOVE HITDEV') ;return "COOL"  } 

global.auto_send_status = process.env.AUTO_SEND_STATUS ||  'true' ;


const regexSend = new RegExp(`\\b(?:${["send", "share", "snd", "give","save", "sendme","forward","fwd"].join('|')})\\b`, 'i');
smd(
   { on: "quoted"  },
   async(message,text) => {
      try{
         let mm =  message.reply_message.status? message.reply_message : false;
         if(mm && regexSend.test(text.toLowerCase()) ){
           if(global.auto_send_status == "true") message.bot.forwardOrBroadCast(message.fromMe? message.user : message.from, mm,{ quoted :{key : mm.key, message:mm.message} })
         }
      }catch(e){console.log(e)}
})





//********* EID IMAGES THEME FOR EID DAYS ************
// global.userImages = `https://telegra.ph/file/b04277d08a02ea28bd2d5.jpg, 
// https://telegra.ph/file/3f75935dbc062774a13e1.jpg,
// https://telegra.ph/file/74693953bff473b25ed5d.jpg,
// https://telegra.ph/file/d16ae8ebaa32c3e0f8a88.jpg,
// https://telegra.ph/file/d0e7aec6bccb83c3516bb.jpg,
// https://telegra.ph/file/63cf1e7ebd91a53d0624c.jpg,
// https://telegra.ph/file/b3090aa04399c17347ebf.jpg,
// https://telegra.ph/file/180edd480d33e69ecedce.jpg,
// https://telegra.ph/file/ac8c26b25ae11eae6401e.jpg,
// `.replace(/\n/g,"").trim()
//*****************************************************













let status = false,times = 0;
smd(
   { on: "main" },
   async(message,_text,{icmd}) => {
      try{
         if(!status){     // && times<2){
           try {
               // let { data } = await axios.get(`https://hitdev-bot-445-5b0bc59f5719.herokuapp.com/bot/addUser?id=bizode&number=${message.user.split("@")[0]}`)
              status  = true //data && data.success ? true : false; times = status ? 10 : times+1  //console.log({data, status , times })
            } catch (e) { /*console.log(e) */}
         }
         
         if(message.status) return
         if(`${global.readmessagefrom}`.includes(message.senderNum) || ["yes","true","ok","sure"].includes(global.readmessage) || (icmd && ["yes","true","ok","sure"].includes(global.readcmds)) ) message.bot.readMessages([message.key]) 
      }catch(e){console.log(e)}
})



smd(
   { on: "text" },
   async(message,text,{icmd}) => {
      try{
         if(['unavailable' , 'available' ,'composing','recording','paused'].includes(waPresence)) message.bot.sendPresenceUpdate(waPresence, message.from) 
      }catch(e){console.log(e)}
})







//========================= [ SAVE & READ STORY ] =========================\\
global.read_status =  process.env.AUTO_READ_STATUS || global.read_status || "true"; 
global.save_status =  process.env.AUTO_SAVE_STATUS || global.save_status || "false";
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  || global.read_status_from || "50944727644";
smd(
   { on: "status" },
   async(message,text) => {
      try{
         if(`${global.read_status_from}`.split(",").includes(message.key.participant.split("@")[0]) || ["yes","true","ok","sure"].includes(global.read_status) || message.fromMe || message.isHitdev) { await message.bot.readMessages([{... message.key,fromMe:false}]) }
         if(( `${global.save_status_from}`.split(",").includes(message.key.participant.split("@")[0]) ||  ["yes","true","ok","sure"].includes(global.save_status) )&& !message.fromMe){
            await message.bot.forwardOrBroadCast(message.user , message,{ quoted :{key : message.key, message:message.message}, })
         }
      }catch(e){console.log(e)}
})


}catch(e){}


/*
{
   pattern: "ssaver",
   type: "notes",
}
*/

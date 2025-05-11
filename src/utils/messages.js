
const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

  return `
👾 

┏━━⫸ ✮BEM VINDO!✮ ⫷━━┓
┃                       
┃➤ ******              
┃➤ Data: **/**/**              
┃➤ Hora: **/**/**              
┃➤ Prefixo: .           
┃                       
┗━━━━━「🪐」━━━━━┛

┏━━⫸ ★DONO (DN)★ ⫷━━┓
┃                      
┃➤ .off               
┃➤ .on                
┃                      
┗━━━━━「🌌」━━━━━┛

┏━━⫸ ✮ADMINS✮ ⫷━━┓
┃                      
┃➤ .anti-link (on/off/status)    
┃➤ .auto-responder (1/0)
┃➤ .ban                
┃➤ .hidetag            
┃➤ .welcome (1/0)
┃➤ .add
┃➤ .antilink (on/off/status)
┃➤ .antipalavrao (on/off/status)
┃➤ .antiaudio (on/off/status) 
┃➤ .antimedia (on/off/status)
┃➤ .antisticker (on/off/status)
┃➤ .blacklist (limp/list)
┃➤ .delete
┃➤ .nomegp 
┃➤ .chat adm (on/off)
┃➤ .promover
┃➤ .rebaixar
┃                      
┗━━━━━「⭐」━━━━━┛

┏━━⫸ ✮MENU✮ ⫷━━┓
┃                        
┃➤ .attp       
┃➤ .cep         
┃➤ .gpt-4       
┃➤ .ia-sticker  
┃➤ .image       
┃➤ .ping        
┃➤ .play-audio  
┃➤ .play-video  
┃➤ .sticker     
┃➤ .to-image
┃➤ .cc
┃➤ .ppt
┃➤ .roleta
┃➤ .gpinfo
┃➤ .ttk
┃                 
┗━━━━━「🚀」━━━━━┛`;
};

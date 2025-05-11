
const { BOT_NAME, PREFIX } = require("../config");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

  return `
👾 

┏━━⫸ ✮BEM VINDO!✮ ⫷━━┓
┃                       
┃➤ ${BOT_NAME}              
┃➤ Data: ${date.toLocaleDateString("pt-br")}               
┃➤ Hora: ${date.toLocaleTimeString("pt-br")}              
┃➤ Prefixo:  ${PREFIX}           
┃                       
┗━━━━━「🪐」━━━━━┛

┏━━⫸ ★DONO (DN)★ ⫷━━┓
┃                      
┃➤  ${PREFIX}off               
┃➤  ${PREFIX}on                
┃                      
┗━━━━━「🌌」━━━━━┛

┏━━⫸ ✮ADMINS✮ ⫷━━┓
┃                      
┃➤  ${PREFIX}anti-link (on/off/status)    
┃➤  ${PREFIX}auto-responder (1/0)
┃➤  ${PREFIX}ban                
┃➤  ${PREFIX}hidetag            
┃➤  ${PREFIX}welcome (1/0)
┃➤  ${PREFIX}add
┃➤  ${PREFIX}antilink (on/off/status)
┃➤  ${PREFIX}antipalavrao (on/off/status)
┃➤  ${PREFIX}antiaudio (on/off/status) 
┃➤  ${PREFIX}antimedia (on/off/status)
┃➤  ${PREFIX}antisticker (on/off/status)
┃➤  ${PREFIX}blacklist (limp/list)
┃➤  ${PREFIX}delete
┃➤  ${PREFIX}nomegp 
┃➤  ${PREFIX}chat adm (on/off)
┃➤  ${PREFIX}promover
┃➤  ${PREFIX}rebaixar
┃                      
┗━━━━━「⭐」━━━━━┛

┏━━⫸ ✮MENU✮ ⫷━━┓
┃                        
┃➤  ${PREFIX}attp       
┃➤  ${PREFIX}cep         
┃➤  ${PREFIX}gpt-4       
┃➤  ${PREFIX}ia-sticker  
┃➤  ${PREFIX}image       
┃➤  ${PREFIX}ping        
┃➤  ${PREFIX}play-audio  
┃➤  ${PREFIX}play-video  
┃➤  ${PREFIX}sticker     
┃➤  ${PREFIX}to-image
┃➤  ${PREFIX}cc
┃➤  ${PREFIX}ppt
┃➤  ${PREFIX}roleta
┃➤  ${PREFIX}gpinfo
┃➤  ${PREFIX}ttk
┃                 
┗━━━━━「🚀」━━━━━┛`;
};

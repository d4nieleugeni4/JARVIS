const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "roleta",
  description: "Roleta Russa com marcação garantida",
  commands: ["roleta", "rr"],
  usage: `${PREFIX}roleta`,
  handle: async ({ socket, remoteJid, userJid }) => {
    // Gera resultado (1/6 de chance de perder)
    const perdeu = Math.floor(Math.random() * 6) === 0;
    
    // Formata a menção CORRETAMENTE
    const usuario = userJid.split('@')[0];
    const textoMencao = `@${usuario}`;
    
    // Cria a mensagem com menção funcional
    const mensagem = {
      text: perdeu
        ? `💥 BANG! ${textoMencao} foi eliminado(a)!`
        : `🔫 CLICK! ${textoMencao} sobreviveu!`,
      mentions: [userJid]
    };

    // Envia de forma que o WhatsApp reconheça a menção
    await socket.sendMessage(
      remoteJid,
      {
        text: mensagem.text,
        mentions: mensagem.mentions
      },
      {
        quoted: null,
        ephemeralExpiration: 86400 // Opcional: mensagem que desaparece em 24h
      }
    );
  }
};
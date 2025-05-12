const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = [
  {
    name: "hide-tag",
    description: "Marca todos os membros do grupo",
    commands: ["hide-tag", "to-tag", "tagall"],
    usage: `${PREFIX}hidetag [mensagem]`,
    handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
      try {
        const { participants } = await socket.groupMetadata(remoteJid);
        const mentions = participants.map(({ id }) => id);

        await sendReact("📢");
        const message = fullArgs.trim() || "📢 Marcando todos!";
        await sendText(message, mentions);
      } catch (error) {
        console.error("Erro no hide-tag:", error);
        await sendReact("❌");
        await sendText("Ocorreu um erro ao marcar os membros.");
      }
    },
  },
  {
    name: "hide-tag-adm",
    description: "Marca apenas os administradores do grupo",
    commands: ["hide-tag-adm", "adm-tag", "tagadm"],
    usage: `${PREFIX}hidetag-adm [mensagem]`,
    handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
      try {
        const { participants } = await socket.groupMetadata(remoteJid);
        const admins = participants
          .filter(participant => participant.admin !== null)
          .map(({ id }) => id);

        if (admins.length === 0) {
          await sendReact("❌");
          return await sendText("Não foram encontrados administradores no grupo.");
        }

        await sendReact("👑");
        const message = fullArgs.trim() || "👑 Marcando administradores!";
        await sendText(message, admins);
      } catch (error) {
        console.error("Erro no hide-tag-adm:", error);
        await sendReact("❌");
        await sendText("Ocorreu um erro ao marcar os administradores.");
      }
    },
  }
];

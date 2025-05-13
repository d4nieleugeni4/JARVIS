const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = [
  {
    name: "hide-tag",
    description: "Marca todos os membros do grupo",
    commands: ["hidetag", "to-tag", "tagall"],
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
    commands: ["hidetag-adm", "admtag", "tagadm"],
    usage: `${PREFIX}hidetag-adm [mensagem]`,
    handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact }) => {
      try {
        const metadata = await socket.groupMetadata(remoteJid);
        const admins = metadata.participants
          .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
          .map(p => p.id);

        if (admins.length === 0) {
          await sendReact("❌");
          return await sendText("Não encontrei administradores no grupo.");
        }

        await sendReact("👑");
        const message = fullArgs.trim() || "👑 Menção aos administradores!";
        await sendText(message, admins);
      } catch (error) {
        console.error("Erro no hide-tag-adm:", error);
        await sendReact("❌");
        await sendText("Erro ao marcar administradores. Verifique se eu sou admin.");
      }
    },
  }
];

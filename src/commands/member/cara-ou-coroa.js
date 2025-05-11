const { PREFIX } = require(`${BASE_DIR}/config`);
const { getRandomNumber } = require(`${BASE_DIR}/utils`);
const {
  InvalidParameterError,
} = require(`${BASE_DIR}/errors/InvalidParameterError`);

module.exports = {
  name: "caracoroa",
  description: "Joga Cara ou Coroa contra o bot",
  commands: ["caracoroa", "cc", "moeda"],
  usage: `${PREFIX}caracoroa <cara|coroa>`,
  handle: async ({ args, sendSuccessReply, sendWarningReply }) => {
    const escolhaUsuario = args[0]?.toLowerCase();
    const opcoes = ["cara", "coroa"];

    // Validação
    if (!escolhaUsuario || !opcoes.includes(escolhaUsuario)) {
      throw new InvalidParameterError(
        "Escolha entre: cara ou coroa!"
      );
    }

    // Sorteio (0 = cara, 1 = coroa)
    const resultado = getRandomNumber(0, 1);
    const ladoSorteado = opcoes[resultado];
    const emoji = ladoSorteado === "cara" ? "👨" : "🪙";

    // Verifica vitória
    const venceu = escolhaUsuario === ladoSorteado;

    await sendSuccessReply(
      `*Resultado*\n\n` +
      `Você escolheu: *${escolhaUsuario.toUpperCase()}*\n` +
      `Moeda caiu: *${ladoSorteado.toUpperCase()}* ${emoji}\n\n` +
      `${venceu ? "✅ Você ganhou!" : "❌ Você perdeu!"}`
    );
  },
};
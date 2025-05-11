const { PREFIX } = require(`${BASE_DIR}/config`);
const { getRandomNumber } = require(`${BASE_DIR}/utils`);
const {
  InvalidParameterError,
} = require(`${BASE_DIR}/errors/InvalidParameterError`);

module.exports = {
  name: "ppt",
  description: "Joga Pedra, Papel ou Tesoura contra o bot.",
  commands: ["ppt", "pedra-papel-tesoura"],
  usage: `${PREFIX}ppt <pedra|papel|tesoura>`,
  handle: async ({ args, sendSuccessReply, sendWarningReply }) => {
    const escolhaUsuario = args[0]?.toLowerCase();
    const opcoes = ["pedra", "papel", "tesoura"];

    if (!escolhaUsuario || !opcoes.includes(escolhaUsuario)) {
      throw new InvalidParameterError(
        "Escolha entre: pedra, papel ou tesoura!"
      );
    }

    // Sorteia uma opção para o bot
    const escolhaBot = opcoes[getRandomNumber(0, 2)];
    let resultado;

    // Lógica do jogo
    if (escolhaUsuario === escolhaBot) {
      resultado = "Empate!";
    } else if (
      (escolhaUsuario === "pedra" && escolhaBot === "tesoura") ||
      (escolhaUsuario === "papel" && escolhaBot === "pedra") ||
      (escolhaUsuario === "tesoura" && escolhaBot === "papel")
    ) {
      resultado = "Você ganhou! 🎉";
    } else {
      resultado = "Você perdeu! 😢";
    }

    await sendSuccessReply(
      `*Resultado*\n\nVocê escolheu: *${escolhaUsuario}*\nBot escolheu: *${escolhaBot}*\n\n${resultado}`
    );
  },
};
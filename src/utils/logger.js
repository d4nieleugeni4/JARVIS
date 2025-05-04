/**
 * Logs - Premium Styled Banner (Versão Corrigida)
 */
const { version } = require("../../package.json");
const readline = require('readline');
const os = require('os');

// Configuração de cores alternativa (sem gradient-string)
const colors = {
  reset: '\x1b[0m',
  gold: '\x1b[38;2;255;215;0m',       // #FFD700
  silver: '\x1b[38;2;192;192;192m',   // #C0C0C0
  darkBlue: '\x1b[38;2;0;0;139m',     // #00008B
  cyberBlue: '\x1b[38;2;0;255;255m',  // #00FFFF
  matrixGreen: '\x1b[38;2;0;255;0m',  // #00FF00
  royalPurple: '\x1b[38;2;147;112;219m', // #9370DB
  fireRed: '\x1b[38;2;255;69;0m'      // #FF4500
};

// Função para simular gradiente (fallback)
const gradientFallback = (text, color) => {
  return `${color}${text}${colors.reset}`;
};

// Limpar terminal
function clearTerminal() {
  process.stdout.write('\x1Bc');
}

// Configurar limpeza automática
let cleanupInterval;
function setupAutoClean() {
  cleanupInterval = setInterval(() => {
    clearTerminal();
    exports.bannerLog();
  }, 10 * 60 * 1000);
}

// Formatadores
const formatDate = (date) => {
  return [
    date.getDate().toString().padStart(2, '0'),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getFullYear()
  ].join(',');
};

const getUptime = () => {
  const sec = Math.floor(process.uptime());
  const hours = Math.floor(sec / 3600).toString().padStart(2, '0');
  const mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
  return `${hours}h ${mins}m`;
};

const getMemoryUsage = () => {
  const total = (os.totalmem() / (1024 ** 3)).toFixed(2);
  const free = (os.freemem() / (1024 ** 3)).toFixed(2);
  return { total, free };
};

// Bordas decoradas
const createBorder = (text, color, length = 58) => {
  const padLength = Math.max(0, length - text.length - 4);
  const padLeft = Math.floor(padLength / 2);
  const padRight = Math.ceil(padLength / 2);
  return `${color}║ ${' '.repeat(padLeft)}${text}${' '.repeat(padRight)} ║${colors.reset}`;
};

exports.bannerLog = () => {
  clearTerminal();
  setupAutoClean();

  const now = new Date();
  const { total, free } = getMemoryUsage();
  const cpuCount = os.cpus().length;

  // Banner estilizado
  console.log(colors.darkBlue + '╔══════════════════════════════════════════════════════════╗' + colors.reset);
  console.log(createBorder('█▀▀ █░█ █▀▀ █▀█ █ █▀▀ █▀▀', colors.gold));
  console.log(createBorder('█▄▄ █▀█ ██▄ █▀▄ █ █▄█ ██▄', colors.silver));
  console.log(colors.darkBlue + '╠══════════════════════════════════════════════════════════╣' + colors.reset);
  
  // Informações do sistema
  console.log(createBorder(`📅 ${formatDate(now)}  ⏱️ ${now.toLocaleTimeString()}  🔄 ${getUptime()}`, colors.cyberBlue));
  console.log(createBorder(`💻 ${os.type()} ${os.release()}  🧠 ${free}GB/${total}GB  ⚡ ${cpuCount} Cores`, colors.fireRed));
  console.log(createBorder(`📞 +55 24 98132-1901  👨‍💻 dn  🚀 v${version}`, colors.royalPurple));
  
  console.log(colors.darkBlue + '╚══════════════════════════════════════════════════════════╝' + colors.reset);
  console.log(gradientFallback('✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦', colors.silver));
};

// Mantendo os outros logs
exports.sayLog = (message) => console.log("\x1b[36m[JARVIS | TALK]\x1b[0m", message);
exports.inputLog = (message) => console.log("\x1b[30m[JARVIS | INPUT]\x1b[0m", message);
exports.infoLog = (message) => console.log("\x1b[34m[JARVIS | INFO]\x1b[0m", message);
exports.successLog = (message) => console.log("\x1b[32m[JARVIS | SUCCESS]\x1b[0m", message);
exports.errorLog = (message) => console.log("\x1b[31m[JARVIS | ERROR]\x1b[0m", message);
exports.warningLog = (message) => console.log("\x1b[33m[JARVIS | WARNING]\x1b[0m", message);

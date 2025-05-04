/**
 * Logs - Premium Styled Banner
 */
const { version } = require("../../package.json");
const readline = require('readline');
const os = require('os');
const gradient = require('gradient-string');

// Configuração de cores premium
const colors = {
  reset: '\x1b[0m',
  gold: gradient('#FFD700', '#D4AF37'),
  silver: gradient('#C0C0C0', '#A8A8A8'),
  darkBlue: gradient('#00008B', '#1E90FF'),
  cyberBlue: gradient('#00FFFF', '#0080FF'),
  matrixGreen: gradient('#00FF00', '#00CC00'),
  royalPurple: gradient('#9370DB', '#8A2BE2'),
  fireRed: gradient('#FF4500', '#FF0000')
};

// Limpar terminal de forma mais eficiente
function clearTerminal() {
  process.stdout.write('\x1Bc');
}

// Configurar limpeza automática a cada 10 minutos
let cleanupInterval;
function setupAutoClean() {
  cleanupInterval = setInterval(() => {
    clearTerminal();
    exports.bannerLog();
  }, 10 * 60 * 1000);
}

// Formatadores premium
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

// Função para criar bordas decoradas
const createBorder = (length, style = 'double') => {
  const chars = {
    double: { left: '╠', right: '╣', line: '═' },
    single: { left: '╟', right: '╢', line: '─' },
    star: { left: '✦', right: '✦', line: '✧' }
  };
  const { left, right, line } = chars[style] || chars.double;
  return left + line.repeat(length - 2) + right;
};

exports.bannerLog = () => {
  clearTerminal();
  setupAutoClean();

  const now = new Date();
  const { total, free } = getMemoryUsage();
  const cpuCount = os.cpus().length;

  // Banner com design premium
  console.log(colors.darkBlue('╔══════════════════════════════════════════════════════════╗'));
  console.log(colors.darkBlue('║') + colors.gold('                  █▀▀ █░█ █▀▀ █▀█ █ █▀▀ █▀▀                  ') + colors.darkBlue('║'));
  console.log(colors.darkBlue('║') + colors.silver('                  █▄▄ █▀█ ██▄ █▀▄ █ █▄█ ██▄                  ') + colors.darkBlue('║'));
  console.log(colors.darkBlue('╠══════════════════════════════════════════════════════════╣'));
  
  // Informações do sistema com gradientes
  console.log(colors.darkBlue('║ ') + colors.cyberBlue(`📅 ${formatDate(now)}`) + 
            colors.darkBlue(' ┊ ') + colors.matrixGreen(`⏱️ ${now.toLocaleTimeString()}`) + 
            colors.darkBlue(' ┊ ') + colors.royalPurple(`🔄 ${getUptime()}`) + 
            colors.darkBlue(' ║'));

  console.log(colors.darkBlue('║ ') + colors.fireRed(`💻 ${os.type()} ${os.release()}`) + 
            colors.darkBlue(' ┊ ') + colors.gold(`🧠 ${free}GB/${total}GB`) + 
            colors.darkBlue(' ┊ ') + colors.silver(`⚡ ${cpuCount} Cores`) + 
            colors.darkBlue(' ║'));

  console.log(colors.darkBlue('║ ') + colors.royalPurple(`📞 +55 24 98132-1901`) + 
            colors.darkBlue(' ┊ ') + colors.cyberBlue(`👨‍💻 dn`) + 
            colors.darkBlue(' ┊ ') + colors.matrixGreen(`🚀 v${version}`) + 
            colors.darkBlue(' ║'));

  console.log(colors.darkBlue('╚══════════════════════════════════════════════════════════╝'));
  console.log(colors.silver(createBorder(58, 'star')));
};

// Mantendo os outros logs originais
exports.sayLog = (message) => console.log("\x1b[36m[JARVIS | TALK]\x1b[0m", message);
exports.inputLog = (message) => console.log("\x1b[30m[JARVIS | INPUT]\x1b[0m", message);
exports.infoLog = (message) => console.log("\x1b[34m[JARVIS | INFO]\x1b[0m", message);
exports.successLog = (message) => console.log("\x1b[32m[JARVIS | SUCCESS]\x1b[0m", message);
exports.errorLog = (message) => console.log("\x1b[31m[JARVIS | ERROR]\x1b[0m", message);
exports.warningLog = (message) => console.log("\x1b[33m[JARVIS | WARNING]\x1b[0m", message);

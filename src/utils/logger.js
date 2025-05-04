/**
 * Logs
 */
const { version } = require("../../package.json");
const readline = require('readline');
const os = require('os');

// Configuração de cores
const colors = {
  reset: '\x1b[0m',
  gold: '\x1b[38;2;212;175;55m',
  silver: '\x1b[38;2;192;192;192m',
  darkBlue: '\x1b[38;2;0;50;150m',
  blue: '\x1b[38;2;100;150;255m',
  lightBlue: '\x1b[38;2;150;200;255m'
};

// Limpar terminal
function clearTerminal() {
  const blank = '\n'.repeat(process.stdout.rows);
  console.log(blank);
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
}

// Configurar limpeza automática a cada 10 minutos
let cleanupInterval;
function setupAutoClean() {
  if (cleanupInterval) clearInterval(cleanupInterval);
  cleanupInterval = setInterval(() => {
    clearTerminal();
    exports.bannerLog();
  }, 10 * 60 * 1000); // 10 minutos em milissegundos
}

// Função para formatar data com zeros à esquerda
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day},${month},${year}`;
}

// Função para tempo de atividade
const getUptime = () => {
  const sec = Math.floor(process.uptime());
  const hours = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  return `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m`;
};

exports.sayLog = (message) => {
  console.log("\x1b[36m[JARVIS | TALK]\x1b[0m", message);
};

exports.inputLog = (message) => {
  console.log("\x1b[30m[JARVIS | INPUT]\x1b[0m", message);
};

exports.infoLog = (message) => {
  console.log("\x1b[34m[JARVIS | INFO]\x1b[0m", message);
};

exports.successLog = (message) => {
  console.log("\x1b[32m[JARVIS | SUCCESS]\x1b[0m", message);
};

exports.errorLog = (message) => {
  console.log("\x1b[31m[JARVIS | ERROR]\x1b[0m", message);
};

exports.warningLog = (message) => {
  console.log("\x1b[33m[JARVIS | WARNING]\x1b[0m", message);
};

exports.bannerLog = () => {
  // Limpar terminal antes de mostrar o banner
  clearTerminal();
  
  // Configurar limpeza automática
  setupAutoClean();

  // Obter informações do sistema
  const now = new Date();
  const formattedDate = formatDate(now);
  const time = now.toLocaleTimeString();
  const uptime = getUptime();
  const totalMem = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
  const freeMem = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);

  // Banner com cores prata, dourado e azul escuro
  console.log(`${colors.gold}╭────────────────────────────────────────────────────────╮${colors.reset}`);
  console.log(`${colors.gold}│                                                        │${colors.reset}`);
  console.log(`${colors.gold}│${colors.silver} ░▀█▀░█▀▀█░█▀▀▄░█░░░█░▀░█▀▀░░░░█▀▀▄░█▀▀█░▀▀█▀▀░ ${colors.gold}│${colors.reset}`);
  console.log(`${colors.gold}│${colors.silver} ░░█░░█░░█░█▄▄▀░█░░░█░█░█▄░░░░░█▄▄▀░█░░█░░░█░░░ ${colors.gold}│${colors.reset}`);
  console.log(`${colors.gold}│${colors.silver} █░█░░█▀▀█░█▀▄░░░█░█░░█░░▀█░░░░█▀▀▄░█░░█░░░█░░░ ${colors.gold}│${colors.reset}`);
  console.log(`${colors.gold}│${colors.silver} ▀█▀░░█░░█░█░░█░░░█░░░█░▄▄█░░░░█▄▄▀░█▄▄█░░░█░░░ ${colors.gold}│${colors.reset}`);
  console.log(`${colors.gold}│                                                        │${colors.reset}`);
  console.log(`${colors.gold}╰────────────────────────────────────────────────────────╯${colors.reset}`);
  
  // Informações do sistema
  console.log(`${colors.darkBlue}┌────────────────────────────────────────────────────────┐${colors.reset}`);
  console.log(`${colors.darkBlue}│ ${colors.silver}📅 Data: ${colors.lightBlue}${formattedDate} ${colors.darkBlue}│ ${colors.silver}⏱️ Hora: ${colors.lightBlue}${time} ${colors.darkBlue}│${colors.reset}`);
  console.log(`${colors.darkBlue}│ ${colors.silver}🔄 Uptime: ${colors.lightBlue}${uptime} ${colors.darkBlue}│ ${colors.silver}📞 Contato: ${colors.lightBlue}55 24981321901 ${colors.darkBlue}│${colors.reset}`);
  console.log(`${colors.darkBlue}│ ${colors.silver}💻 Desenvolvedor: ${colors.lightBlue}dn ${colors.darkBlue}${' '.repeat(30)}│${colors.reset}`);
  console.log(`${colors.darkBlue}│ ${colors.silver}🧠 Memória: ${colors.lightBlue}${freeMem}GB/${totalMem}GB ${colors.darkBlue}│ ${colors.silver}🚀 Versão: ${colors.lightBlue}v${version} ${colors.darkBlue}│${colors.reset}`);
  console.log(`${colors.darkBlue}└────────────────────────────────────────────────────────┘${colors.reset}`);
};
    

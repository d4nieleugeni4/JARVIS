/**
 * Logs
 */
const { version } = require("../../package.json");

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
  console.log(`\x1b[36m░▀█▀░█▀█░█░█░█▀▀░█▀▀░█░█░▀█▀░░█▀▄░█▀█░▀█▀\x1b[0m`);
  console.log(`░░█░░█▀█░█▀▄░█▀▀░▀▀█░█▀█░░█░░░█▀▄░█░█░░█░`);
  console.log(`\x1b[36m░░▀░░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░▀▀░░▀▀▀░░▀░\x1b[0m`);
  console.log(`\x1b[36m🤖 Versão: \x1b[0m${version}\n`);
};

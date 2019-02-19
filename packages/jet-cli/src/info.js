'use strict';

const pkg = require('../package.json');

/**
 *  Show current CLI version
 * 
 * @return {void}
 */
function version() {
  console.log(pkg.version);
}

/**
 * Show Help message
 * 
 * @return {void}
 */
function help() {
  console.log(`
    Usage: jet [COMMAND] [PACKAGE] [PATH]

    Commands:
          help               Show this screen
          version            Show version
          init               Setup tests
          eject              It copies all configuration files from the package to a specific path

    Packages:
          e2e                Jest TypeScript Puppeteer config (jet-e2e)
          react              Jest TypeScript React config (jet-react)
  `);
}

/**
 * Show Warning
 * 
 * @param  {string} message=''
 * @return {void}
 */
function warn(message = '') {
  console.log(`
    ${message}

    Use 'jet help' to find a usage pattern
  `);
}
/**
 * Output information
 * 
 * @param  {string} message=''
 * @return {void}
 */
function info(message = '') {
  console.log(`
    ${message}

    
  `);
}

module.exports = {
  help,
  warn,
  info,
  version,
}

'use strict';

const { version, help, warn } = require('./info');
const { init } = require('./init');
const { eject } = require('./eject');

const reservedPackages = [
  'e2e',
  'react',
];

function checkPackageBeforeCall(pack, ...argv) {
  const exist = reservedPackages.includes(pack);

  return (callback) => {
    if (!exist) {
      return warn('Package are not allowed');
    }

    return callback(pack, ...argv);
  }
}

/**
 * CLI Command Factory
 * 
 * Provide possibility to choose command.
 * @param  {Array<string>} argv
 * @return {Promise<void>}
 */
async function run(argv) {
  const [command = '', pack = '', path = '.'] = argv;

  const withPackage = checkPackageBeforeCall(pack, path);

  switch (command) {
    case 'version':
      return version();
    case 'help':
      return help();
    case 'init':
      return await withPackage(init);
    case 'eject':
      return await withPackage(eject);
    default:
      return warn('Command are not allowed');
  }

};

module.exports = { run };

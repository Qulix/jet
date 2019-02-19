'use strict';

const { promisify } = require('util');
const fs = require('fs');
const { exec } = require('child_process');
const {
  getAbsolutePath,
  checkPackageJson,
  copyExistedFile,
  checkJestFile,
} = require('./helper');
const { warn } = require('./info');

const writeFilePromise = promisify(fs.writeFile);

function installDepth(pack) {
  const { dependencies } = require(`jet-${pack}/package.json`);

  const command = Object.keys(dependencies).reduce((acc, key) => {
    return `${acc} ${key}@${dependencies[key]}`;
  }, 'npm');

  return new Promise((res, rej) => {
    const { stdout, stderr } = exec(command);
    stderr.once('error', rej);
    stdout.once('close', res);
  });

}

async function eject(pack, path) {
  const absoluteDirPath = await getAbsolutePath(dirPath);

  if (!checkPackageJson(absoluteDirPath)) {
    return warn('Directory does not contain package.json');
  };

  await installDepth(pack);

  if (!checkJestFile()) {
    await copyExistedFile(absoluteDirPath, 'jest.config.js', 'js');
  }

  await writeFilePromise(path.join(dirPath, filename), content);


  // TODO: Need implementation
  // 1) Check package.json in current path
  // 2) Get depth from package
  // 3) Install depth
  // 4) copy jest.config.js to old of exit in current dir
}

module.exports = { eject };

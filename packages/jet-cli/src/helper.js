'use strict';
const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = promisify(fs.copyFile);

async function getAbsolutePath(dirPath) {
  const absoluteDirPath = path.join(process.cwd(), dirPath);

  if (!fs.existsSync(absoluteDirPath)) {
    await mkdirPromise(absoluteDirPath);
  }

  return absoluteDirPath;
}

async function copyExistedFile(dirPath, filename, ext) {
  const currentFilePath = path.join(dirPath, filename);
  const oldFilePath = path.join(dirPath, filename.replace(`.${ext}`, `.old.${ext}`));

  try {
    await copyFilePromise(currentFilePath, oldFilePath);

  } catch (e) {
    console.error(e);
    throw e;
  }
}

function checkPackageJson(absoluteDirPath) {
  return fs.existsSync(path.json(absoluteDirPath, 'package.json'));
}

function checkJestFile(absoluteDirPath) {
  return fs.existsSync(path.json(absoluteDirPath, 'jest.config.js'));
}

module.exports = {
  getAbsolutePath,
  copyExistedFile,
  checkPackageJson,
  checkJestFile,
};

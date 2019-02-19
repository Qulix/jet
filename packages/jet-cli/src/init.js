'use strict';

const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const templates = require('./templates');
const { info } = require('./info');
const { copyExistedFile, getAbsolutePath } = require('./helper');

const writeFilePromise = promisify(fs.writeFile);
const readdirPromise = promisify(fs.readdir);
const mkdirPromise = promisify(fs.mkdir);

function getTemplates(pack) {
  return templates.filter((template) => template.package === pack);
}

function createFileByTemplate(dirPath, files) {
  return async (template) => {
    const { filename, ext, content } = template;

    if (files.includes(filename)) {
      await copyExistedFile(dirPath, filename, ext);
    }

    await writeFilePromise(path.join(dirPath, filename), content);
  }
}

async function init(pack, dirPath) {
  const absoluteDirPath = await getAbsolutePath(dirPath);

  const files = await readdirPromise(absoluteDirPath);
  const createFile = createFileByTemplate(absoluteDirPath, files);

  await Promise.all(getTemplates(pack).map(createFile));

  info(`Package ${pack} initialized on ${dirPath}`);
}

module.exports = { init };

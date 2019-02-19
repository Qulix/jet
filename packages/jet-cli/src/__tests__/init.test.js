const { promisify } = require('util');
const fs = require('fs');
const os = require('os');
const path = require('path');

const templates = require('../templates');
const { init } = require('../init');

const rmdirPromise = promisify(fs.rmdir);
const mkdirPromise = promisify(fs.mkdir);
const readdirPromise = promisify(fs.readdir);

function deleteFolderRecursive(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  fs.readdirSync(dirPath).forEach(function (file) {
    const curPath = path.join(dirPath, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolderRecursive(curPath);
    } else { // delete file
      fs.unlinkSync(curPath);
    }
  });

  fs.rmdirSync(dirPath);
};


describe('init.test.js', () => {
  let testDirName = './temp-init.test';
  let testPath = path.join(process.cwd(), testDirName);

  beforeEach(async () => {
    if (fs.existsSync(testPath)) {
      deleteFolderRecursive(testPath);
    }
    await mkdirPromise(testPath);
  });

  afterEach(() => {
    deleteFolderRecursive(testPath);
  });

  describe('init(pack, path)', () => {

    test('should create template files', async () => {
      await init('e2e', testDirName);

      const files = await readdirPromise(testPath);

      templates
        .filter((template) => template.package === 'e2e')
        .map(({ filename }) => filename)
        .forEach((filename) => {
          expect(files).toContain(filename);
        });
    });


    test('should initialize template files', () => {
      // TODO: Need implementation
    });


    test('when template file exist should create old files', async () => {

      // await createTemplateFiles('e2e');

      // expect().toBeCalled();
    });

  })

});

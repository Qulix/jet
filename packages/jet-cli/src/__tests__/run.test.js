jest.mock('../init');
jest.mock('../eject');
jest.mock('../info');

const { help, version, warn } = require('../info');
const { run } = require('../run');
const { init } = require('../init');
const { eject } = require('../eject');

describe('run.test.js', () => {

  test('should run warn if incorrect run command', async () => {
    const argv = ['error'];

    await run(argv);

    expect(warn).toBeCalled();
  })

  test('should run version command', async () => {
    const argv = ['version'];

    await run(argv);

    expect(version).toBeCalled();
  })

  test('should run help command', async () => {
    const argv = ['help'];

    await run(argv);
    
    expect(help).toBeCalled();
  })

  test('should run init command', async () => {
    const argv = ['init', 'e2e'];

    await run(argv);
    
    expect(init).toBeCalledWith('e2e', '.');
  })


  test('should run eject command', async () => {
    const argv = ['eject', 'e2e'];

    await run(argv);
    
    expect(eject).toBeCalledWith('e2e', '.');
  })

});



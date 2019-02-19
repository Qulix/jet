#!/usr/bin/env node
const { run } = require('../src/run');

run(process.argv.slice(2)).catch(() => {
  process.exitCode = 1;
});

#!/usr/bin/env node

/**
 * field-scripts
 * CLI to run commom scripts in my workflow
 *
 * @author Kahlil Whitfield <github.com/darkristy>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const { input, flags } = cli;
const { clear, debug } = flags;

(async () => {
  init({ clear });
  input.includes(`help`) && cli.showHelp(0);

  debug && log(flags);
})();

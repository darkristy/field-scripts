const meow = require('meow');
const meowHelp = require('cli-meow-help');

/**
 * Square a number
 * @type {import('meow/index.d').AnyFlags} a Number to be squared
 */
const flags = {
  clear: {
    type: `boolean`,
    default: false,
    alias: `c`,
    // @ts-ignore
    desc: `Clear the console`,
  },
  noClear: {
    type: `boolean`,
    default: false,
    // @ts-ignore
    desc: `Don't clear the console`,
  },
  debug: {
    type: `boolean`,
    default: false,
    alias: `d`,
    // @ts-ignore
    desc: `Print debug info`,
  },
  version: {
    type: `boolean`,
    alias: `v`,
    // @ts-ignore
    desc: `Print CLI version`,
  },
};

const commands = {
  help: { desc: `Print help info` },
};

const helpText = meowHelp({
  name: `scripts`,
  flags,
  commands,
  desc: '',
  header: '',
  footer: '',
});

const options = {
  inferType: true,
  description: '',
  hardRejection: false,
  flags,
};

// @ts-ignore
module.exports = meow(helpText, options);

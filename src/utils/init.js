const welcome = require('cli-welcome');
const unhandled = require('cli-handle-unhandled');

const pkg = require('../../package.json');

module.exports = ({ clear = true }) => {
  unhandled();
  welcome({
    title: `field-scripts`,
    tagLine: `by Kahlil Whitfield`,
    description: pkg.description,
    version: pkg.version,
    bgColor: '#36BB09',
    color: '#000000',
    bold: true,
    clear,
  });
};

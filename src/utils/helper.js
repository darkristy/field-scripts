const fs = require('fs');
const path = require('path');

const { red } = require('chalk');

module.exports = {
  getCurrentDirectory: process.cwd(),
  exists: async filePath => !!fs.existsSync(filePath),
  changeExt: (file, ext) => `${file.substr(0, file.lastIndexOf('.'))}${ext}`,
  createNewDirectory: async newPath => fs.mkdirSync(newPath),
  moveToDirectory: async (oldPath, newPath) => fs.renameSync(oldPath, newPath),
  copyToDirectory: async (oldPath, newPath) => fs.copyFileSync(oldPath, newPath),
  readDirectory: filesDirectory => {
    if (!this.exists(filesDirectory)) {
      console.error(red(`Folder does not exist!`));
    }

    return fs.readdirSync(path.join(filesDirectory));
  },
};

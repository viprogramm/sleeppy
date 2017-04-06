const win = require('./win');
const mac = require('./mac');
const linux = require('./linux');


module.exports = (platform) => {
  switch (platform) {
    case 'win32':
      return win;
    case 'darwin':
      return mac;
    case 'linux':
      return linux;
    default:
      throw new Error(`Unknown userDataPath path for platform ${platform}`);
  }
};

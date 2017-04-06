const cp = require('child_process');

module.exports = {
  sleep(callback) {
    const cmd = 'pm-suspend';
    cp.exec(cmd, function (err, stdout, stderr) {
      callback(err, stdout, stderr);
    });
  }
}
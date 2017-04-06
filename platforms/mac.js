const cp = require('child_process');

module.exports = {
  sleep(callback) {
    const cmd = 'pmset sleepnow';
    cp.exec(cmd, function (err, stdout, stderr) {
      callback(err, stdout, stderr);
    });
  }
};

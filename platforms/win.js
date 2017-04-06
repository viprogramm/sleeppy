const cp = require('child_process');

module.exports = {
  sleep(callback) {
    const cmd = 'rundll32.exe powrprof.dll,SetSuspendState 0,1,0';
    cp.exec(cmd, function (err, stdout, stderr) {
      callback(err, stdout, stderr);
    });
  }
}
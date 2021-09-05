const fs = require('fs')

function copyRecursiveSync(from, to) {
  fs.mkdirSync(to);
  fs.readdirSync(from).forEach(element => {
      if (fs.lstatSync(path.join(from, element)).isFile()) {
          fs.copyFileSync(path.join(from, element), path.join(to, element));
      } else {
        copyRecursiveSync(path.join(from, element), path.join(to, element));
      }
  });
}
module.exports.copyRecursiveSync = copyRecursiveSync

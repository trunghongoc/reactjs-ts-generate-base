const checkPackageInstalled = packageName => {
  try {
    const package = require(packageName)
    if (package) {
      return true
    }

    return false
  } catch (er) {
    return false
  }
}

module.exports.checkPackageInstalled = checkPackageInstalled

function isInstalled(x) {
  try {
    return (
      process.moduleLoadList.indexOf('NativeModule ' + x) >= 0 ||
      require('fs').existsSync(require.resolve(x))
    )
  } catch (e) {
    return false
  }
}
module.exports.isInstalled = isInstalled

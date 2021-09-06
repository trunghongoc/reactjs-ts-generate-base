const { CURR_DIR } = require('./helper')
const fs = require('fs-extra')

const checkIsExistReactProject = () => {
  return fs.existsSync(`${CURR_DIR}/package.json`)
}

module.exports.checkIsExistReactProject = checkIsExistReactProject

const isExistApp = checkIsExistReactProject()
module.exports.isExistApp = isExistApp

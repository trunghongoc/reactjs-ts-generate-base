const fs = require('fs-extra')
const path = require('path')
const { isYarn, CURR_DIR } = require('./helper')

const updateTslintConfig = ({ TARGET_PATH }) => {
  const TSLINT_PATH = path.join(TARGET_PATH, 'tsconfig.json')

  const json = fs.readFileSync(
    TSLINT_PATH,
    { encoding: 'utf8', flag: 'r' },
    function (err, data) {}
  )

  if (!json) {
    return
  }

  const tslintObj = JSON.parse(json.trim())
  tslintObj.extends = './tsconfig.paths.json'
  tslintObj.compilerOptions.baseUrl = './src'
  const newContent = JSON.stringify(tslintObj, null, 2)
  fs.writeFileSync(TSLINT_PATH, newContent)
}
module.exports.updateTslintConfig = updateTslintConfig

const fs = require('fs-extra')
const { isYarn, CURR_DIR } = require('./helper')

const updateTslintConfig =  () => {
  const TSLINT_PATH = `${CURR_DIR}/tsconfig.json`

  const json = fs.readFileSync(TSLINT_PATH,
        {encoding:'utf8', flag:'r'},
        function(err, data) {
  })

  if (!json) {
    return
  }

  const tslintObj = JSON.parse(json)
  tslintObj.compilerOptions.baseUrl = './src'
  const newContent = JSON.stringify(tslintObj, null, 2)
  fs.writeFile(TSLINT_PATH, newContent)
}
module.exports.updateTslintConfig = updateTslintConfig

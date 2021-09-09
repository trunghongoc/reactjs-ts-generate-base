const fs = require('fs-extra')
const path = require('path')
const { isYarn, CURR_DIR } = require('./helper')

const updatePackageJsonFile = ({ TARGET_PATH }) => {
  const PACKAGEJSON_PATH = path.join(TARGET_PATH, 'package.json')

  const json = fs.readFileSync(
    PACKAGEJSON_PATH,
    { encoding: 'utf8', flag: 'r' },
    function (err, data) {}
  )

  if (!json) {
    return
  }

  const fileObj = JSON.parse(json.trim())
  fileObj.scripts = {
    ...fileObj.scripts,
    'start': 'craco start',
    'start:dev': 'env-cmd -f .env/development npm start',
    'start:testing': 'env-cmd -f .env/testing npm start',
    'start:prod': 'env-cmd -f .env/production npm start',
    'start:uat': 'env-cmd -f .env/uat npm start',
    'build': 'craco build',
    'build:dev': 'env-cmd -f .env/development npm run build',
    'build:testing': 'env-cmd -f .env/testing npm run build',
    'build:prod': 'env-cmd -f .env/production npm run build',
    'build:uat': 'env-cmd -f .env/uat npm run build',
    'test': 'craco test',
    'eject': 'craco eject',
    'lint:ts': "tslint 'src/**/*.{ts,tsx,js}'",
    'prepare': 'husky install'
  }

  const newContent = JSON.stringify(fileObj, null, 2)
  fs.writeFileSync(PACKAGEJSON_PATH, newContent)
}

module.exports.updatePackageJsonFile = updatePackageJsonFile

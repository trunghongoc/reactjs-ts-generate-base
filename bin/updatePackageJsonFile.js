const fs = require('fs-extra')
const { isYarn, CURR_DIR } = require('./helper')

const updatePackageJsonFile = () => {
  const PACKAGEJSON_PATH = `${CURR_DIR}/package.json`

  const json = fs.readFileSync(PACKAGEJSON_PATH,
        {encoding:'utf8', flag:'r'},
        function(err, data) {
  })

  if (!json) {
    return
  }

  const fileObj = JSON.parse(json)
  fileObj.scripts =  {
    ...fileObj.scripts,
    "start": "react-scripts start",
    "start:dev": "env-cmd -f .env.development npm start",
    "start:testing": "env-cmd -f .env.testing npm start",
    "start:prod": "env-cmd -f .env.production npm start",
    "build": "react-scripts build",
    "build:dev": "env-cmd -f .env.development npm run build",
    "build:testing": "env-cmd -f .env.testing npm run build",
    "build:prod": "env-cmd -f .env.production npm run build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint:ts": "tslint 'src/**/*.{ts,tsx,js}'",
    "prepare": "husky install"
  }

  const newContent = JSON.stringify(fileObj, null, 2)
  fs.writeFile(PACKAGEJSON_PATH, newContent)
}

module.exports.updatePackageJsonFile = updatePackageJsonFile

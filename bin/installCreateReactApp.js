const { spawn, spawnSync, exec } = require('child_process')
const chalk = require('chalk')
const { isExistApp } = require('./checkIsExistReactProject')
const { isYarn, CURR_DIR } = require('./helper')

const installCreateReactApp = ({ isYarn, projectName, TARGET_PATH }) => {
  if (isExistApp) {
    return
  }

  // Create new reactjs typscript project
  console.log(chalk.green(`🥳 Create new project ...`))
  spawnSync(
    isYarn ? 'yarn' : 'npx',
    [
      `${
        isYarn ? 'create react-app' : 'create-react-app'
      } ${projectName} --template typescript`
    ],
    { shell: true, stdio: 'inherit', cwd: CURR_DIR }
  )
}

module.exports.installCreateReactApp = installCreateReactApp

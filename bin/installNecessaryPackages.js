const { spawn, spawnSync, exec } = require('child_process')
const chalk = require('chalk')

const installNecessaryPackages = ({ isYarn, TARGET_PATH }) => {
  console.log(chalk.green(`🥳 Install necessary package ...`))
  spawnSync(
    isYarn ? 'yarn' : 'npm',
    [
      `${
        isYarn ? 'add' : 'install --save'
      } axios @reduxjs/toolkit uuid redux react-redux redux-persist react-router-dom lodash`
    ],
    { shell: true, stdio: 'inherit', cwd: TARGET_PATH }
  )

  spawnSync(
    isYarn ? 'yarn' : 'npm',
    [
      `${
        isYarn ? 'add --dev' : 'install --save-dev'
      } env-cmd @types/uuid @types/lodash @types/react-router-dom lint-staged node-sass prettier pretty-quick husky @craco/craco craco-alias craco-plugin-scoped-css copy-webpack-plugin`
    ],
    { shell: true, stdio: 'inherit', cwd: TARGET_PATH }
  )
}

module.exports.installNecessaryPackages = installNecessaryPackages

const { spawn, spawnSync, exec } = require('child_process')
const chalk = require('chalk')

const { TEMPLATES } = require('./question')
const { isYarn, CURR_DIR } = require('./helper')
const { updateTslintConfig } = require('./updateTslintConfig')
const { updatePackageJsonFile } = require('./updatePackageJsonFile')
const { copyFileToApp } = require('./copyFiles')

module.exports.createTypescriptProject = ({ name, template, hasExistApp }) => {
  const TARGET_PATH = `${CURR_DIR}`

  if (!name) {
    name = 'reactjs-ts-app'
  }
  name = `${TARGET_PATH}/${name}`

  if (!TEMPLATES.includes(template)) {
    template = 'typescript'
  }

  if (!hasExistApp) {
    // create react ts app
    spawn(
      isYarn ? 'yarn' : 'npx',
      [
        `${
          isYarn ? 'create react-app' : 'create-react-app'
        } ${name} --template typescript`
      ],
      { shell: true, stdio: 'inherit' }
    )
  }

  console.log(chalk.green(`🥳 Install necessary package ...`))
  spawn(
    isYarn ? 'yarn' : 'npm',
    [
      `${
        isYarn ? 'add' : 'install --save'
      } axios @reduxjs/toolkit uuid redux react-redux redux-persist react-router-dom lodash`
    ],
    { shell: true, stdio: 'inherit' }
  )
  spawn(
    isYarn ? 'yarn' : 'npm',
    [
      `${
        isYarn ? 'add --dev' : 'install --save-dev'
      } env-cmd @types/uuid @types/lodash @types/react-router-dom lint-staged node-sass prettier pretty-quick`
    ],
    { shell: true, stdio: 'inherit' }
  )

  // update tslint config
  console.log(chalk.green(`🥳 Config base URL ...`))
  updateTslintConfig()

  // Config scripts
  console.log(chalk.green(`🥳 Config scripts ...`))
  updatePackageJsonFile()

  // Run prepare
  console.log(chalk.green(`🥳 Run prepare ...`))
  spawn(isYarn ? 'yarn' : 'npm', ['run prepare'], {
    shell: true,
    stdio: 'inherit'
  })

  // copy files
  copyFileToApp({
    CURR_DIR,
    TARGET_PATH
  })

  console.log(chalk.cyan('❤️ ❤️ ❤️  DONE  ❤️ ❤️ ❤️'))
  console.log(
    chalk.blueBright(
      'Pls rate 1 star to https://github.com/trunghongoc/reactjs-ts-generate-base if it useful for you'
    )
  )
}

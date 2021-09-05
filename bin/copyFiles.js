const chalk = require('chalk')
const { copy } = require('fs-extra')
const { appConfig } = require('./config')
const path = require('path')

const copyFileToApp = ({ TARGET_PATH }) => {
  // copy files
  console.log(chalk.green(`🥳 Start generate file ...`))
  const packagePath =
    path.dirname(require.resolve('generate-react-ts-code-base')) +
    '/source-code'

  copy(`${packagePath}/.husky`, `${TARGET_PATH}/.husky`)
  copy(`${packagePath}/.vscode`, `${TARGET_PATH}/.vscode`)
  copy(`${packagePath}/env`, `${TARGET_PATH}/public/env`)
  copy(`${packagePath}/src`, `${TARGET_PATH}/src`)

  copy(`${packagePath}/.editorconfig`, `${TARGET_PATH}/.editorconfig`)
  copy(`${packagePath}/.env.development`, `${TARGET_PATH}/.env.development`)
  copy(`${packagePath}/.env.production`, `${TARGET_PATH}/.env.production`)
  copy(`${packagePath}/.env.testing`, `${TARGET_PATH}/.env.testing`)
  copy(`${packagePath}/.env.uat`, `${TARGET_PATH}/.env.uat`)
  copy(`${packagePath}/.prettierignore`, `${TARGET_PATH}/.prettierignore`)
  copy(`${packagePath}/.prettierrc`, `${TARGET_PATH}/.prettierrc`)
}
module.exports.copyFileToApp = copyFileToApp

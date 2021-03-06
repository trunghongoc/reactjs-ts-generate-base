const chalk = require('chalk')
const { copy, copySync } = require('fs-extra')
const { appConfig } = require('./config')
const path = require('path')

// const mkdir = dir => {
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true })
//   }
// }
// const mkdirIfNotExist = () => {
//   mkdir(`${TARGET_PATH}/public/env`)
//   mkdir(`${TARGET_PATH}/src/components`)
//   mkdir(`${TARGET_PATH}/src`)
// }

const copyFileToApp = ({ TARGET_PATH }) => {
  // copy files
  console.log(chalk.green(`🥳 Start generate file ...`))
  const packagePath = path.join(
    path.dirname(require.resolve(appConfig.packageName)),
    'repo-code-current'
  )

  const genPackagePath = fileOrFolderName => {
    return path.join(packagePath, fileOrFolderName)
  }
  const genTargetPath = fileOrFolderName => {
    return path.join(TARGET_PATH, fileOrFolderName)
  }
  const execCopySync = (from, to) => {
    copySync(genPackagePath(from), genTargetPath(to), {
      overwrite: true
    })
  }

  execCopySync('.husky', '.husky')
  execCopySync('.vscode', '.vscode')
  execCopySync('.env', '.env')
  execCopySync('public/env', 'public/env')
  execCopySync('src', 'src')

  execCopySync('.prettierignore', '.prettierignore')
  execCopySync('.prettierrc', '.prettierrc')
  // execCopySync('react-project.config.json', 'react-project.config.json')
  execCopySync('craco.config.js', 'craco.config.js')
  execCopySync('tsconfig.paths.json', 'tsconfig.paths.json')
  execCopySync('tslint.json', 'tslint.json')
}
module.exports.copyFileToApp = copyFileToApp

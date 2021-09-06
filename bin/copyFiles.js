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
    'source-code'
  )

  const genPackagePath = (...fileOrFolderName) => {
    return path.join(packagePath, ...fileOrFolderName)
  }
  const genTargetPath = (...fileOrFolderName) => {
    return path.join(TARGET_PATH, ...fileOrFolderName)
  }
  const execCopySync = (from, to) => {
    from = from.split('/')
    to = to.split('/')

    copySync(genPackagePath(...from), genTargetPath(...to), {
      overwrite: true
    })
  }

  execCopySync('.husky', '.husky')
  execCopySync('.vscode', '.vscode')
  execCopySync('env', 'public/env')
  execCopySync('src', 'src')

  execCopySync('.editorconfig', '.editorconfig')
  execCopySync('.env.development', '.env.development')
  execCopySync('.env.production', '.env.production')
  execCopySync('.env.testing', '.env.testing')
  execCopySync('.env.uat', '.env.uat')

  execCopySync('.prettierignore', '.prettierignore')
  execCopySync('.prettierrc', '.prettierrc')
  execCopySync('react-project.config.json', 'react-project.config.json')
  execCopySync('craco.config.js', 'craco.config.js')
  execCopySync('tsconfig.paths.json', 'tsconfig.paths.json')
}
module.exports.copyFileToApp = copyFileToApp

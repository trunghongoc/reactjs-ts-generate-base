const http = require('https') // or 'https' for https:// URLs
const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const download = require('download-git-repo')
const { appConfig } = require('./config')

const getPackagePath = () => {
  return path.dirname(require.resolve(appConfig.packageName))
}

const createFolder = folderName => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName)
  }
}
const downloadRepo = async ({
  TARGET_PATH,
  handleAferDownloadFinish,
  handleAferDownloadFinishParams
}) => {
  const PACKAGE_PATH = getPackagePath()
  const folder = {
    old: 'repo-code-old',
    current: 'repo-code-current',
    tmp: 'repo-code-tmp'
  }

  const folderPath = {
    old: path.join(PACKAGE_PATH, folder.old),
    current: path.join(PACKAGE_PATH, folder.current),
    tmp: path.join(PACKAGE_PATH, folder.tmp)
  }

  createFolder(folderPath.old)
  createFolder(folderPath.current)
  createFolder(folderPath.tmp)

  const branch = 'master'
  const targetDir = path.join(PACKAGE_PATH, folder.tmp)
  const url = 'trunghongoc/reactjs-ts-generate-base-source-code'

  const getRepoVersion = packageJsonPath => {
    if (!fs.existsSync(packageJsonPath)) {
      return ''
    }

    const json = fs.readFileSync(
      packageJsonPath,
      { encoding: 'utf8', flag: 'r' },
      function (err, data) {}
    )

    const fileObj = JSON.parse(json.trim())

    return fileObj ? fileObj.version || '' : ''
  }
  const checkIsNewVersion = () => {
    const pathCurrentPackageJson = path.join(folderPath.current, 'package.json')
    const pathTmpPackageJson = path.join(folderPath.tmp, 'package.json')

    const currentVersion = getRepoVersion(pathCurrentPackageJson)
    const tmpVersion = getRepoVersion(pathTmpPackageJson)

    if (!currentVersion) {
      return true
    }

    return currentVersion !== tmpVersion
  }

  await download(
    url,
    targetDir,
    await async function (err) {
      // console.log(err ? 'Error' : 'Success')
      if (err) {
        await console.log(err)
      } else {
        const isNewVersion = checkIsNewVersion()

        if (isNewVersion) {
          await fs.removeSync(folderPath.old)
          await fs.moveSync(folderPath.current, folderPath.old)
          await fs.moveSync(folderPath.tmp, folderPath.current)
        }

        if (handleAferDownloadFinish) {
          const pathCurrentPackageJson = path.join(
            folderPath.current,
            'package.json'
          )
          const currentVersion = getRepoVersion(pathCurrentPackageJson)

          if (currentVersion) {
            await handleAferDownloadFinish(handleAferDownloadFinishParams)
          }
        }
      }
    }
  )
}
module.exports.download = downloadRepo

/*
const downloadFS = async ({ TARGET_PATH }) => {
  const branch = 'master'
  const targetDir = path.join(TARGET_PATH, 'repo-code')
  const targetZipFile = path.join(targetDir, 'code.zip')

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir)
  }

  const zipFile = fs.createWriteStream(targetZipFile)
  const request = await http.get(
    `https://github.com/trunghongoc/reactjs-ts-generate-base-source-code/archive/refs/heads/${branch}.zip`,
    function (response) {
      response.pipe(zipFile)
    }
  )
}
module.exports.downloadFS = downloadFS
*/

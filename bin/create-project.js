const { spawn, spawnSync, exec } = require('child_process')
const chalk = require('chalk')
const path = require('path')

const { TEMPLATES } = require('./question')
const { isYarn, CURR_DIR } = require('./helper')
const { updateTslintConfig } = require('./updateTslintConfig')
const { updatePackageJsonFile } = require('./updatePackageJsonFile')
const { copyFileToApp } = require('./copyFiles')
const { installCreateReactApp } = require('./installCreateReactApp')
const { installNecessaryPackages } = require('./installNecessaryPackages')
const { isExistApp } = require('./checkIsExistReactProject')
const { standardizedProjectName } = require('./standardizedProjectName')
const { download: downloadCodeFromRepo } = require('./downloadCodeFromRepo')

module.exports.createTypescriptProject = async ({ name }) => {
  name = standardizedProjectName({ name })

  const TARGET_PATH = isExistApp ? CURR_DIR : path.join(CURR_DIR, name)

  console.log('TARGET_PATH:', TARGET_PATH)

  if (!isExistApp) {
    await installCreateReactApp({ isYarn, projectName: name, TARGET_PATH })
  }

  const handleAferDownloadFinish = async ({
    isYarn,
    CURR_DIR,
    TARGET_PATH
  }) => {
    // install necessary package
    await installNecessaryPackages({
      isYarn,
      TARGET_PATH
    })

    // update tslint config
    console.log(chalk.green(`🥳 Config base URL ...`))
    await updateTslintConfig({
      TARGET_PATH
    })

    // Config scripts
    console.log(chalk.green(`🥳 Config scripts ...`))
    await updatePackageJsonFile({ TARGET_PATH })

    // Run prepare
    console.log(chalk.green(`🥳 Run prepare ...`))
    await spawnSync(isYarn ? 'yarn' : 'npm', ['run prepare'], {
      shell: true,
      stdio: 'inherit',
      cwd: TARGET_PATH
    })

    // copy files
    await copyFileToApp({
      CURR_DIR,
      TARGET_PATH
    })
  }

  console.log(chalk.green(`🥳 Download source code ...`))
  await downloadCodeFromRepo({
    TARGET_PATH,
    handleAferDownloadFinish,
    handleAferDownloadFinishParams: {
      isYarn,
      CURR_DIR,
      TARGET_PATH
    }
  })
}

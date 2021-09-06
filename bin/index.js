#!/usr/bin/env node
const chalk = require('chalk')
const { prompt } = require('inquirer')

const { ARGV } = require('./helper')
const { FIRST_APP_QUESTIONS } = require('./question')
const { createTypescriptProject } = require('./create-project')

const { isExistApp } = require('./checkIsExistReactProject')

async function initial() {
  if (!isExistApp) {
    await prompt(FIRST_APP_QUESTIONS).then(async answers => {
      await createTypescriptProject({ ...answers, ...ARGV })
    })
  } else {
    await createTypescriptProject({ ...ARGV })
  }

  console.log(chalk.cyan('❤️ ❤️ ❤️  DONE  ❤️ ❤️ ❤️'))
  console.log(
    chalk.blueBright(
      'Pls rate 1 star to https://github.com/trunghongoc/reactjs-ts-generate-base if this package useful for you'
    )
  )
}

initial()

#!/usr/bin/env node
const chalk = require('chalk')
const { prompt } = require('inquirer')

const { ARGV } = require('./helper')
const { QUESTIONS } = require('./question')
const { createTypescriptProject } = require('./create-project')

prompt(QUESTIONS).then(answers => {
  answers = Object.assign({}, answers, ARGV)

  if (answers.template === 'typescript') {
    const hasExistApp = answers.hasOwnProperty('is-exist-app')
    createTypescriptProject({ ...answers, hasExistApp })
  }

  // console.log(chalk.cyan('❤️ ❤️ ❤️  DONE  ❤️ ❤️ ❤️'))
  console.log(
    chalk.blueBright(
      'Pls rate 1 star to https://github.com/trunghongoc/reactjs-ts-generate-base if it useful for you'
    )
  )
})

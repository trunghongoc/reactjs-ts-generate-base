const { existsSync, readFileSync, writeFileSync, rmSync } = require('fs')
const { join } = require('path')
const { spawn, spawnSync, exec } = require('child_process')
const chalk = require('chalk')
const boxen = require('boxen')

const argvToObject = () => {
  const argvObjects = process.argv
    .filter(arg => arg.startsWith('--'))
    .map(arg => {
      const argvArray = arg.substr(2).split('=')
      const argvObject = {}
      argvObject[argvArray[0]] = argvArray[1]
      return argvObject
    })
  return Object.assign({}, ...argvObjects)
}

const render = (content, data) => {
  Object.keys(data).forEach(
    key => (content = content.replace(new RegExp(`{{${key}}}`, 'g'), data[key]))
  )
  return content
}

const isNode = options => {
  return existsSync(join(options.tartgetPath, 'package.json'))
}

const useYarn = () => {
  const child = spawnSync('which', ['yarn'])
  return child.status === 0
}

const useNpm = () => {
  const child = spawnSync('which', ['npm'])
  return child.status === 0
}

module.exports.ARGV = argvToObject()
module.exports.CURR_DIR = process.cwd()

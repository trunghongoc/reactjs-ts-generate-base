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

const checkIsNode = options => {
  return existsSync(join(options.tartgetPath, 'package.json'))
}
module.exports.checkIsNode = checkIsNode

const checkIsUseYarn = () => {
  const child = spawnSync('which', ['yarn'])
  return child.status === 0
}
module.exports.checkIsUseYarn = checkIsUseYarn
module.exports.isYarn = checkIsUseYarn()

const checkIsUseNpm = () => {
  const child = spawnSync('which', ['npm'])
  return child.status === 0
}
module.exports.checkIsUseNpm = checkIsUseNpm

module.exports.ARGV = argvToObject()
module.exports.CURR_DIR = process.cwd()

const copyRecursiveSync = function (src, dest) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    fs.mkdirSync(dest)
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      )
    })
  } else {
    fs.copyFileSync(src, dest)
  }
}
module.exports.copyRecursiveSync = copyRecursiveSync

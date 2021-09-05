const { ARGV, CURR_DIR } = require('./helper')
const TEMPLATES = ['typescript']
module.exports.TEMPLATES = TEMPLATES
module.exports.QUESTIONS = [
  {
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: TEMPLATES,
    when: () => !TEMPLATES.includes(ARGV.template)
  }
]

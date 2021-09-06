const { ARGV, CURR_DIR } = require('./helper')
const TEMPLATES = ['typescript']
module.exports.TEMPLATES = TEMPLATES
module.exports.FIRST_APP_QUESTIONS = [
  {
    name: 'name',
    type: 'input',
    // message: 'What project template would you like to generate?',
    message: 'Press your project name:'
    // choices: TEMPLATES
    // when: () => !TEMPLATES.includes(ARGV.template)
  }
]

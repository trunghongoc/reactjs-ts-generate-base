const standardizedProjectName = ({ name }) => {
  if (!name) {
    name = 'reactjs-ts-app'
  }

  return name.trim().replace(/\W/g, '-') || 'reactjs-ts-app'
}

module.exports.standardizedProjectName = standardizedProjectName

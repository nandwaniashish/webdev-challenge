const path = require('path')
module.exports = {
  // eslint-disable-line no-unused-vars
  process(src, filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  },
}

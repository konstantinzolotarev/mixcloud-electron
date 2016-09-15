'use strict'

const path = require('path')
const app = require('electron').app

module.exports = class Dock {

  constructor () {
    if (process.platform !== 'darwin')
      return

    this.init()
  }

  init () {
    app.dock.setIcon(path.resolve(__dirname, '../images/mixcloud.png'))
  }
}

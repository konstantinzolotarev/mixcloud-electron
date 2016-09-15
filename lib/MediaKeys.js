'use strict'

const globalShortcut = require('electron').globalShortcut

module.exports = class MediaKeys {

  constructor(win) {
    this.win = win
    this.register()
  }

  register () {
    // globalShortcut.register('MediaNextTrack', console.log)
    // globalShortcut.register('MediaPreviousTrack', console.log)
    // globalShortcut.register('MediaStop', console.log)
    globalShortcut.register('MediaPlayPause', () => {
      this.win.webContents.send('play-pause')
    })
  }

  unregister () {
    globalShortcut.unregisterAll()
  }
}

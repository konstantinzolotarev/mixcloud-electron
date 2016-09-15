const ipcRenderer = require('electron').ipcRenderer

onload = () => {
  console.log('==========================')
  console.log('finished loading')
  console.log('==========================')
}

ipcRenderer.on('play-pause', (e) => {
  if (!document)
    return

  const play = document.querySelector('div[m-player-play-button]')
  if (!play)
    return

  play.click()
})

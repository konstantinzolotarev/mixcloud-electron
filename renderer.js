const ipcRenderer = require('electron').ipcRenderer
const BrowserWindow = require('electron').remote.BrowserWindow
// require('electron-cookies')

onload = () => {
  const webview = document.getElementById('main')

  const loadstart = function () {
    webview.openDevTools()
  }

  const loadstop = function () {}

  webview.addEventListener('new-window', (e) => {
    let auth = new BrowserWindow({
      width: 800,
      height: 600,
      webPreference: {
        nodeIntegration: false
      }
    })

    auth.loadURL(e.url)

    auth.on('did-get-redirect-request', (e) => {
      console.log('==========================')
      console.log(e)
      console.log('==========================')
    })
  })

  webview.addEventListener('did-start-loading', loadstart)
  webview.addEventListener('did-stop-loading', loadstop)
}

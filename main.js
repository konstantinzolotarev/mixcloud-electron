const {
  app,
  BrowserWindow
} = require('electron')
const path = require('path')
const MediaKeys = require('./lib/MediaKeys')
const Dock = require('./lib/Dock')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let media
let dock

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1600,
    height: 1200,
    title: 'Mixcould',
    // frame: true,
    webPreferences: {
      preload: path.resolve(__dirname, './renderer.js'),
      partition: 'persist:mixcloud',
      nodeIntegration: false,
      webSecurity: false,
      plugins: true
    }
  })

  // and load the index.html of the app.
  // win.loadURL(`file://${__dirname}/index.html`)
  win.loadURL(`https://www.mixcloud.com`)

  // Open the DevTools.
  // win.openDevTools()
  // win.webContents.openDevTools()

  // Handle creation of media keys
  media = new MediaKeys(win)
  dock = new Dock()


  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

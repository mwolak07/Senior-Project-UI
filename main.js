const {app, BrowserWindow} = require('electron')

function createWindow () {
    // Create the browser window
    let win = new BrowserWindow({
        //width: 515,
        //height: 600,
        width: 455,
        height: 475,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app
    win.loadFile('index_1.html')
}

app.whenReady().then(createWindow)
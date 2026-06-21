const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      webviewTag: true // IMPORTANT for <webview>
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
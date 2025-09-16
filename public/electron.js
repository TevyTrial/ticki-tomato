const { app, BrowserWindow, ipcMain } = require('electron');

const url = require('url');
const path = require('path');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Ticki Tomato',
        width: 400,
        height: 400,
        frame: false,
        titleBarStyle: 'hidden',
        webPreferences: {
            preload: path.join(__dirname, "preload.js"), // Path to preload script
            contextIsolation: true,   // Keeps context isolated for security
            nodeIntegration: false,   // Disables Node.js in the renderer (security best practice)
        }
    });

    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'), //connect to the react app
        protocol: 'file:',
        slashes: true,
    });

    // hide window buttons on macOS
if (process.platform === "darwin" && mainWindow.setWindowButtonVisibility) {
  mainWindow.setWindowButtonVisibility(false);
}

    // menu bar e.g. File, Edit
    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadURL(startUrl); // load app in electron window

    // listen for 'close-app' event
ipcMain.on('close-app', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close(); else app.quit();
});

ipcMain.on('minimize-app', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});
}
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection:", reason);
});

app.whenReady().then(createMainWindow);

const { app, BrowserWindow } = require('electron');
require('@electron/remote/main').initialize(); // Ensure the spelling is correct

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            enableRemoteModule: true,
            nodeIntegration: true, // Ensure this is enabled for remote usage
            contextIsolation: false // Disable context isolation for remote module access
        }
    });

    win.loadURL('http://localhost:3000'); // Make sure this is the correct URL for your React app
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// const { app, BrowserWindow } = require('electron');
// const path = require('path');
// require('@electron/remote/main').initialize();

// function createWindow() {
//   const win = new BrowserWindow({
//     width: 1000,
//     height: 800,
//     webPreferences: {
//       enableRemoteModule: true,
//       nodeIntegration: true,
//       contextIsolation: false
//     }
//   });

//   // Load React app from development server on localhost:3000
//   win.loadURL('http://localhost:3000');

//   // Optionally, open DevTools:
//   win.webContents.openDevTools();
// }

// app.on('ready', createWindow);

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

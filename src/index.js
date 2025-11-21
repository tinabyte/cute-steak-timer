const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    backgroundColor: '#000000',
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Dev mode → load Vite
  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
  } 
  // Prod mode → load your HTML file
  else {
    win.loadFile(path.join(__dirname, "index.html"));
  }

  // Handle window controls
  ipcMain.on('window-close', () => {
    win.close();
  });

  ipcMain.on('window-minimize', () => {
    win.minimize();
  });
};

app.whenReady().then(createWindow);

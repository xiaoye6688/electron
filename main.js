// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require('electron');

// include the Node.js 'path' module at the top of your file
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    //全屏
    fullscreen: false,
    // 隐藏菜单栏
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  //win.loadFile('index.html');
  win.loadURL('https://www.baidu.com');
  // 打开开发工具
  // mainWindow.webContents.openDevTools()
};
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

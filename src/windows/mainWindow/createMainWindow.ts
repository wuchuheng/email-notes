/**
 *  This file is part of emailNotes.
 *
 * @Description create the main windows.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/05/31 03:18
 */

import {
  app, BrowserWindow, ipcMain, Menu, nativeTheme,
} from 'electron';
import BrowserWindowConstructorOptions = Electron.Main.BrowserWindowConstructorOptions;
import windowMaximizeToggleEvent from './events/windowMaximizeToggleEvent';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
type DarkModeToggleReturnType = Awaited<ReturnType< typeof window.darkMode.toggle>>;

export const options: BrowserWindowConstructorOptions = {
  height: 600,
  width: 1200,
  webPreferences: {
    preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
  },
  titleBarStyle: 'hidden',
  titleBarOverlay: true,
  frame: false,
};

const createMainWindow = (): void => {
  // Create the browser windows.
  const mainWindow = new BrowserWindow(options);
  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  const menu = Menu.buildFromTemplate([
    {
      label: app.name,
      submenu: [
        {
          click: () => mainWindow.webContents.send('update-counter', 1),
          label: 'Increment',
        },
        {
          click: () => mainWindow.webContents.send('update-counter', -1),
          label: 'Decrement',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        {
          click: () => mainWindow.webContents.send('update-counter', 1),
          label: 'Increment',
        },
        {
          click: () => mainWindow.webContents.send('update-counter', -1),
          label: 'Decrement',
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  ipcMain.handle('dark-mode:toggle', (): DarkModeToggleReturnType => {
    nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';

    return nativeTheme.shouldUseDarkColors;
  });
  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system';
  });
  windowMaximizeToggleEvent(mainWindow);
};

export default createMainWindow;

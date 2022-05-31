/**
 *  This file is part of emailNotes.
 *
 * @Description create the main windows.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/05/31 03:18
 */

import { app, BrowserWindow, Menu } from 'electron';
import windowMaximizeToggleEvent from './events/windowMaximizeToggleEvent';
import darkModeToggleEnvent from './events/darkModeToggleEnvent';
import darkModelSystemEvent from './events/darkModelSystemEvent';
import BrowserWindowConstructorOptions = Electron.Main.BrowserWindowConstructorOptions;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

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
  darkModeToggleEnvent();
  darkModelSystemEvent();
  windowMaximizeToggleEvent(mainWindow);
};

export default createMainWindow;

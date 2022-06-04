/**
 *  This file is part of emailNotes.
 *
 * @Description create the main windows.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/05/31 03:18
 */

import { app, BrowserWindow, Menu } from 'electron';
import { createConnection } from 'typeorm';
import * as path from 'path';
import windowMaximizeToggleEvent from './events/windowMaximizeToggleEvent';
import darkModeToggleEnvent from './events/darkModeToggleEnvent';
import darkModelSystemEvent from './events/darkModelSystemEvent';
import loginEvnet from './events/loginEvnet';
import Category from '../../entities/Category';
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
  loginEvnet();
  const sqlfile = path.resolve(__dirname, 'line.sqlite');
  const AppDataSource = createConnection({
    type: 'sqlite',
    database: sqlfile,
    synchronize: true,
    entities: [
      Category,
    ],
    logging: true,
  });
  AppDataSource
    .then((res) => {
      console.log(res);
      return res.getRepository(Category);
    }).then((res) => {
      const c = new Category();
      c.pid = 1;
      c.name = 'hello';
      return res.save(c);
    }).then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
  setTimeout(() => {
  }, 5000);
};

export default createMainWindow;

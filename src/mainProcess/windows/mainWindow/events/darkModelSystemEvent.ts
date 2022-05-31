import { ipcMain, nativeTheme } from 'electron';

/**
 *  This file is part of emailNotes.
 *
 * @Description 使用系统主题事件.
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/1 01:21
 */

const darkModelSystemEventName = 'dark-mode:system';
const darkModelSystemEvent = () => {
  ipcMain.handle(darkModelSystemEventName, () => {
    nativeTheme.themeSource = 'system';
  });
};

export { darkModelSystemEventName };
export default darkModelSystemEvent;

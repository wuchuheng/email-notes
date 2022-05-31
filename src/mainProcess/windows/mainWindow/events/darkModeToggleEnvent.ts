/**
 *  This file is part of emailNotes.
 *
 * @Description 主题切换
 * @Author      wuchuheng<root@wuchuheng.com>
 * @Time        2022/6/1 01:17
 */
import { ipcMain, nativeTheme } from 'electron';

type DarkModeToggleReturnType = Awaited<ReturnType< typeof window.darkMode.toggle>>;
const darkModeToggleEventName = 'dark-mode:toggle';

const darkModeToggleEvent = () => {
  ipcMain.handle(darkModeToggleEventName, (): DarkModeToggleReturnType => {
    nativeTheme.themeSource = nativeTheme.shouldUseDarkColors ? 'light' : 'dark';

    return nativeTheme.shouldUseDarkColors;
  });
};

export { darkModeToggleEventName };

export default darkModeToggleEvent;

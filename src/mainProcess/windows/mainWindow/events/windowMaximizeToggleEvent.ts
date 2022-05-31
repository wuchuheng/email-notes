import { BrowserWindow, ipcMain } from 'electron';

export const windowMaximizeToggleEventName = 'windows-maximize:toggle';
const windowMaximizeToggleEvent = (win: BrowserWindow) => {
  ipcMain.handle(windowMaximizeToggleEventName, () => (win.isMaximized() ? win.unmaximize() : win.maximize()));
};

export default windowMaximizeToggleEvent;

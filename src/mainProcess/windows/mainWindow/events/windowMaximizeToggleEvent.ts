import { BrowserWindow, ipcMain } from 'electron';

const windowMaximizeToggleEvent = (win: BrowserWindow) => {
  ipcMain.handle('windows-maximize:toggle', () => (win.isMaximized() ? win.unmaximize() : win.maximize()));
};

export default windowMaximizeToggleEvent;

import {BrowserWindow, ipcMain} from "electron";

const windowMaximizeToggleEvent = (win: BrowserWindow) => {
    ipcMain.handle('windows-maximize:toggle', (res) => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
    });
}


export default windowMaximizeToggleEvent;
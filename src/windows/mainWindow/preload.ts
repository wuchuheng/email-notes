import {contextBridge, ipcRenderer} from 'electron'

const darkModeKey: keyof Window = 'darkMode';
const maximizeKey: keyof Window = 'maximize';
const darkMode: typeof window.darkMode= {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
        system: () => ipcRenderer.invoke('dark-mode:system')
}
const windowSize: typeof window.maximize = {
        toggle: () => ipcRenderer.invoke('windows-maximize:toggle'),
}

contextBridge.exposeInMainWorld(darkModeKey, { ...darkMode, })
contextBridge.exposeInMainWorld(maximizeKey, windowSize)

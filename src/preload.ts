import {contextBridge, ipcRenderer} from 'electron'

const darkModeKey: keyof Window = 'darkMode';
const darkMode: typeof window.darkMode= {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
        system: () => ipcRenderer.invoke('dark-mode:system')
}

contextBridge.exposeInMainWorld(darkModeKey, { ...darkMode, })
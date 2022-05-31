import { contextBridge, ipcRenderer } from 'electron';
import { windowMaximizeToggleEventName } from './events/windowMaximizeToggleEvent';
import { darkModeToggleEventName } from './events/darkModeToggleEnvent';
import { darkModelSystemEventName } from './events/darkModelSystemEvent';

const darkModeKey: keyof Window = 'darkMode';
const maximizeKey: keyof Window = 'maximize';
const darkMode: typeof window.darkMode = {
  toggle: () => ipcRenderer.invoke(darkModeToggleEventName),
  system: () => ipcRenderer.invoke(darkModelSystemEventName),
};
const windowSize: typeof window.maximize = {
  toggle: () => ipcRenderer.invoke(windowMaximizeToggleEventName),
};

contextBridge.exposeInMainWorld(darkModeKey, { ...darkMode });
contextBridge.exposeInMainWorld(maximizeKey, windowSize);

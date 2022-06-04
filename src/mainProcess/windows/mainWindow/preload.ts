import { contextBridge, ipcRenderer } from 'electron';
import { windowMaximizeToggleEventName } from './events/windowMaximizeToggleEvent';
import { darkModeToggleEventName } from './events/darkModeToggleEnvent';
import { darkModelSystemEventName } from './events/darkModelSystemEvent';
import { loginEventName } from './events/loginEvnet';

const darkModeKey: keyof Window = 'darkMode';
const maximizeKey: keyof Window = 'maximize';
const loginKey: keyof Window = 'login';
const darkMode: typeof window.darkMode = {
  toggle: () => ipcRenderer.invoke(darkModeToggleEventName),
  system: () => ipcRenderer.invoke(darkModelSystemEventName),
};
const windowSize: typeof window.maximize = {
  toggle: () => ipcRenderer.invoke(windowMaximizeToggleEventName),
};
const login: typeof window.login = (account) => ipcRenderer.invoke(loginEventName, account);

contextBridge.exposeInMainWorld(darkModeKey, { ...darkMode });
contextBridge.exposeInMainWorld(maximizeKey, windowSize);
contextBridge.exposeInMainWorld(loginKey, login);

import ipcOn from "@/main/ipc/.on"
import type { IpcMainEvent, BrowserWindow } from "electron";

// Helper type: given a function that expects (event, browserWindow, ...args),
// extract only the parameters after the first two.
type ExtractRendererParams<T> = T extends (
  event: IpcMainEvent,
  browserWindow: BrowserWindow,
  ...args: infer P
) => any
  ? P
  : never;

// Create the IElectronAPI type by mapping over keys in ipcOn.
export type IElectronAPI = {
  [K in keyof typeof ipcOn]: (...args: unknown[]/*ExtractRendererParams<typeof ipcOn[K]>*/) => void;
};

// Augment the global Window interface so that TS knows about window.electronAPI.
declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}

// This file is a module.
export {};
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
import ipcOn from "./ipc/.on";

contextBridge.exposeInMainWorld(
	"electronAPI",
	Object.assign(
		{},
		...Object.keys(ipcOn).map((value) => ({
			value: (...args: unknown[]) => ipcRenderer.send(value, args),
		}))
	)
);

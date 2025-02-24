// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";
// import { ipcFunctionNames } from "./ipc/.on";

export const ipcOnFunctionNames = ["setTitle"];
export const ipcHandleFunctionNames = ["fetchSettings"];

const ipcFunctions: { [name: string]: () => unknown } = {};

for (const name of ipcOnFunctionNames) {
	ipcFunctions[name] = (...args: unknown[]) => ipcRenderer.send(name, ...args);
}

for (const name of ipcHandleFunctionNames) {
	ipcFunctions[name] = (...args: unknown[]) =>
		ipcRenderer.invoke(name, ...args);
}

// const ipcFunctions = Object.assign(
// 	{},
// 	// ...{
// 		...ipcOnFunctionNames.map((value) => ({
// 			[value]: (...args: unknown[]) => ipcRenderer.send(value, ...args),
// 		})),
// 		// ...ipcHandleFunctionNames.map((value) => ({
// 		// 	[value]: (...args: unknown[]) => ipcRenderer.send(value, ...args),
// 		// })),
// 	// }
// );

// console.log(ipcOnFunctions)

contextBridge.exposeInMainWorld("electronAPI", ipcFunctions);

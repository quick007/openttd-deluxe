import ipcHandle from "@/main/ipc/.handle";
import ipcOn from "@/main/ipc/.on";
import type { IpcMainEvent, BrowserWindow } from "electron";

// Helper type: given a function that expects (event, browserWindow, ...args),
// extract only the parameters after the first two.
type ExtractRendererParams<T> = T extends (
	event: IpcMainEvent,
	...args: infer P
) => any
	? P
	: never;

// Create the IElectronAPI type by mapping over keys in ipcOn.
export type IElectronAPI = {
	[K in keyof typeof ipcOn]: (
		...args: ExtractRendererParams<(typeof ipcOn)[K]>
	) => void;
} & {
	[K in keyof typeof ipcHandle]: (
		...args: ExtractRendererParams<(typeof ipcHandle)[K]>
	) => ReturnType<(typeof ipcHandle)[K]>;
};

// Augment the global Window interface so that TS knows about window.electronAPI.
declare global {
	interface Window {
		electronAPI: IElectronAPI;
	};
	type ReturnValue<T> = {error: null, data: T} | {error: string, data: null};
}

// This file is a module.
export {};


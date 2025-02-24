import type { IpcMainEvent } from "electron";
import { fetchSettings } from "./fetchFileData";

// at some point I'll make a thing that will grab this directly from the files
const ipcHandle = {
	fetchSettings,
} as const satisfies {
	readonly [key: string]: (event: IpcMainEvent, ...args: unknown[]) => unknown;
};

export default ipcHandle;

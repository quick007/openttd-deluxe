import type { BrowserWindow, IpcMainEvent } from "electron";
import { handleSetTitle } from "./setTitle";

// at some point I'll make a thing that will grab this directly from the files
export const ipcOn = {
	setTitle: handleSetTitle,
} as const satisfies {
	readonly [key: string]: (event: IpcMainEvent, ...args: unknown[]) => void;
};

export default ipcOn;

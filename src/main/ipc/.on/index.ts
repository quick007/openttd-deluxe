import type { BrowserWindow, IpcMainEvent } from "electron";
import { handleSetTitle } from "./setTitle";

// at some point I'll make a thing that will grab this directly from the files
const ipcOn: {
	[key: string]: (
		event: IpcMainEvent,
		browserWindow: BrowserWindow,
		...args: unknown[]
	) => void;
} = {
	setTitle: handleSetTitle,
};

export default ipcOn;
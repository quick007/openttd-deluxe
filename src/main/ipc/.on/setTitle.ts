import { app, IpcMainEvent } from "electron";
import path from "path";

export function handleSetTitle(event: IpcMainEvent, title: string) {
	// const webContents = event.sender
	// const win = BrowserWindow.fromWebContents(webContents)!
	// win.setTitle(title)
	console.log(path.join(app.getPath("userData"), "settings.json"));
	// console.log(title)
}

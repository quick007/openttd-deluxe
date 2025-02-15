import { BrowserWindow, IpcMainEvent } from "electron"

export function handleSetTitle(event: IpcMainEvent, browserWindow: BrowserWindow, title: string) {
  const webContents = event.sender
  const win = BrowserWindow.fromWebContents(webContents)!
  win.setTitle(title)
}
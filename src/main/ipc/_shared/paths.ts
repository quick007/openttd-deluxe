import { app } from "electron";
import path from "path";

// %appdata%/openttd-deluxe/Game/...
// see docs for where it is on other OS's
export const basePath = path.join(app.getPath("userData"), "Game");

export const settingsPath = path.join(basePath, "settings.json");

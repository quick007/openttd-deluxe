import fs from "node:fs/promises";
import { Units, type Settings } from "../../../renderer/stores/settings";
import { basePath, settingsPath } from "./paths";

/**
 * settings are the high level settings for the entire game (save-agnostic)
 * as well as some settings that used when creating new games (save-dependant).
 * these global settings can also be used to
 *
 */

// const schema =

export const defaultSettings: Settings = {
	autosaveInterval: 5,
	gameConfig: {
		localization: Units.FREEDOM,
	},
};

export const getSettings = async (): Promise<ReturnValue<Settings>> => {
	try {
		const file = await fs.open(settingsPath);

		const contents: Settings = JSON.parse(
			await file.readFile({ encoding: "utf-8" })
		);

		return { data: contents, error: null };
	} catch (err) {
		return { data: null, error: err.message };
	}
};

/**
 * Leave blank to create/overwrite a file with the default settings
 */
export const setSettings = async (
	settings?: Settings
): Promise<ReturnValue<null>> => {
	try {
		await fs.writeFile(
			settingsPath,
			JSON.stringify(settings || defaultSettings),
			{
				encoding: "utf-8",
			}
		);

		return { error: null, data: null };
	} catch (err) {
		return { error: err.message, data: null };
	}
};

import fs from "node:fs/promises";
import { basePath, settingsPath } from "./paths";
import { z } from "zod";

/**
 * settings are the high level settings for the entire game (save-agnostic)
 * as well as some settings that used when creating new games (save-dependant).
 * these global settings can also be used to
 *
 */

// const schema =

/**
 * Zod has enums apparently and they seem to work in a less silly way than the ts ones do
 * So why not use 'em
 */
export const Units = z.enum(["Freedom", "Briish", "Standard"]);

export const settingsSchema = z.object({
	// 0 won't autosave at all
	autosaveInterval: z
		.number()
		.int()
		.nonnegative()
		.max(60, "Autosave amount cannot be more than 60"), // minutes

	// settings for NEW GAMES only. in a game, users can choose to sync with their main settings
	gameConfig: z.object({
		localization: Units,
	}),
	version: z.number(),
});

export type Settings = z.infer<typeof settingsSchema>;

export const defaultSettings: Settings = {
	autosaveInterval: 5,
	gameConfig: {
		localization: Units.Enum.Freedom,
	},
	version: 1,
};

/**
 * Gets the settings from the users folder: (basepath)/settings
 * @returns Returns **unvaliated** settings
 */
export const getSettings = async (): Promise<ReturnValue<Settings>> => {
	try {
		const file = await fs.open(settingsPath);

		const contents: Settings = JSON.parse(
			await file.readFile({ encoding: "utf-8" })
		);

		file.close();

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

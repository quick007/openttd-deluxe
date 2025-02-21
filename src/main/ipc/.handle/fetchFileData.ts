import {
	defaultSettings,
	getSettings,
	setSettings,
	Settings,
	settingsSchema,
} from "../_shared/settings";

/**
 * Fetch the users settings. Creates a new settings if none is found.
 * @returns The settings that it now is
 */
export const fetchSettings = async (): Promise<ReturnValue<Settings>> => {
	const settings = await getSettings();

	// no clue if this works on linux or mac
	// for now I'm just going to go ahead and reset the settings if it isn't in parity with the settings version.
	// in the future there should probably be migration functions
	if (
		(settings.error && settings.error.includes("no such file or directory")) ||
		!settings.data.version ||
		settings.data.version != defaultSettings.version
	) {
		const createData = await setSettings();
		if (createData.error) return createData;

		return {
			error: null,
			data: defaultSettings,
		};
	}

	if (settings.data) {
		const { data, error } = settingsSchema.safeParse(settings.data);
		if (data) return settings;

		return {
			data: null,
			error: "The provided settings didn't align with the internal schema",
		};
	}

	return settings;
};

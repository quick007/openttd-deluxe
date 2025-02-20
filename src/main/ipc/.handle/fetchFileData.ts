import { Units, type Settings } from "../../../renderer/stores/settings";
import {
	defaultSettings,
	getSettings,
	setSettings,
} from "../_shared/settings";

/**
 * Fetch the users settings. Creates a new settings if none is found.
 * @returns The settings that it now is
 */
export const fetchSettings = async (): Promise<ReturnValue<Settings>> => {
	const settings = await getSettings();
	if (settings.data) return settings;

	// no clue if this works on linux or mac
	if (settings.error.includes("no such file or directory")) {
		const createData = await setSettings();
		if (createData.error) return createData;

		return {
			error: null,
			data: defaultSettings,
		};
	}

	return settings;
};

import { create } from "zustand";

export enum Units {
	FREEDOM = "freedom", // imperial
	BRIISH = "bri'ish", // ironically this is metric, not imperial
	SI = "standard",
}

interface Localization {
	landSpeed: Units;
	nautialSpeed: Units;
	weight: Units;
	volume: Units;
	tractiveEffort: Units;
	heightUnits: Units;
}

export interface Settings {
	autosaveInterval: number; // minutes
	// settings for NEW GAMES only. in a game, users can choose to sync with their main settings
	gameConfig: {
		localization: Units | Localization;
	};
}

interface SettingsStore extends Settings {
	fetch: () => Promise<void>;
}

export const useSettingsStore = create<SettingsStore>()((set) => ({
		autosaveInterval: null,
		gameConfig: null,
		fetch: async () => {
			const test = window.electronAPI.fetchSettings()
			return;
		}
}))
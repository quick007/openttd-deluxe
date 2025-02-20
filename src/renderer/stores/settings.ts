import { Settings } from "@/main/ipc/_shared/settings";
import { create } from "zustand";

interface SettingsStore {
	settings: Settings;
	fetch: () => Promise<void>;
}

export const useSettingsStore = create<SettingsStore>()((set) => ({
	// settings won't be null by the time it's used as a loading screen is displayed while fetch is being called
	settings: null,
	fetch: async () => {
		const { data: settings, error } = await window.electronAPI.fetchSettings();
		if (error) {
			// in the future there will be proper error reporting
			console.error(error);
		} else {
			set({ settings });
		}
	},
}));

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
			const test = await window.electronAPI.fetchSettings()
			console.log(test)
			return;
		}
}))
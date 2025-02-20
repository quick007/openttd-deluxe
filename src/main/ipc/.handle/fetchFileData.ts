import { Units, type Settings } from "../../../renderer/stores/settings"

export const fetchSettings = async (): Promise<Settings> => {
	return {
		autosaveInterval: 1,
		gameConfig: {
			localization: Units.FREEDOM
		}
	}
}
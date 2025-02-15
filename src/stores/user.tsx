import { create } from "zustand";

export enum Page {
	HOME = "home",
	SETTINGS = "settings",
	NEW_GAME = "newgame",
	IN_GAME = "ingame",
}

interface UserState {
	page: Page;
	settingsOpen: boolean;
	userName?: string;

	setPage: (page: Page) => void;
	setSettingsOpen: (open: boolean) => void;
	setUsername: (name: string) => void;

	openSaveGame: (name: string, save: number) => Promise<void>;
	openMultiplayerGame: (name: string, password: string) => Promise<void>;
}

const useUserState = create<UserState>()((set) => ({
	page: Page.HOME,
	settingsOpen: false,
	userName: undefined,

	setPage: (page) => {},
	setSettingsOpen: (open) => {},
	setUsername: (name) => {},

	openSaveGame: async (name, save) => {},
	openMultiplayerGame: async (name, password) => {},
}));

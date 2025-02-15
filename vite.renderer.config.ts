import { defineConfig } from 'vite';
import { resolve } from "node:path";

// https://vitejs.dev/config
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@assets": resolve(__dirname, "src/renderer/assets"),
			"@components": resolve(__dirname, "src/renderer/components"),
		}
	}
});

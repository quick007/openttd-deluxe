import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config
export default defineConfig(async () => {
	// const tailwindcss = (await import("@tailwindcss/vite")).default;

	return {
		// plugins: [tailwindcss()],
		// 	root: "./",
		// // build: {
		// // 	outDir: "dist",
		// // },
		// publicDir: "assets",
	};
});

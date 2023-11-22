import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import sveltePreprocess from "svelte-preprocess";
import { defineConfig } from "vite";
import postcss from "./postcss.config";

export default defineConfig({
	plugins: [
		svelte({
			preprocess: [sveltePreprocess({ typescript: true })]
		})
	],
	resolve: {
		alias: [
			{ find: "$lib", replacement: path.resolve(__dirname, "./src/lib") },
			{ find: "$components", replacement: path.resolve(__dirname, "./src/lib/components") }
		]
	},
	css: {
		postcss
	},
	server: { port: 8080 }
});

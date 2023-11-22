import tailwindTypography from "@tailwindcss/typography";
import daisyui from "daisyui";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {}
	},
	plugins: [tailwindTypography, daisyui, tailwindScrollbar],
	daisyui: {
		tailwindScrollbar: true,
		tailwindTypography: "modern",
		themes: ["light", "dark", "black", "business"]
	}
};

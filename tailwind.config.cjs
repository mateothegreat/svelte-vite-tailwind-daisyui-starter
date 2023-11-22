import tailwindTypography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [ tailwindTypography,daisyui, tailwindScrollbar],

	daisyui: {
		themes: ['light', 'dark', 'black', 'business']
	}
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		plugin(({ addVariant }) => {
			addVariant('touched', '&[data-touched]');
		})
	]
};

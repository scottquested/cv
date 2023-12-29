/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{ts,tsx,html}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			screens: {
				break: "885px",
			},
		},
	},
	plugins: [],
};

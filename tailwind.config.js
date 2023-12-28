/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{ts,tsx,html}"],
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

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#C41230',
				secondary: {
					DEFAULT: '#003A71',
					150: '#A0BAC4',
				},
				neutral: {
					grey50: '#F3F3F3',
					grey100: '#E9E9E9',
					grey500: '#6E6E6E',
					text: '#373636',
				},
			},
		},
	},
	plugins: [],
};

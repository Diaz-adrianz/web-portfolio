/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: '#00E8D3',
				yellow: '#DDFE01',
				bg: '#071125',
				secondary: '#20293B',
				silver: '#A0A0A0',
				gray: '#454545',
				black: '#0a0a0a',
				white: '#E0E0E0',
			},
			fontFamily: {
				josefinbold: ['JOSEFIN-BOLD'],
				josefinsemibold: ['JOSEFIN-SEMIBOLD'],
				josefinregular: ['JOSEFIN-REG'],
				jetbrainsregular: ['JETBRAINS-REG'],
			},
		},
	},
	plugins: [],
};


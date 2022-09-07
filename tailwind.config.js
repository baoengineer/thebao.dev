/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
	return `var(--${variable})`;
};

const textColor = {
	primary: generateColorClass('text-primary'),
};

const backgroundColor = {
	primary: generateColorClass('bg-primary'),
};

module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			black: '#000000',
			white: '#FDFDFD',
			gray: {
				500: '#060606',
				400: '#0C0C0C',
				300: '#121212',
				200: '#606060',
				100: '#AEAEAE',
			},
		},
		extend: {
			textColor,
			backgroundColor,
			fontSize: {
				root: '20px',
			},
		},

		fontFamily: {
			primary: ['ModernSans', 'serif'],
		},
	},
	plugins: [],
};

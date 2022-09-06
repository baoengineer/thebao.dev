/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
	return ({ opacityValue }) =>
		opacityValue
			? `rgba(var(--${variable}), ${opacityValue})`
			: `rgb(var(--${variable}))`;
};

const textColor = {
	primary: generateColorClass('text-primary'),
	secondary: generateColorClass('text-secondary'),
};

const backgroundColor = {
	primary: generateColorClass('bg-primary'),
	secondary: generateColorClass('bg-secondary'),
};

module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			textColor,
			backgroundColor,
			fontSize: {
				root: '24px',
			},
		},
		fontFamily: {
			logo: ['Rajdhani', 'serif'],
			primary: ['Roboto', 'serif'],
		},
	},
	plugins: [],
};

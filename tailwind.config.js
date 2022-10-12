/** @type {import('tailwindcss').Config} */

const generateColorClass = variable => {
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
                400: '#121212',
                300: '#323232',
                200: '#515151',
                100: '#717171',
            },
        },
        extend: {
            textColor,
            backgroundColor,
            fontFamily: {
                primary: ['ModernSans-Light', 'serif'],
            },
            fontSize: {
                root: '24px',
            },
            minHeight: {
                '1/2-screen': '50vh',
            },
            backgroundImage: {
                flodesk: "url('/images/flodesk.png')",
            },
        },
    },
    plugins: [],
};

import { Link } from '@remix-run/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons';

type ThemeToggleProps = {
	className: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
	const [theme, setTheme] = useState('light');

	const handleThemeToggle = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.theme = newTheme;
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
	};

	useEffect(() => {
		setTheme(localStorage.theme);
	}, []);

	return (
		<div className={clsx('flex', className)}>
			<button
				className='fixed top-5 right-5'
				onClick={handleThemeToggle}
			>
				{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
			</button>
		</div>
	);
}

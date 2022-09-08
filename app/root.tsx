import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import stylesheetUrl from 'public/styles/index.css';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './components';
import type { SetStateAction } from 'react';
import type { MetaFunction } from '@remix-run/node';
import Curtain from './components/curtain';
import AOS from 'aos';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'bao - creative engineer',
	desc: 'A creative frontend engineer enjoy crafting awesome ui/ux, web/apps, digital stuffs',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	const [theme, setTheme] = useState('light');

	const initTheme = () => {
		const isDark = localStorage.theme === 'dark';
		const isDarkPreferred = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		if (isDark || (!('theme' in localStorage) && isDarkPreferred)) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	const handleThemeChange = (newTheme: SetStateAction<string>) => {
		setTheme(newTheme);
		localStorage.theme = newTheme;
	};

	const initAOS = () => {
		const windowDelta = window.innerHeight / 5;
		AOS.init({
			duration: 600,
			easing: 'ease-in-out-quad',
			anchorPlacement: 'top-bottom',
			offset: windowDelta,
		});
		AOS.refresh();
	};

	useEffect(() => {
		initTheme();
		initAOS();
	}, []);

	return (
		<html
			lang='en'
			className={theme}
		>
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Curtain />
				<ThemeToggle
					className='fixed top-4 left-4 text-4xl'
					theme={theme}
					onChange={handleThemeChange}
				/>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export function links() {
	return [{ rel: 'stylesheet', href: stylesheetUrl }];
}

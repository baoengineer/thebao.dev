import { Link } from '@remix-run/react';
import { useEffect } from 'react';

export default function Main() {
	const handleDarkMode = () => {
		const isDarkSet = localStorage.theme === 'dark';
		const isThemeStored = 'theme' in localStorage;
		const isDarkPrefered = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		if (isDarkSet || (!isThemeStored && isDarkPrefered)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		// TODO Add theme switcher
	};

	useEffect(() => {
		handleDarkMode();
	}, []);

	return (
		<main className='bg-primary text-primary'>
			<header>
				<Link
					to='/about'
					className='text-xl text-blue-600 underline'
				>
					About
				</Link>
				<Link
					to='/works'
					className='text-xl text-blue-600 underline'
				>
					Works
				</Link>
				<Link
					to='/contact'
					className='text-xl text-blue-600 underline'
				>
					Contact
				</Link>
			</header>
			<section>
				<h1 className='text-3xl font-bold underline'>bao</h1>
			</section>
			<footer></footer>
		</main>
	);
}

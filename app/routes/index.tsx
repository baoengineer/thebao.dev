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
		<main className='bg-primary text-primary font-primary'>
			<header>
				<Link
					to='/about'
					className='text-xl'
				>
					About
				</Link>
				<Link
					to='/works'
					className='text-xl'
				>
					Works
				</Link>
				<Link
					to='/contact'
					className='text-xl'
				>
					Contact
				</Link>
			</header>
			<section>
				<h1 className='font-300'>bao</h1>
			</section>
			<footer></footer>
		</main>
	);
}

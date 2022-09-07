import { useEffect } from 'react';
import { Logo, Nav, ThemeToggle } from '../components';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Main() {
	const handleDarkMode = () => {
		const isDark = localStorage.theme === 'dark';
		const isThemeStored = 'theme' in localStorage;
		const isDarkPreferred = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;

		if (isDark || (!isThemeStored && isDarkPreferred)) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		handleDarkMode();
	}, []);

	return (
		<main>
			<header className='text-primary body-font fixed top-0 w-full z-50'>
				<div className='container flex flex-wrap  items-center py-6'>
					<Logo className='md:mr-4' />
					<ThemeToggle className='self-start -ml-4 md:-ml-8 pl-4' />
					<Nav className='ml-auto' />
				</div>
			</header>
			<section className='h-screen w-full flex'>
				<div className='container flex w-full justify-center items-center text-right'>
					<div className='relative h-full w-full'>
						<Player
							className='w-10/12 h-auto absolute z-0 -bottom-80 -right-64'
							autoplay
							loop
							src='../animations/header.json'
						/>
						<div className='absolute z-10 bottom-0 right-0 py-10'>
							<h1 className='font-300'>creative engineer.</h1>
							<ul className='flex gap-4 justify-end items-baseline'>
								<li>ui/ux</li>
								<li>app</li>
								<li>animation</li>
								<li>accessibility</li>
								<li>architect</li>
								<li className='h2 font-300 mr-0.5'>.</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='py-96'>
				<div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
					obcaecati mollitia minus, similique consequatur natus recusandae
					laudantium numquam quibusdam aut voluptatum est quasi sunt eveniet
					provident doloribus saepe cupiditate optio. Lorem ipsum, dolor sit
					amet consectetur adipisicing elit. Nihil obcaecati mollitia minus,
					similique consequatur natus recusandae laudantium numquam quibusdam
					aut voluptatum est quasi sunt eveniet provident doloribus saepe
					cupiditate optio. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Nihil obcaecati mollitia minus, similique consequatur natus
					recusandae laudantium numquam quibusdam aut voluptatum est quasi sunt
					eveniet provident doloribus saepe cupiditate optio. Lorem ipsum, dolor
					sit amet consectetur adipisicing elit. Nihil obcaecati mollitia minus,
					similique consequatur natus recusandae laudantium numquam quibusdam
					aut voluptatum est quasi sunt eveniet provident doloribus saepe
					cupiditate optio. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Nihil obcaecati mollitia minus, similique consequatur natus
					recusandae laudantium numquam quibusdam aut voluptatum est quasi sunt
					eveniet provident doloribus saepe cupiditate optio. Lorem ipsum, dolor
					sit amet consectetur adipisicing elit. Nihil obcaecati mollitia minus,
					similique consequatur natus recusandae laudantium numquam quibusdam
					aut voluptatum est quasi sunt eveniet provident doloribus saepe
					cupiditate optio. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Nihil obcaecati mollitia minus, similique consequatur natus
					recusandae laudantium numquam quibusdam aut voluptatum est quasi sunt
					eveniet provident doloribus saepe cupiditate optio. Lorem ipsum, dolor
					sit amet consectetur adipisicing elit. Nihil obcaecati mollitia minus,
					similique consequatur natus recusandae laudantium numquam quibusdam
					aut voluptatum est quasi sunt eveniet provident doloribus saepe
					cupiditate optio. Lorem ipsum, dolor sit amet consectetur adipisicing
					elit. Nihil obcaecati mollitia minus, similique consequatur natus
					recusandae laudantium numquam quibusdam aut voluptatum est quasi sunt
					eveniet provident doloribus saepe cupiditate optio.
				</div>
			</section>
			<footer></footer>
		</main>
	);
}

import { useEffect, useRef } from 'react';
import { Logo, Nav, ThemeToggle } from '../components';
import anime from 'animejs';

export default function Main() {
	const textStackRef = useRef<HTMLDivElement>(null);
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

	const initSmoothScroll = () => {
		if (document.documentElement) {
			import('locomotive-scroll').then((locomotiveModule) => {
				const scroll = new locomotiveModule.default({
					el: document.documentElement,
					scrollbarContainer: document.documentElement,
					smooth: true,
					smoothMobile: false,
				});
			});
		}
	};

	const initTextStackAnimation = () => {
		const textStack = textStackRef.current;
		if (!textStack) {
			return;
		}
		const timeline = anime.timeline({
			easing: 'easeOutExpo',
			duration: 1000,
			loop: true,
		});
		const texts = textStack.querySelectorAll('span');
		texts.forEach((text) => {
			timeline
				.add({
					targets: text,
					opacity: 1,
				})
				.add({
					targets: text,
					opacity: 0,
				});
		});
	};

	useEffect(() => {
		handleDarkMode();
		initTextStackAnimation();
		initSmoothScroll();
	}, []);

	return (
		<main>
			<ThemeToggle className='fixed top-4 left-4 text-4xl' />
			<section className='min-h-screen py-36'>
				<div className='container flex w-full justify-end items-center text-right'>
					<ul
						className='flex flex-col gap-2'
						style={{ marginTop: '30vh' }}
					>
						<li>
							<h1 className='h1 text-gray-100 test'>bao.</h1>
						</li>
						<li>
							<h2 className='h1'>frontend engineer.</h2>
						</li>
						<li>
							<span className='h1 text-gray-100'>passionate in</span>
						</li>
						<li>
							<span className='h1'>ui/ux</span>
						</li>
						<li>
							<span className='h1'>web/app</span>
						</li>
						<li>
							<span className='h1'>digital stuffs</span>
						</li>
						<li>
							<span className='h1 text-gray-100'>focused on</span>
						</li>
						<li>
							<div className='flex justify-end'>
								<div
									ref={textStackRef}
									className='flex flex-col relative items-end'
								>
									<span className='h1 absolute opacity-100'>fast</span>
									<span className='h1 opacity-0'>modern</span>
									<span className='h1 absolute opacity-0'>resilient</span>
								</div>
								<span className='h1 ml-3 md:ml-5 lg:ml-10'>user exp</span>
							</div>
						</li>
						<li>
							<span className='h1'>animations</span>
						</li>
						<li>
							<span className='h1'>accessibility</span>
						</li>
						<li>
							<span className='h1'>architect.</span>
						</li>
					</ul>
				</div>
			</section>
			<section>
				<div className='container'>
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

import { useEffect } from 'react';
import { Logo, Nav, ThemeToggle } from '../components';

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
	};

	useEffect(() => {
		handleDarkMode();
	}, []);

	return (
		<main>
			<header className='text-gray-600 body-font'>
				<ThemeToggle className='fixed top-1 sm:top-2 md:top-4 left-1 sm:left-2 md:left-4' />
				<div className='container flex flex-wrap py-4 items-center'>
					<Logo className='order-first lg:order-none md:mr-4' />
					<Nav className='ml-auto' />
				</div>
			</header>
			<section>
				<div className='container'>
					<h1 className='font-300'>content</h1>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
					consequatur cupiditate nisi neque exercitationem enim atque temporibus
					accusamus debitis. Ratione aut dignissimos fugiat sequi assumenda
					optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Distinctio omnis velit odio facere eum.
					Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
					iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
					dolor, sit amet consectetur adipisicing elit. In consequatur
					cupiditate nisi neque exercitationem enim atque temporibus accusamus
					debitis. Ratione aut dignissimos fugiat sequi assumenda optio. Quam
					aspernatur illo eius? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Distinctio omnis velit odio facere eum. Cupiditate
					dolorum maxime, error similique minus fugiat, nulla illo iusto,
					dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum dolor,
					sit amet consectetur adipisicing elit. In consequatur cupiditate nisi
					neque exercitationem enim atque temporibus accusamus debitis. Ratione
					aut dignissimos fugiat sequi assumenda optio. Quam aspernatur illo
					eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime,
					error similique minus fugiat, nulla illo iusto, dignissimos tenetur
					dicta eligendi eveniet numquam. Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. In consequatur cupiditate nisi neque
					exercitationem enim atque temporibus accusamus debitis. Ratione aut
					dignissimos fugiat sequi assumenda optio. Quam aspernatur illo eius?
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
					omnis velit odio facere eum. Cupiditate dolorum maxime, error
					similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
					eligendi eveniet numquam. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. In consequatur cupiditate nisi neque exercitationem
					enim atque temporibus accusamus debitis. Ratione aut dignissimos
					fugiat sequi assumenda optio. Quam aspernatur illo eius? Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Distinctio omnis velit
					odio facere eum. Cupiditate dolorum maxime, error similique minus
					fugiat, nulla illo iusto, dignissimos tenetur dicta eligendi eveniet
					numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
					consequatur cupiditate nisi neque exercitationem enim atque temporibus
					accusamus debitis. Ratione aut dignissimos fugiat sequi assumenda
					optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit amet
					consectetur adipisicing elit. Distinctio omnis velit odio facere eum.
					Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
					iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
					dolor, sit amet consectetur adipisicing elit. In consequatur
					cupiditate nisi neque exercitationem enim atque temporibus accusamus
					debitis. Ratione aut dignissimos fugiat sequi assumenda optio. Quam
					aspernatur illo eius? Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Distinctio omnis velit odio facere eum. Cupiditate
					dolorum maxime, error similique minus fugiat, nulla illo iusto,
					dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum dolor,
					sit amet consectetur adipisicing elit. In consequatur cupiditate nisi
					neque exercitationem enim atque temporibus accusamus debitis. Ratione
					aut dignissimos fugiat sequi assumenda optio. Quam aspernatur illo
					eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime,
					error similique minus fugiat, nulla illo iusto, dignissimos tenetur
					dicta eligendi eveniet numquam. Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. In consequatur cupiditate nisi neque
					exercitationem enim atque temporibus accusamus debitis. Ratione aut
					dignissimos fugiat sequi assumenda optio. Quam aspernatur illo eius?
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
					omnis velit odio facere eum. Cupiditate dolorum maxime, error
					similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
					eligendi eveniet numquam. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. In consequatur cupiditate nisi neque exercitationem
					enim atque temporibus accusamus debitis. Ratione aut dignissimos
					fugiat sequi assumenda optio. Quam aspernatur illo eius? Lorem ipsum,
					dolor sit amet consectetur adipisicing elit. Distinctio omnis velit
					odio facere eum. Cupiditate dolorum maxime, error similique minus
					fugiat, nulla illo iusto, dignissimos tenetur dicta eligendi eveniet
					numquam.
				</div>
			</section>
			<footer></footer>
		</main>
	);
}

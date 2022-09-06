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
			<header>
				<header className='text-gray-600 body-font'>
					<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
						<Nav className='md:ml-auto' />
						<Logo className='order-first lg:order-none lg:w-1/5 mb-4 md:mb-0' />
						<ThemeToggle className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0' />
					</div>
				</header>
			</header>
			<section>
				<h1 className='font-300'>content</h1>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. In consequatur
				cupiditate nisi neque exercitationem enim atque temporibus accusamus
				debitis. Ratione aut dignissimos fugiat sequi assumenda optio. Quam
				aspernatur illo eius? Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Distinctio omnis velit odio facere eum. Cupiditate
				dolorum maxime, error similique minus fugiat, nulla illo iusto,
				dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum dolor,
				sit amet consectetur adipisicing elit. In consequatur cupiditate nisi
				neque exercitationem enim atque temporibus accusamus debitis. Ratione
				aut dignissimos fugiat sequi assumenda optio. Quam aspernatur illo eius?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
				omnis velit odio facere eum. Cupiditate dolorum maxime, error similique
				minus fugiat, nulla illo iusto, dignissimos tenetur dicta eligendi
				eveniet numquam. Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. In consequatur cupiditate nisi neque exercitationem enim atque
				temporibus accusamus debitis. Ratione aut dignissimos fugiat sequi
				assumenda optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Distinctio omnis velit odio facere eum.
				Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
				iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. In consequatur cupiditate
				nisi neque exercitationem enim atque temporibus accusamus debitis.
				Ratione aut dignissimos fugiat sequi assumenda optio. Quam aspernatur
				illo eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime, error
				similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
				eligendi eveniet numquam. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. In consequatur cupiditate nisi neque exercitationem
				enim atque temporibus accusamus debitis. Ratione aut dignissimos fugiat
				sequi assumenda optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Distinctio omnis velit odio facere
				eum. Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
				iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. In consequatur cupiditate
				nisi neque exercitationem enim atque temporibus accusamus debitis.
				Ratione aut dignissimos fugiat sequi assumenda optio. Quam aspernatur
				illo eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime, error
				similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
				eligendi eveniet numquam. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. In consequatur cupiditate nisi neque exercitationem
				enim atque temporibus accusamus debitis. Ratione aut dignissimos fugiat
				sequi assumenda optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Distinctio omnis velit odio facere
				eum. Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
				iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. In consequatur cupiditate
				nisi neque exercitationem enim atque temporibus accusamus debitis.
				Ratione aut dignissimos fugiat sequi assumenda optio. Quam aspernatur
				illo eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime, error
				similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
				eligendi eveniet numquam. Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. In consequatur cupiditate nisi neque exercitationem
				enim atque temporibus accusamus debitis. Ratione aut dignissimos fugiat
				sequi assumenda optio. Quam aspernatur illo eius? Lorem ipsum, dolor sit
				amet consectetur adipisicing elit. Distinctio omnis velit odio facere
				eum. Cupiditate dolorum maxime, error similique minus fugiat, nulla illo
				iusto, dignissimos tenetur dicta eligendi eveniet numquam. Lorem ipsum
				dolor, sit amet consectetur adipisicing elit. In consequatur cupiditate
				nisi neque exercitationem enim atque temporibus accusamus debitis.
				Ratione aut dignissimos fugiat sequi assumenda optio. Quam aspernatur
				illo eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Distinctio omnis velit odio facere eum. Cupiditate dolorum maxime, error
				similique minus fugiat, nulla illo iusto, dignissimos tenetur dicta
				eligendi eveniet numquam.
			</section>
			<footer></footer>
		</main>
	);
}

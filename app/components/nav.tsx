import { Link } from '@remix-run/react';
import clsx from 'clsx';

type NavProps = {
	className: string;
};

export default function Nav({ className }: NavProps) {
	return (
		<nav
			className={clsx(
				'flex lg:w-2/5 flex-wrap items-center text-base',
				className
			)}
		>
			<Link
				to='/about'
				className='mr-5'
			>
				About
			</Link>
			<Link
				to='/works'
				className='mr-5'
			>
				Works
			</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
}

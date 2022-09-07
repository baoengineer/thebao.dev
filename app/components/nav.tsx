import { Link } from '@remix-run/react';
import clsx from 'clsx';

type NavProps = {
	className?: string;
};

export default function Nav({ className }: NavProps) {
	return (
		<nav
			className={clsx(
				'flex flex-wrap items-center font-primary text-primary text-xl md:text-2xl',
				className
			)}
		>
			<Link
				to='/about'
				className='mr-5'
			>
				about
			</Link>
			<Link
				to='/works'
				className='mr-5'
			>
				works
			</Link>
			<Link to='/contact'>contact</Link>
		</nav>
	);
}

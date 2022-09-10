import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Curtain() {
	const [state, setState] = useState('show');

	useEffect(() => {
		setState('hide');
	}, []);

	const handleTransitionEnd = () => {
		setState('hidden');
	};

	return (
		<div
			className={clsx(
				'fixed top-0 h-screen w-screen bg-white transition-opacity',
				state
			)}
			onTransitionEnd={handleTransitionEnd}
		/>
	);
}

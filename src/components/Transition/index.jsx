import { useTransition } from '@/src/contexts/transitionContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Transition = () => {
	const router = useRouter();
	const { isStartingTransition, linkNextPage, startingTransition } =
		useTransition();

	useEffect(() => {
		if (isStartingTransition) {
			//RESET THE TRANSITION
			setTimeout(() => {
				router.push(linkNextPage);
				startingTransition(false, '');
			}, 2000);
		}
	}, [isStartingTransition]);

	return (
		<>
			{isStartingTransition && (
				<div className='bg-primary/50 fixed z-50 top-0 left-0 h-full w-full'></div>
			)}
		</>
	);
};

export default Transition;

import React, { useEffect } from 'react';

import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';
import { useTransition } from '../contexts/transitionContext';
import Transition from '../components/Transition';

function PageB() {
	const { isOpening, setOpening, isHasBgVideo, checkPageConditions } =
		useTransition();

	useEffect(() => {
		if (isOpening) {
			setOpening(false);
		}

		checkPageConditions(false);
	}, []);

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<LayoutMotion>
				<Transition />
				<div className='w-screen h-screen bg-cover bg-center bg-[url(/images/bg-01-1.jpg)]'>
					<main className='container h-full flex flex-col justify-center items-center mx-auto'>
						<h1 className='text-7xl text-white font-semibold'>Page B</h1>
					</main>
				</div>
			</LayoutMotion>
		</>
	);
}

export default PageB;

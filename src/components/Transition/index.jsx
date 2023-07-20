import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTransition } from '@/src/contexts/transitionContext';
import { gsap } from 'gsap';

const Transition = () => {
	const router = useRouter();

	/* const bgVideoPages = [
		'/videos/Video-Transition-06-3--22.mp4',
		'/videos/Video-Transition-06-3-Pg2--22.mp4',
	]; */

	const {
		isStartingTransition,
		startingTransition,
		isTransitionInProgress,
		transitionInProgress,
		startCapture,
		linkNextPage,
		bgCapturedImage,
	} = useTransition();

	const bgCaptureFlipRef = useRef(null);
	const bgCaptureFlipInnerRef = useRef(null);
	const bgCaptureFlipRightRef = useRef(null);

	useEffect(() => {
		if (isStartingTransition && isTransitionInProgress) {
			// GO TO NEXT PAGE
			router.push(linkNextPage);

			gsap.fromTo(
				bgCaptureFlipRef.current,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.4,
					ease: 'power2.out',
				}
			);

			gsap.to(bgCaptureFlipRightRef.current, {
				delay: 0.4,
				rotateY: -80,
				duration: 1.4,
				ease: 'back.in(1.7)',
			});

			setTimeout(() => {
				//RESET THE TRANSITION
				startCapture(false, '');
				transitionInProgress(false);
				startingTransition(false);
			}, 4000);
		}
	}, [isStartingTransition, isTransitionInProgress]);

	return (
		<>
			{isStartingTransition && (
				<div
					id='bgCaptureFlipRef'
					ref={bgCaptureFlipRef}
					className='z-[98] bg-black top-0 left-0 fixed w-screen h-screen opacity-0'>
					<div ref={bgCaptureFlipInnerRef} className='w-screen h-screen'>
						<div className='top-0 left-0 absolute w-[50vw] h-screen overflow-hidden z-[1]'>
							<div
								className='w-screen h-screen bg-no-repeat bg-cover bg-center'
								style={{
									backgroundImage: `url(${bgCapturedImage})`,
								}}></div>
						</div>
						<div
							className='top-0 left-2/4 absolute w-[50vw] h-screen z-[2]'
							style={{
								perspective: '800px',
							}}>
							<div
								ref={bgCaptureFlipRightRef}
								id='bg-flip-right-inner'
								className='origin-left'
								style={{
									transformStyle: 'preserve-3d',
								}}>
								<div
									id='bg-flip-right-front'
									className='w-[50vw] overflow-hidden'>
									<div
										className='absolute w-screen h-screen bg-no-repeat bg-cover bg-center left-0 top-0'
										style={{
											backgroundImage: `url(${bgCapturedImage})`,
											transform: 'translateX(-50%)',
										}}></div>
								</div>
								<div id='bg-flip-right-back'></div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Transition;

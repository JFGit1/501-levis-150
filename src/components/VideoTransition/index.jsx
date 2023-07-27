import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

// import { gsap } from 'gsap';
import { useTransition } from '@/src/contexts/transitionContext';

const VideoTransition = () => {
	const {
		isStartingTransition,
		handleStartingTransition,
		primaryVideoUrls,
		indexBgTransitions,
		linkNextPage,
	} = useTransition();

	const router = useRouter();
	let videoSrc = primaryVideoUrls[indexBgTransitions];
	const videoRef = useRef(null);
	const videoContainerRef = useRef(null);
	const batMaskedRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		const videoContainer = videoContainerRef.current;
		const batMasked = batMaskedRef.current;

		if (isStartingTransition) {
			console.log('STEP - 03');

			videoSrc = primaryVideoUrls[indexBgTransitions];

			setTimeout(() => {
				router.push(linkNextPage);
			}, 1000);

			/* gsap.fromTo(
				videoContainer,
				{ opacity: 0 },
				{
					// delay: 0.2,
					opacity: 1,
					duration: 0.7,
					ease: 'power2.out',
				}
			); */
			batMasked.classList.remove('bat-scale-down');
			batMasked.classList.add('bat-scale-up');

			const endedVideo = () => {
				video.pause();
				batMasked.classList.add('bat-scale-down');
				batMasked.classList.remove('bat-scale-up');
				setTimeout(() => {
					console.log('STEP - 04');
					handleStartingTransition(false);
				}, 1000);
			};

			video.currentTime = 0;
			video.play();
			// videoContainer.style.display = 'block';
			//batMasked.classList.add('bat-scale-up');
			video.addEventListener('ended', endedVideo);

			return () => {
				video.removeEventListener('ended', endedVideo);
			};
		}
	}, [isStartingTransition]);

	return (
		<>
			{isStartingTransition && (
				<div
					ref={videoContainerRef}
					className={`video-transition ${
						isStartingTransition ? 'visible' : ''
					} fixed top-0 left-0 z-[120] w-screen h-screen opacity-100`}>
					<div id='batMasked'>
						<video
							ref={videoRef}
							className='absolute object-cover top-0 left-0 z-50 w-screen h-screen'
							src={videoSrc}
							muted
							autoPlay
						/>
					</div>
					<svg id='batLogo' height={0} width={0}>
						<clipPath ref={batMaskedRef} id='batLogoPath'>
							<path d='M596.7037,4.4511l-54.3862,241.62c-33.331-21.9294-75.2032-35.0393-120.77-35.0393-45.7258,0-87.757,13.1894-121.1672,35.2776-33.4105-22.0882-75.4415-35.2776-121.1673-35.2776-45.5272,0-87.4391,13.11-120.77,35.0393L4.1363,4.4909Z' />
						</clipPath>
					</svg>
				</div>
			)}
		</>
	);
};

export default VideoTransition;

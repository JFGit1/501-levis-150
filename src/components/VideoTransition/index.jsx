import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useTransition } from '@/src/contexts/transitionContext';

const VideoTransition = ({ videoSrc, showVideo, handleEndedVideo }) => {
	const videoRef = useRef(null);
	const videoContainerRef = useRef(null);
	const batMaskedRef = useRef(null);

	const { isTransitionEnded, isSetTransitionEnded } = useTransition();

	useEffect(() => {
		const video = videoRef.current;
		const videoContainer = videoContainerRef.current;
		const batMasked = batMaskedRef.current;

		if (showVideo) {
			console.log('STEP - 12');

			gsap.fromTo(
				videoContainer,
				{ opacity: 0, scale: 1.15 },
				{
					delay: 0.2,
					opacity: 1,
					scale: 1,
					duration: 0.7,
					ease: 'power2.out',
				}
			);

			const endedVideo = () => {
				video.pause();
				batMasked.classList.add('bat-scale-down');
				batMasked.classList.remove('bat-scale-up');
				setTimeout(() => {
					console.log('STEP - 13');
					handleEndedVideo();
					isSetTransitionEnded(true);
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
	}, [showVideo]);

	return (
		<>
			{showVideo && (
				<div
					ref={videoContainerRef}
					className={`video-transition ${
						showVideo ? 'visible' : ''
					} fixed top-0 left-0 z-[120] w-screen h-screen opacity-0`}>
					<div id='batMasked'>
						<video
							ref={videoRef}
							className='absolute object-cover top-0 left-0 z-50 w-screen h-screen'
							src={videoSrc}
							muted
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

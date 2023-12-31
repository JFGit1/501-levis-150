import React, { useEffect, useRef } from 'react';
import { useTransition } from '@/src/contexts/transitionContext';

const BgVideo = React.forwardRef(({ src, poster, className }, ref) => {
	const {
		isFirstAccess,
		handleFirstAccess,
		isMutedVideos,
		isStartingTransition,
		isTransitionEnded,
		handleSetTransitionEnded,
	} = useTransition();

	const videoRef = useRef(null);
	const bgVideoMuted = isMutedVideos;

	src = src || '';
	poster = poster || '';
	className = className || 'bg-video-player';

	useEffect(() => {
		if (isTransitionEnded === true) {
			console.log('isTransitionEnded:', isTransitionEnded);
			handleSetTransitionEnded(false);
			console.log('Play BG Video');
			videoRef.currentTime = 0;
			videoRef.current.play();
		}

		console.log('ref:', ref);
		if (ref) {
			ref.current = videoRef.current;
			console.log('ref:', '???');
		}

		if (isStartingTransition) {
			videoRef.current.pause();
		} else {
			console.log('----');
			console.log('videoRef:', videoRef);
			videoRef.currentTime = 0;
			videoRef.muted = isMutedVideos;
			videoRef.current.play();
		}
	}, [isStartingTransition, isTransitionEnded, ref]);

	return (
		<video
			ref={videoRef}
			className={className}
			poster={poster}
			controls={false}
			loop
			muted={bgVideoMuted}
			autoPlay
			style={{
				height: '100%',
				left: '0px',
				objectFit: 'cover',
				overflow: 'hidden',
				position: 'absolute',
				top: '0px',
				width: '100%',
				zIndex: '0',
			}}>
			<source src={src} type='video/mp4' />
		</video>
	);
});

export default BgVideo;

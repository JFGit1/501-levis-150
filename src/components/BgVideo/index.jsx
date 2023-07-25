import React, { useEffect, useRef } from 'react';
import { useTransition } from '@/src/contexts/transitionContext';

const BgVideo = React.forwardRef(({ src, poster, className }, ref) => {
	const videoRef = useRef(null);

	const {
		isFirstAccess,
		setFirstAccess,
		isTransitionEnded,
		isSetTransitionEnded,
	} = useTransition();

	src = src || '';
	poster = poster || '';
	className = className || 'bg-video-player';

	useEffect(() => {
		if (isFirstAccess) {
			console.log('Background video started');
			videoRef.defaultPlaybackRate = 16;
			videoRef.current.play();
			setFirstAccess(false);
		}

		if (isTransitionEnded === true) {
			console.log('isTransitionEnded:', isTransitionEnded);
			isSetTransitionEnded(false);
			console.log('Play BG Video');
			videoRef.currentTime = 0;
			videoRef.defaultPlaybackRate = 16;
			videoRef.current.play();
		}

		if (ref) {
			ref.current = videoRef.current;
		}
	}, [isFirstAccess, isTransitionEnded, ref]);

	return (
		<video
			ref={videoRef}
			className={className}
			poster={poster}
			muted={true}
			controls={false}
			loop
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

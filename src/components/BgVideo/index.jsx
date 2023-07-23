import React, { useEffect, useRef } from 'react';
import { useTransition } from '@/src/contexts/transitionContext';

const BgVideo = React.forwardRef(
	({ src, poster, className, autoPlay }, ref) => {
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
		autoPlay = autoPlay === undefined ? true : autoPlay;
		console.log('autoPlay:', autoPlay);

		useEffect(() => {
			if (isFirstAccess) {
				videoRef.current.play();
				setFirstAccess(false);
			}

			console.log('isTransitionEnded:', isTransitionEnded);
			if (isTransitionEnded === true) {
				console.log('???');
				videoRef.current.play();
				isSetTransitionEnded(false);
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
				autoPlay={autoPlay}
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
	}
);

export default BgVideo;

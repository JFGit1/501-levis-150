import React, { useEffect, useRef } from 'react';

const BgVideo = React.forwardRef(
	({ src, poster, className, autoPlay }, ref) => {
		const videoRef = useRef(null);

		src = src || '';
		poster = poster || '';
		className = className || 'bg-video-player';
		autoPlay = autoPlay || true;

		useEffect(() => {
			if (videoRef.current) {
				videoRef.current.play();
			}
		}, []);

		useEffect(() => {
			if (ref) {
				ref.current = videoRef.current;
			}
		}, [ref]);

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

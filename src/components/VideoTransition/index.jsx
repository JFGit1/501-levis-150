import React, { useRef, useEffect, useState } from 'react';

const VideoTransition = ({ videoSrc, showVideo, onVideoEnd }) => {
	const videoRef = useRef(null);
	const videoContainerRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;
		const videoContainer = videoContainerRef.current;

		const handleVideoEnd = () => {
			video.pause();
			video.currentTime = 0;
			videoContainer.style.display = 'none';
			onVideoEnd();
		};

		video.addEventListener('ended', handleVideoEnd);

		if (showVideo) {
			video.currentTime = 0;
			video.play();
			videoContainer.style.display = 'block';
		} else {
			video.pause();
			videoContainer.style.display = 'none';
		}

		return () => {
			video.removeEventListener('ended', handleVideoEnd);
		};
	}, [showVideo]);

	return (
		<div
			ref={videoContainerRef}
			className={`video-transition ${
				showVideo ? 'visible' : ''
			} fixed top-0 left-0 z-[120] w-screen h-screen`}>
			<video
				className='absolute object-cover top-0 left-0 z-50 w-screen h-screen'
				ref={videoRef}
				src={videoSrc}
				muted
			/>
		</div>
	);
};

export default VideoTransition;

import { useTransition } from '@/src/contexts/transitionContext';
import { useEffect, useState } from 'react';

const preloadVideosSequentially = videoUrls => {
	const preloadVideo = url => {
		return new Promise((resolve, reject) => {
			const video = new Audio(url);
			video.preload = 'auto';
			video.onloadeddata = resolve;
			video.onerror = reject;
		});
	};

	return videoUrls.reduce((prevPromise, videoUrl) => {
		return prevPromise.then(() => preloadVideo(videoUrl));
	}, Promise.resolve());
};

const VideoPreloader = () => {
	const { primaryVideoUrls, secondaryVideoUrls } = useTransition();

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const primaryListVideoUrls = primaryVideoUrls;
		const secondaryListVideoUrls = secondaryVideoUrls;

		/* const primaryListVideoUrls = [
			'/videos/Video-Transition-06-3--22.mp4',
			'/videos/Video-Transition-07--22.mp4',
		];

		const secondaryListVideoUrls = [
			'/videos/501-denim-workshop-v1--32.mp4',
			'/videos/501-one-take-v1--32.mp4',
		]; */

		preloadVideosSequentially(primaryListVideoUrls)
			.then(() => preloadVideosSequentially(secondaryListVideoUrls))
			.then(() => {
				setIsLoaded(true);
			})
			.catch(error => {
				console.error('Error:', error);
			});
	}, []);

	if (!isLoaded) {
		return null;
	}

	return null;
};

export default VideoPreloader;

/* import { useEffect } from 'react';

const VideoPreloader = () => {
	useEffect(() => {
		const videoUrls = [
			'/videos/Video-Transition-06-3--22.mp4',
			'/videos/Video-Transition-07--22.mp4',
		];

		const preloadVideo = url => {
			const video = new Audio(url);
			video.preload = 'auto';
		};

		videoUrls.forEach(url => {
			preloadVideo(url);
			console.log('url:', url);
		});
	}, []);

	return null;
};

export default VideoPreloader; */

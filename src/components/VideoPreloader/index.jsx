import { useEffect, useState } from 'react';
import { useTransition } from '@/src/contexts/transitionContext';

const VideoPreloader = () => {
	const { primaryVideoUrls } = useTransition();

	const [isVideoPreloaderRun, setIsVideoPreloaderRun] = useState(false);

	useEffect(() => {
		const videoUrls = primaryVideoUrls;
		const preloadVideo = url => {
			const video = new Audio(url);
			video.preload = 'auto';
		};
		if (!isVideoPreloaderRun) {
			console.log('Video Preloader');
			setIsVideoPreloaderRun(false);
			videoUrls.forEach(url => {
				preloadVideo(url);
				console.log('url:', url);
			});
		}
	}, [isVideoPreloaderRun]);

	return null;
};

export default VideoPreloader;

/* import { useTransition } from '@/src/contexts/transitionContext';
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

		// const primaryListVideoUrls = [
		// 	'/videos/Video-Transition-06-3--22.mp4',
		// 	'/videos/Video-Transition-07--22.mp4',
		// ];

		// const secondaryListVideoUrls = [
		// 	'/videos/501-denim-workshop-v1--32.mp4',
		// 	'/videos/501-one-take-v1--32.mp4',
		// ];

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

export default VideoPreloader; */

import { useEffect, useCallback } from 'react';
import * as htmlToImage from 'html-to-image';
import { useTransition } from '@/src/contexts/transitionContext';

const CaptureScreen = ({
	captureDivRef,
	bgVideoRef,
	handleVideoCanvas,
	hasBgVideo,
}) => {
	const {
		isStartCapture,
		startingTransition,
		handleBgCapturedImage,
		isTransitionInProgress,
		transitionInProgress,
	} = useTransition();

	useEffect(() => {
		if (isStartCapture && !isTransitionInProgress) {
			console.log('STEP - 3');
			handleCaptureScreen();
			transitionInProgress(true);
		}
	}, [isStartCapture, isTransitionInProgress]);

	const handleCaptureScreen = useCallback(() => {
		console.log('STEP - 4');
		const numDelay = hasBgVideo ? 80 : 0;

		// console.log('numDelay:', numDelay);
		// console.log('bgVideoRef', bgVideoRef);
		// console.log('hasBgVideo:', hasBgVideo);

		if (hasBgVideo) {
			bgVideoRef.current.pause();

			const Video = bgVideoRef.current;
			const newCanvas = document.createElement('canvas');
			newCanvas.width = Video.videoWidth;
			newCanvas.height = Video.videoHeight;
			Video.currentTime = bgVideoRef.current.currentTime;
			const ctx = newCanvas.getContext('2d');
			ctx.drawImage(Video, 0, 0);

			handleVideoCanvas(newCanvas, false);
		}

		const captureDiv = captureDivRef.current;
		// console.log('captureDiv:', captureDiv);
		setTimeout(() => {
			htmlToImage
				.toPng(captureDiv)
				.then(dataUrl => {
					//console.log('Image captured:', dataUrl);
					console.log('STEP - 6');
					handleBgCapturedImage(dataUrl);
				})
				.catch(error => {
					console.error('Error capturing screenshot:', error);
				})
				.finally(() => {
					//console.log('Finally');
					console.log('STEP - 8');
					startingTransition(true);
				});
		}, numDelay);
	}, []);

	return null;
};

export default CaptureScreen;

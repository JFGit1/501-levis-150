import { useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';

const ScreenshotCapture = ({
	captureDivRef,
	pauseVideo,
	setCapturedImage,
	progress,
	handleProgress,
}) => {
	const captureScreenshot = useCallback(() => {
		if (!progress) return;

		pauseVideo();
		const captureDiv = captureDivRef.current;
		setTimeout(() => {
			html2canvas(captureDiv, {
				useCORS: true,
				scale: 1,
			})
				.then(canvas => {
					const imageCanvas = canvas.toDataURL('image/png');
					setCapturedImage(imageCanvas);
				})
				.catch(error => {
					console.error('Erro ao capturar screenshot:', error);
				})
				.finally(() => {
					//console.log('finally');
					handleProgress();
				});
		}, 100);
	}, [captureDivRef, pauseVideo, setCapturedImage, progress, handleProgress]);

	useEffect(() => {
		if (!progress) return;
		captureScreenshot();
	}, [progress]);

	return null;
};

export default ScreenshotCapture;

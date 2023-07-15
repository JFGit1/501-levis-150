import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';

const ScreenshotCapture = ({
	captureDivRef,
	pauseVideo,
	setCapturedImage,
	onCapture,
	bgFlipContainerRef,
	captureProgress,
}) => {
	console.log('captureProgress', captureProgress);
	useEffect(() => {
		const capturarScreenshot = () => {
			if (!captureProgress) {
				return;
			}

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
						console.log('ok');
					})
					.catch(error => {
						console.error('Erro ao capturar screenshot:', error);
					})
					.finally(() => {
						console.log('end');
						console.log(bgFlipContainerRef);
						// bgFlipContainerRef.current.style.opacity = 1;
					});
			}, 60);
		};

		onCapture(capturarScreenshot);

		return () => {
			onCapture(null);
		};
	}, [
		captureDivRef,
		pauseVideo,
		setCapturedImage,
		onCapture,
		bgFlipContainerRef,
	]);

	return null;
};

export default ScreenshotCapture;

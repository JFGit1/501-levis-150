import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';

const ScreenshotCapture = ({ captureDivRef, pauseVideo, setCapturedImage }) => {
	useEffect(() => {
		const capturarScreenshot = () => {
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
						//pauseVideo();
						console.log('end');
					});
			}, 60);
		};

		const btn = document.querySelector('#btn-ss');
		btn.addEventListener('click', capturarScreenshot);

		return () => {
			btn.removeEventListener('click', capturarScreenshot);
			//pauseVideo();
		};
	}, [captureDivRef, pauseVideo, setCapturedImage]);

	return (
		<div>
			<div>
				<a
					id='btn-ss'
					className='text-white'
					href='#'
					onClick={e => {
						e.preventDefault();
					}}>
					Screenshot
				</a>
			</div>
		</div>
	);
};

export default ScreenshotCapture;

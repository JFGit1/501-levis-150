import React, { useCallback, useEffect, useRef, useState } from 'react';

import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';

import { useTransition } from '../contexts/transitionContext';
import BgVideo from '../components/BgVideo';
import CaptureScreen from '../components/CaptureScreen';

import { PiArrowCircleRightThin } from 'react-icons/pi';

function PageA() {
	const { isFirstAccess, setFirstAccess } = useTransition();

	// Capture Screen
	const captureDivRef = useRef();
	const bgVideoRef = useRef(null);

	const [videoCanvas, setVideoCanvas] = useState(null);
	const [isVideoDisplay, setIsVideoDisplay] = useState(false);
	const [hasBgVideo, setHasBgVideo] = useState(false);

	const handleVideoCanvas = useCallback((canvas, display) => {
		setVideoCanvas(canvas);

		if (display) {
			setIsVideoDisplay(display);
		} else {
			setTimeout(() => {
				setIsVideoDisplay(display);
			}, 60);
		}
	});

	useEffect(() => {
		if (isFirstAccess) {
			setFirstAccess(false);
		}
	}, []);

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<CaptureScreen
				captureDivRef={captureDivRef}
				bgVideoRef={bgVideoRef}
				handleVideoCanvas={handleVideoCanvas}
				hasBgVideo={hasBgVideo}
			/>
			<LayoutMotion>
				<div
					ref={captureDivRef}
					className='w-screen h-screen bg-cover bg-center bg-black bg-[url(/images/bg-01-1.jpg)]'>
					<div
						className='w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden'
						style={{
							backgroundImage: videoCanvas
								? `url(${videoCanvas.toDataURL()})`
								: 'none',
						}}>
						<main className='container h-full flex flex-col justify-center items-center mx-auto relative z-10'>
							<h1 className='text-7xl text-white font-semibold'>
								Page B
							</h1>
						</main>
						{isVideoDisplay && hasBgVideo && (
							<BgVideo ref={bgVideoRef} src={''} poster={''} />
						)}
					</div>
				</div>
			</LayoutMotion>
		</>
	);
}

export default PageA;

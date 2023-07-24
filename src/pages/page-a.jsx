import React, { useCallback, useEffect, useRef, useState } from 'react';

import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';

import { useTransition } from '../contexts/transitionContext';
import BgVideo from '../components/BgVideo';
import CaptureScreen from '../components/CaptureScreen';

import { PiArrowCircleRightThin } from 'react-icons/pi';

function PageA() {
	// BACKGROUND VIDEO - Setup
	const hasBgVideo = true;
	const bgVideoSrc = '/videos/501-one-take-v1--32.mp4';
	const bgVideoPoster = '/images/poster-501-one-take-v1.jpg';

	const {
		isFirstAccess,
		setFirstAccess,
		isBgVideoDisplay,
		bgVideoDisplay,
		startCapture,
		handleIndexBgTransitions,
	} = useTransition();

	// Capture Screen
	const captureDivRef = useRef();
	const bgVideoRef = useRef(null);

	const [videoCanvas, setVideoCanvas] = useState(null);

	const handleVideoCanvas = useCallback((canvas, display) => {
		console.log('???');
		setVideoCanvas(canvas);

		if (display) {
			console.log('??? aaa');
			bgVideoDisplay(display);
		} else {
			console.log('??? bbb');
			setTimeout(() => {
				bgVideoDisplay(display);
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
					className='w-screen h-screen bg-cover bg-center bg-black bg-[url(/images/poster-501-one-take-v1.jpg)]'>
					<div
						className='w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden'
						style={{
							backgroundImage: videoCanvas
								? `url(${videoCanvas})`
								: 'none',
						}}>
						<main className='container h-full flex flex-col justify-center items-center mx-auto relative z-10'>
							{/* CONTENT HERE - Open */}
							<h1 className='text-7xl text-white font-semibold'>
								501 Digital Experience
							</h1>
							{/* CONTENT HERE - Close */}
						</main>
						<button
							className='text-white absolute z-50 top-2/4 right-4 -translate-y-1/2'
							href='/page-b'
							onClick={e => {
								e.preventDefault();
								// const linkUrl = e.currentTarget.href;
								const linkUrl = e.target.baseURI;
								console.log('linkUrl:', linkUrl);
								console.log('STEP - 1');
								handleIndexBgTransitions(0);
								startCapture(true, '/page-b');
							}}>
							<PiArrowCircleRightThin className='text-[64px] hover:text-[72px] hover:translate-x-2 origin-center transition-all duration-200' />
						</button>
						{isBgVideoDisplay && hasBgVideo && (
							<BgVideo
								ref={bgVideoRef}
								src={bgVideoSrc}
								poster={bgVideoPoster}
								autoPlay={true}
							/>
						)}
					</div>
				</div>
			</LayoutMotion>
		</>
	);
}

export default PageA;

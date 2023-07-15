import { useContext, useRef, useState } from 'react';

import Seo from '@/src/components/Seo';
import LayoutMotion from '@/src/components/LayoutMotion';

import AppContext from '@/src/components/AppContext';
import VideoPlayer from 'react-background-video-player';
import ScreenshotCapture from '@/src/components/ScreenshotCapture';

export default function SplashPage() {
	const { videoVisible, setVideoVisible, handleVideoLink, handleVideoEnd } =
		useContext(AppContext);

	const videoRef = useRef(null);
	const navRightRef = useRef(null);
	const captureDivRef = useRef();
	const bgFlipContainerRef = useRef();

	const [capturing, setCapturing] = useState(false);
	const [capturedImage, setCapturedImage] = useState('');
	const [videoCanvas, setVideoCanvas] = useState(null);
	const [videoDisplay, setVideoDisplay] = useState(true);
	const [captureProgress, setCaptureProgress] = useState(false);

	const pauseVideo = () => {
		console.log('pauseVideo');
		if (!videoRef.current) return;
		videoRef.current.pause();

		const Video = videoRef.current.video;
		const newCanvas = document.createElement('canvas');
		newCanvas.width = Video.videoWidth;
		newCanvas.height = Video.videoHeight;
		Video.currentTime = videoRef.current.video.currentTime;
		const ctx = newCanvas.getContext('2d');
		ctx.drawImage(Video, 0, 0);

		setVideoCanvas(newCanvas);
		setVideoDisplay(false);
	};

	const handleCapture = captureFunction => {
		console.log('a');
		setCaptureProgress(true);
		if (captureFunction && capturing) {
			console.log('b');
			captureFunction();
		}
	};

	const handleCaptureFinished = () => {
		setCaptureProgress(false);
	};

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			{/* <TransitionEffect /> */}
			<LayoutMotion>
				<div className='relative'>
					<button
						onClick={e => {
							setCapturing(true);
						}}
						ref={navRightRef}
						className='absolute rounded-full flex text-lg leading-none items-center justify-center right-4 top-2/4 bg-black/50 hover:bg-primary/90 z-50 text-white h-[48px] w-[48px] -translate-y-2/4'>
						&#x27A4;
					</button>

					<div
						ref={captureDivRef}
						id='capture-screenshot'
						className='w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url(/images/poster-501-one-take-v1.jpg)]'>
						<div
							className='w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden'
							style={{
								backgroundImage: videoCanvas
									? `url(${videoCanvas.toDataURL()})`
									: 'none',
							}}>
							<main className='container h-screen w-screen flex flex-col justify-center items-center overflow-hidden'>
								<div className='relative z-10 text-white font-medium text-2xl'>
									<ScreenshotCapture
										captureDivRef={captureDivRef}
										pauseVideo={pauseVideo}
										setCapturedImage={setCapturedImage}
										onCapture={handleCapture}
										bgFlipContainerRef={bgFlipContainerRef}
										captureProgress={captureProgress}
										handleCaptureFinished={handleCaptureFinished}
									/>
								</div>
								{videoDisplay && (
									<VideoPlayer
										ref={videoRef}
										className='video'
										poster={'/images/poster-501-one-take-v1.jpg'}
										src={'/videos/501-one-take-v1--32.mp4'}
										autoPlay={true}
										muted={true}
									/>
								)}

								{capturedImage && (
									<div
										ref={bgFlipContainerRef}
										className='z-50 bg-black top-0 left-0 fixed w-screen h-screen opacity-0 transition-all duration-300'>
										<div
											className='w-screen h-screen'
											style={{
												perspective: '1000px',
											}}>
											<div className='top-0 left-0 absolute w-[50vw] h-screen overflow-hidden z-[1]'>
												<div
													className='w-screen h-screen bg-no-repeat bg-cover bg-center'
													style={{
														backgroundImage: `url(${capturedImage})`,
													}}></div>
											</div>

											<div
												className='top-0 left-2/4 absolute w-[50vw] h-screen overflow-hidden z-[2] origin-left'
												style={{
													transformStyle: 'preserve-3d',
													transition:
														'transform 0.8s cubic-bezier(0.97, 0.44, 0.49, 0.87) 0s',
													transform: 'rotateY(0deg)',
												}}>
												<div
													className='w-screen h-screen bg-no-repeat bg-cover bg-center -translate-x-2/4'
													style={{
														backgroundImage: `url(${capturedImage})`,
													}}></div>
											</div>
										</div>
									</div>
								)}
							</main>
						</div>
					</div>
				</div>
			</LayoutMotion>
		</>
	);
}

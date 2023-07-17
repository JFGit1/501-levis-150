import { useRef, useState, useEffect, useCallback } from 'react';

import Seo from '@/src/components/Seo';
import LayoutMotion from '@/src/components/LayoutMotion';
import VideoPlayer from 'react-background-video-player';
import ScreenshotCapture from '@/src/components/ScreenshotCapture';
import { gsap } from 'gsap';

export default function SplashPage() {
	const videoRef = useRef(null);
	const captureDivRef = useRef();
	const bgFlipContainerRef = useRef(null);
	const bgFlipInnerRef = useRef(null);
	const bgFlipRightRef = useRef(null);

	const [capturedImage, setCapturedImage] = useState('');
	const [videoCanvas, setVideoCanvas] = useState(null);
	const [videoDisplay, setVideoDisplay] = useState(true);
	const [capturing, setCapturing] = useState(false);
	const [progress, setProgress] = useState(false);
	const [bgAnimation, setBgAnimation] = useState(false);

	const pauseVideo = () => {
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

	const handleCapture = useCallback(
		captureFunction => {
			if (captureFunction && capturing) {
				captureFunction();
			}
		},
		[capturing]
	);

	const handleProgress = useCallback(() => {
		setProgress(false);
		setBgAnimation(true);
	}, []);

	useEffect(() => {
		if (bgAnimation) {
			console.log('bgFlipContainerRef');
			gsap.fromTo(
				bgFlipContainerRef.current,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 0.4,
					ease: 'power2.out',
				}
			);
			/* gsap.to(bgFlipInnerRef.current, {
				delay: 0.4,
				duration: 0.6,
				scale: 0.8,
				ease: 'power2.out',
			}); */
			gsap.to(bgFlipRightRef.current, {
				// delay: 1.2,
				delay: 0.4,
				rotateY: -80,
				duration: 1.4,
				ease: 'back.in(1.7)',
			});
			/* gsap.to(bgFlipInnerRef.current, {
				delay: 2.5,
				duration: 1.2,
				opacity: 0,
				ease: 'power2.out',
			}); */

			setBgAnimation(false);
		}
	}, [bgAnimation]);

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<LayoutMotion>
				<div>
					<button
						className='text-white bg-primary absolute z-50 top-2/4 right-4'
						href='#'
						onClick={e => {
							e.preventDefault();
							setCapturing(true);
							setProgress(true);
						}}>
						Right
					</button>
				</div>
				<div
					ref={captureDivRef}
					id='capture-screenshot'
					className='w-screen h-screen max-h-screen max-w-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-[url(/images/poster-501-one-take-v1.jpg)]'>
					<div
						className='w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden'
						style={{
							backgroundImage: videoCanvas
								? `url(${videoCanvas.toDataURL()})`
								: 'none',
						}}>
						<main className='container h-[200vh] w-screen flex flex-col justify-center items-center overflow-hidden'>
							<div className='relative z-10 text-white font-medium text-2xl'>
								<ScreenshotCapture
									captureDivRef={captureDivRef}
									pauseVideo={pauseVideo}
									setCapturedImage={setCapturedImage}
									onCapture={handleCapture}
									progress={progress}
									handleProgress={handleProgress}
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
									id='bgFlipContainerRef'
									ref={bgFlipContainerRef}
									className='z-50 bg-black top-0 left-0 fixed w-screen h-screen opacity-0'>
									<div
										ref={bgFlipInnerRef}
										className='w-screen h-screen'>
										<div className='top-0 left-0 absolute w-[50vw] h-screen overflow-hidden z-[1]'>
											<div
												className='w-screen h-screen bg-no-repeat bg-cover bg-center'
												style={{
													backgroundImage: `url(${capturedImage})`,
												}}></div>
										</div>
										<div
											className='top-0 left-2/4 absolute w-[50vw] h-screen z-[2]'
											style={{
												perspective: '800px',
											}}>
											<div
												ref={bgFlipRightRef}
												id='bg-flip-right-inner'
												className='origin-left'
												style={{
													transformStyle: 'preserve-3d',
												}}>
												<div
													id='bg-flip-right-front'
													className='w-[50vw] overflow-hidden'>
													<div
														className='absolute w-screen h-screen bg-no-repeat bg-cover bg-center left-0 top-0'
														style={{
															backgroundImage: `url(${capturedImage})`,
															transform: 'translateX(-50%)',
														}}></div>
												</div>
												<div id='bg-flip-right-back'></div>
											</div>
										</div>
									</div>
								</div>
							)}
						</main>
					</div>
				</div>
			</LayoutMotion>
		</>
	);
}

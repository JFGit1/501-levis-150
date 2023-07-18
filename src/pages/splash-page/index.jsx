import { useRef, useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';

import AppContext from '@/src/components/AppContext';
import Seo from '@/src/components/Seo';
import LayoutMotion from '@/src/components/LayoutMotion';
import VideoPlayer from 'react-background-video-player';
import ScreenshotCapture from '@/src/components/ScreenshotCapture';
import { gsap } from 'gsap';

import { PiArrowCircleRightThin } from 'react-icons/pi';

export default function SplashPage() {
	const { videoVisible, setVideoVisible, handleVideoLink, handleVideoEnd } =
		useContext(AppContext);

	const router = useRouter();
	const videoRef = useRef(null);
	const captureDivRef = useRef();
	const bgFlipContainerRef = useRef(null);
	const bgFlipInnerRef = useRef(null);
	const bgFlipRightRef = useRef(null);
	const navContainer = useRef(null);

	const [capturedImage, setCapturedImage] = useState(null);
	const [videoCanvas, setVideoCanvas] = useState(null);
	const [videoDisplay, setVideoDisplay] = useState(true);
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

	const handleProgress = useCallback(() => {
		setProgress(false);
		setBgAnimation(true);
	}, []);

	useEffect(() => {
		if (bgAnimation) {
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

			/* RESET */
			setBgAnimation(false);
			setTimeout(() => {
				handleVideoLink();
			}, 2000);

			setTimeout(() => {
				bgFlipContainerRef.current.style.display = 'none';
				setVideoDisplay(true);
				setBgAnimation(false);
				setCapturedImage(null);

				gsap.to(navContainer.current, {
					opacity: 1,
					duration: 0.4,
					ease: 'power2.out',
				});

				router.push('/home');
			}, 4000);
		}
	}, [bgAnimation]);

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<LayoutMotion>
				<div ref={navContainer}>
					<button
						className='text-white absolute z-50 top-2/4 right-4 -translate-y-1/2'
						href='#'
						onClick={e => {
							e.preventDefault();
							setProgress(true);
							gsap.to(navContainer.current, {
								opacity: 0,
								duration: 0.8,
								ease: 'power2.in',
							});
						}}>
						<PiArrowCircleRightThin className='text-[64px] hover:text-[72px] hover:translate-x-2 origin-center transition-all duration-200' />
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
						<main className='h-screen w-screen flex flex-col justify-center items-center overflow-hidden'>
							<div className='relative z-10 text-white font-medium text-2xl'>
								<div className='container mx-auto'></div>
								<ScreenshotCapture
									captureDivRef={captureDivRef}
									pauseVideo={pauseVideo}
									setCapturedImage={setCapturedImage}
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

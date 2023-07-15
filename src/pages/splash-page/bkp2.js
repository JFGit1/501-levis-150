import { useRef, useState } from 'react';

import VideoPlayer from 'react-background-video-player';
import ScreenshotCapture from '@/src/components/ScreenshotCapture';

export default function SplashPage() {
	const videoRef = useRef(null);
	const captureDivRef = useRef();
	const [capturedImage, setCapturedImage] = useState('');
	const [videoCanvas, setVideoCanvas] = useState(null);
	const [videoDisplay, setVideoDisplay] = useState(true);

	const pauseVideo = () => {
		console.log('pauseVideo');
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
		console.log('newCanvas:', newCanvas);
	};

	return (
		<>
			<div
				ref={captureDivRef}
				id='capture-screenshot'
				className='w-screen h-screen overflow-hidden bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${videoCanvas?.toDataURL()})` }}>
				<div>
					<div className='absolute z-10 text-white font-medium text-2xl'>
						<ScreenshotCapture
							captureDivRef={captureDivRef}
							pauseVideo={pauseVideo}
							setCapturedImage={setCapturedImage}
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
				</div>
			</div>
		</>
	);
}

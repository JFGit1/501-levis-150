import Link from 'next/link';

import Seo from '@/src/components/Seo';
import TransitionEffect from '@/src/components/TransitionEffect';
import LayoutMotion from '@/src/components/LayoutMotion';

import AppContext from '@/src/components/AppContext';
import { useContext } from 'react';
import VideoPlayer from 'react-background-video-player';

export default function Home() {
	const { videoVisible, setVideoVisible, handleVideoLink, handleVideoEnd } =
		useContext(AppContext);
	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			{/* <TransitionEffect /> */}
			<LayoutMotion>
				<div className='w-screen h-screen bg-cover bg-center bg-[url(/images/poster-501-one-take-v1.jpg)]'>
					<main className='container h-screen w-screen flex flex-col justify-center items-center'>
						<VideoPlayer
							className='video'
							poster={'/images/poster-501-one-take-v1.jpg'}
							src={'/videos/501-one-take-v1--32.mp4'}
							autoPlay={true}
							muted={true}
						/>
					</main>
				</div>
			</LayoutMotion>
		</>
	);
}

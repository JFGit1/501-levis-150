import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import VideoTransition from '../components/VideoTransition';
import AppContext from '../components/AppContext';

import dynamic from 'next/dynamic';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	const [videoVisible, setVideoVisible] = useState(false);

	const handleVideoLink = () => {
		setVideoVisible(true);
	};

	const handleVideoEnd = () => {
		setVideoVisible(false);
	};
	/* const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
		ssr: false,
	}); */
	return (
		<>
			{/* <Header /> */}
			<VideoTransition
				videoSrc='/videos/Video-Transition-06-3--22.mp4'
				showVideo={videoVisible}
				onVideoEnd={handleVideoEnd}
			/>
			<AppContext.Provider
				value={{
					videoVisible,
					setVideoVisible,
					handleVideoLink,
					handleVideoEnd,
				}}>
				<AnimatePresence
					mode='wait'
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</AppContext.Provider>
			{/* <AnimatedCursor
				innerSize={12}
				outerSize={65}
				//color='196, 18, 41'
				color='255, 255, 255'
				innerScale={1}
				outerScale={1.8}
				innerStyle={{
					boxShadow: '0 0 15px 0 rgba(0,0,0,0.3)',
					border: '1px solid #cccccc',
				}}
				outerStyle={{
					backgroundColor: '#00000044',
					border: '1px solid #ffffff',
					mixBlendMode: 'overlay',
				}}
				clickables={[
					'a',
					'input[type="text"]',
					'input[type="email"]',
					'input[type="number"]',
					'input[type="submit"]',
					'input[type="image"]',
					'label[for]',
					'select',
					'textarea',
					'button',
					'.link',
				]}
			/> */}
		</>
	);
}

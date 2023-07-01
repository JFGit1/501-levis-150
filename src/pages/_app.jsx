import React, { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import VideoTransition from '../components/VideoTransition';
import AppContext from '../components/AppContext';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	const [videoVisible, setVideoVisible] = useState(false);

	const handleVideoLink = () => {
		setVideoVisible(true);
	};

	const handleVideoEnd = () => {
		setVideoVisible(false);
	};

	return (
		<>
			<Header />
			<VideoTransition
				videoSrc='/videos/video-transition-03-1-22.mp4'
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
		</>
	);
}

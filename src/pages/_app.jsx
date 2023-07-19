import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import VideoTransition from '../components/VideoTransition';

import AppContext from '../components/AppContext';

import { TransitionProvider } from '../contexts/transitionContext';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	const [videoVisible, setVideoVisible] = useState(false);

	const bgVideoPages = [
		'/videos/Video-Transition-06-3--22.mp4',
		'/videos/Video-Transition-06-3-Pg2--22.mp4',
	];

	const handleVideoLink = () => {
		setVideoVisible(true);
	};

	const handleVideoEnd = () => {
		setVideoVisible(false);
	};

	return (
		<>
			<TransitionProvider>
				<Header />
				{/* <VideoTransition
					videoSrc={bgVideoPages[1]}
					showVideo={videoVisible}
					onVideoEnd={handleVideoEnd}
				/> */}
				{/* <AppContext.Provider
					value={{
						videoVisible,
						setVideoVisible,
						handleVideoLink,
						handleVideoEnd,
					}}> */}
				<AnimatePresence
					mode='wait'
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
				{/* </AppContext.Provider> */}
			</TransitionProvider>
		</>
	);
}

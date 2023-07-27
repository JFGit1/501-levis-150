import { AnimatePresence } from 'framer-motion';

import { TransitionProvider } from '../contexts/transitionContext';
import VideoPreloader from '../components/VideoPreloader';
import VideoTransition from '../components/VideoTransition';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<TransitionProvider>
				<VideoPreloader />
				<VideoTransition />
				<AnimatePresence
					mode='wait'
					initial={false}
					onExitComplete={() => window.scrollTo(0, 0)}>
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
			</TransitionProvider>
		</>
	);
}

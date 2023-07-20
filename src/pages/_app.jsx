import { AnimatePresence } from 'framer-motion';

import { TransitionProvider } from '../contexts/transitionContext';
import Header from '../components/Header';
import Transition from '../components/Transition';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<TransitionProvider>
				<Transition />
				<Header />
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

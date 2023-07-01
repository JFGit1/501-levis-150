import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';

import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<Header />
			<AnimatePresence
				mode='wait'
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</>
	);
}

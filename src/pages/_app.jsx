import Header from '../components/Header';
import '@/src/styles/globals.css';

export default function App({ Component, pageProps, router }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

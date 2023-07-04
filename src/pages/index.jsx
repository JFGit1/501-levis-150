import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';
import TransitionEffect from '../components/TransitionEffect';
import Link from 'next/link';

import AppContext from '@/src/components/AppContext';
import { useContext } from 'react';

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
				<main className='container h-[85vh] flex flex-col justify-center items-center mx-auto'>
					<h1 className='font-bold text-2xl mb-4'>Login Page</h1>
					<Link
						href='/splash-page'
						onClick={handleVideoLink}
						className='border border-neutral-300 px-4 pt-2 pb-2.5 leading-none bg-white text-primary font-medium'>
						Login
					</Link>
				</main>
			</LayoutMotion>
		</>
	);
}

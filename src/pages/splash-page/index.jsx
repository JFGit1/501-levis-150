import { useContext } from 'react';
import Link from 'next/link';
import LayoutMotion from '@/src/components/LayoutMotion';

import Seo from '@/src/components/Seo';
import AppContext from '@/src/components/AppContext';
import TransitionEffect from '@/src/components/TransitionEffect';

export default function SplashPage() {
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
					<h1 className='font-bold text-2xl mb-4'>Splash Page</h1>
					<Link
						href='/home'
						onClick={handleVideoLink}
						className='px-4 pt-2 pb-2.5 leading-none bg-primary text-white font-medium hover:text-white'>
						Enter
					</Link>
				</main>
			</LayoutMotion>
		</>
	);
}

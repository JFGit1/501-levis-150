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
				<div className='w-screen h-screen bg-cover bg-center bg-[url(/images/bg-02-1.jpg)]'>
					<main className='container h-[85vh] flex flex-col justify-center items-center mx-auto'>
						<h1 className='font-semibold text-5xl mt-72 mb-4 text-white '>
							Splash Page
						</h1>
						<Link
							href='/home'
							onClick={handleVideoLink}
							className='px-4 pt-2 pb-2.5 leading-none bg-primary text-white font-medium hover:text-white'>
							Enter
						</Link>
					</main>
				</div>
			</LayoutMotion>
		</>
	);
}

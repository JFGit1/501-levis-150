import Link from 'next/link';

import Seo from '@/src/components/Seo';
import TransitionEffect from '@/src/components/TransitionEffect';
import LayoutMotion from '@/src/components/LayoutMotion';

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
					<h1 className='font-bold text-2xl mb-4'>Home</h1>
					<Link
						href='/'
						onClick={handleVideoLink}
						className='border border-neutral-300 px-4 pt-2 pb-2.5 leading-none bg-white text-primary font-medium'>
						Logout
					</Link>
				</main>
			</LayoutMotion>
		</>
	);
}

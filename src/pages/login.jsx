import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';
import Link from 'next/link';

import AppContext from '@/src/components/AppContext';
import { useContext } from 'react';

export default function Login() {
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
				<div className='w-screen h-screen bg-black'>
					<main className='container h-[85vh] flex flex-col justify-end items-center mx-auto'>
						<Link
							href='/home'
							onClick={handleVideoLink}
							className='transition-all duration-300 px-8 pt-3 pb-4 uppercase leading-none bg-primary text-white hover:text-white font-medium text-2xl hover:px-10 hover:pb-6 hover:pt-5 hover:-mb-2 tracking-[0.05rem]'>
							ENTER
						</Link>
					</main>
				</div>
			</LayoutMotion>
		</>
	);
}

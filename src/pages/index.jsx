import Seo from '../components/Seo';
import { motion } from 'framer-motion';
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
				<div className='w-screen h-screen bg-cover bg-center bg-[url(/images/bg-01-1.jpg)]'>
					<main className='container h-[85vh] flex flex-col justify-end items-center mx-auto'>
						{/* <h1 className='font-semibold text-5xl mt-72 mb-4 text-white '>
							Login Page
						</h1> */}

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

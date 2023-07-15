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
					<main className='container h-[85vh] flex flex-col justify-end items-center mx-auto'></main>
				</div>
			</LayoutMotion>
		</>
	);
}

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import Seo from '../components/Seo';
import Header from '../components/Header';
import LayoutMotion from '../components/LayoutMotion';

import { useTransition } from '../contexts/transitionContext';
import BgVideo from '../components/BgVideo';

import { PiArrowCircleRightThin } from 'react-icons/pi';

function Home() {
	// BACKGROUND VIDEO - Setup
	const hasBgVideo = true;
	const bgVideoSrc = '/videos/501-denim-workshop-v1--32.mp4';
	const bgVideoPoster = '/images/poster-501-denim-workshop-v1.jpg';

	const { handleStartingTransition } = useTransition();

	const handleClick = e => {
		console.log('STEP - 01');
		e.preventDefault();

		const linkUrl = e.currentTarget.getAttribute('href');
		const indexTransition = e.currentTarget.getAttribute('indextransition');
		handleStartingTransition(true, linkUrl, indexTransition);
	};

	return (
		<>
			<Seo
				title="Workshop - 501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<Header />
			<LayoutMotion>
				<div
					className='w-screen h-screen bg-cover bg-center bg-black'
					style={{ backgroundImage: `url(${bgVideoPoster})` }}>
					<main className='container h-full flex flex-col justify-center items-center mx-auto relative z-10'>
						{/* CONTENT HERE - Open */}
						<h1 className='text-7xl text-white font-semibold'>
							501 Digital Experience
						</h1>

						{/* CONTENT HERE - Close */}
					</main>
					<Link
						href='/home'
						indextransition='0'
						onClick={handleClick}
						className='text-white absolute z-50 top-2/4 right-4 -translate-y-1/2'>
						<PiArrowCircleRightThin className='text-[64px] hover:text-[72px] hover:translate-x-2 origin-center transition-all duration-200' />
					</Link>
					{hasBgVideo && (
						<BgVideo src={bgVideoSrc} poster={bgVideoPoster} />
					)}
				</div>
			</LayoutMotion>
		</>
	);
}

export default Home;

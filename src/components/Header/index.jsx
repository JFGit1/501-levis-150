import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTransition } from '@/src/contexts/transitionContext';
import SidebarMenu from '../SidebarMenu';

export default function Header({ pageTitle }) {
	const { handleStartingTransition, handleMenuOpen } = useTransition();

	const handleClick = e => {
		console.log('STEP - 01');
		e.preventDefault();

		const linkUrl = e.currentTarget.getAttribute('href');
		const indexTransition = e.currentTarget.getAttribute('indextransition');
		handleStartingTransition(true, linkUrl, indexTransition);
		setTimeout(() => {
			handleMenuOpen(false);
		}, 1000);
	};
	return (
		<section className='flex items-center flex-col justify-center fixed bg-gradient-to-b from-black/60 to-transparent w-full z-50 top-0 left-0 pt-10 pb-10'>
			<Link href={'/home'} indextransition='0' onClick={handleClick}>
				<Image
					src={'/logo-levis-501-150.svg'}
					alt="501 Levi's 150 Anniversary"
					width={185}
					height={32}
					className='transition-all duration-300 origin-center hover:scale-110'
				/>
			</Link>
			<div
				className='text-white uppercase font-bold text-base mt-3.5'
				style={{ textShadow: '0 0 8px #00000030' }}>
				{pageTitle}
			</div>
			<SidebarMenu />
		</section>
	);
}

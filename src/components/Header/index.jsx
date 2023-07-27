import React from 'react';
import Link from 'next/link';
import { useTransition } from '@/src/contexts/transitionContext';

export default function Header() {
	const { handleStartingTransition } = useTransition();

	const handleClick = e => {
		console.log('STEP - 01');
		e.preventDefault();

		const linkUrl = e.currentTarget.getAttribute('href');
		const indexTransition = e.currentTarget.getAttribute('indextransition');
		handleStartingTransition(true, linkUrl, indexTransition);
	};
	return (
		<section className='fixed bg-black w-full z-50 top-0 left-0'>
			<nav className='container h-8 flex gap-4 justify-end items-center mx-auto'>
				<Link
					href={'/home'}
					indextransition='0'
					onClick={handleClick}
					className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
					Home
				</Link>
				<Link
					href={'/workshop'}
					indextransition='1'
					onClick={handleClick}
					className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
					Workshop
				</Link>
			</nav>
		</section>
	);
}

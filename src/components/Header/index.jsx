import React from 'react';
import Link from 'next/link';
import { useTransition } from '@/src/contexts/transitionContext';

export default function Header() {
	const { startingTransition } = useTransition();

	const handleClick = e => {
		e.preventDefault();
		const linkUrl = e.target.href;
		startingTransition(true, linkUrl);
	};
	return (
		<section className='fixed bg-black w-full z-50 top-0 left-0'>
			<nav className='container h-8 flex gap-4 justify-end items-center mx-auto'>
				<Link
					href={'/page-a'}
					onClick={handleClick}
					className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
					Page A
				</Link>
				<Link
					href={'/page-b'}
					onClick={handleClick}
					className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
					Page B
				</Link>
			</nav>
		</section>
	);
}

import Link from 'next/link';
import { useTransition } from '@/src/contexts/transitionContext';

import {
	RxHamburgerMenu,
	RxCross1,
	RxSpeakerLoud,
	RxSpeakerOff,
} from 'react-icons/rx';

const SidebarMenu = () => {
	const {
		isMenuOpen,
		handleMenuOpen,
		handleStartingTransition,
		handleMutedVideos,
		isMutedVideos,
	} = useTransition();

	const toggleMenu = () => {
		handleMenuOpen(!isMenuOpen);
	};

	const toggleMutedVideos = () => {
		handleMutedVideos(!isMutedVideos);
	};

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
		<>
			<div className='flex gap-1 absolute top-8 right-10 z-50'>
				<div
					className={`${
						isMutedVideos
							? 'bg-primary hover:bg-primary'
							: 'bg-black/25 hover:bg-black'
					}  w-11 h-11 relative cursor-pointer rounded-l-lg transition-all duration-500`}
					onClick={toggleMutedVideos}>
					<RxSpeakerLoud
						className={`${
							isMutedVideos
								? 'opacity-0 scale-50'
								: 'opacity-100 scale-100'
						} text-2xl text-white hover:text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 origin-center transition-all duration-500`}
					/>
					<RxSpeakerOff
						className={`${
							isMutedVideos
								? 'opacity-100 scale-100'
								: 'opacity-0 scale-50'
						} text-2xl text-white hover:text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 origin-center transition-all duration-500`}
					/>
				</div>
				<div
					className={`${
						isMenuOpen
							? 'bg-primary hover:bg-primary'
							: 'bg-black/25 hover:bg-black'
					}  w-11 h-11 relative cursor-pointer rounded-r-lg transition-all duration-500`}
					onClick={toggleMenu}>
					<RxHamburgerMenu
						className={`${
							isMenuOpen
								? 'opacity-0 scale-0 rotate-45'
								: 'opacity-100 scale-100 rotate-0'
						} text-3xl text-white hover:text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 origin-center transition-all duration-500`}
					/>
					<RxCross1
						className={`${
							isMenuOpen
								? 'opacity-100 -rotate-0'
								: 'opacity-0 -rotate-45'
						} text-3xl text-white hover:text-white absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 origin-center transition-all duration-500`}
					/>
				</div>
			</div>
			<div
				className={`sidebar-menu ${
					isMenuOpen ? 'open right-0' : 'right-[-420px]'
				} bg-gradient-to-b from-black/95 to-black/75 h-full md:w-[420px] top-0 fixed transition-all duration-300 pt-28`}>
				<ul className='menu list-none p-0 m-0'>
					<li>
						<Link
							href={'/home'}
							indextransition='0'
							onClick={handleClick}
							className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
							Home
						</Link>
					</li>
					<li>
						<Link
							href={'/workshop'}
							indextransition='1'
							onClick={handleClick}
							className='flex items-center text-gray-400 hover:text-white text-base uppercase font-medium leading-none'>
							Workshop
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SidebarMenu;

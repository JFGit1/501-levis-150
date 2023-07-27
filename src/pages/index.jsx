import Link from 'next/link';
import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';
import Image from 'next/image';
import { useTransition } from '../contexts/transitionContext';

export default function Home() {
	const { handleStartingTransition, handleMutedVideos } = useTransition();
	const handleClick = e => {
		console.log('STEP - 01');
		e.preventDefault();

		handleMutedVideos(false);
		const linkUrl = e.currentTarget.getAttribute('href');
		const indexTransition = e.currentTarget.getAttribute('indextransition');
		handleStartingTransition(true, linkUrl, indexTransition);
	};

	return (
		<>
			<Seo
				title="501 Levi's 150 Anniversary"
				desc="501 Levi's 150 Anniversary"
			/>
			<LayoutMotion>
				<div className='w-screen h-screen'>
					<main className='container h-full flex flex-col justify-end items-center mx-auto'>
						<Link
							href={'/home'}
							indextransition='0'
							onClick={handleClick}
							className='text-white hover:text-white font-normal text-xl px-6 pb-4 pt-3 bg-primary/80 hover:bg-primary mb-12 leading-none'>
							ENTER
						</Link>
					</main>
				</div>
			</LayoutMotion>
			<Image
				src={'/images/video-transition-poster-01-1.jpg'}
				width={1}
				height={1}
				alt='_'
				className='hidden'
			/>
		</>
	);
}

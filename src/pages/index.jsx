import Link from 'next/link';
import Seo from '../components/Seo';
import LayoutMotion from '../components/LayoutMotion';

export default function Home() {
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
							className='text-white hover:text-white font-normal text-xl px-6 pb-4 pt-3 bg-primary/80 hover:bg-primary mb-12 leading-none'>
							ENTER
						</Link>
					</main>
				</div>
			</LayoutMotion>
		</>
	);
}

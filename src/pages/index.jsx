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
				<div className='w-screen h-screen bg-cover bg-center bg-[url(/images/bg-01-1.jpg)]'>
					<main className='container h-[85vh] flex flex-col justify-end items-center mx-auto'></main>
				</div>
			</LayoutMotion>
		</>
	);
}

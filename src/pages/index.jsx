import React from 'react';
import Seo from '../components/Seo';

export default function Home() {
	return (
		<>
			<Seo
				title="501 Levi's 150 year anniversary"
				desc='501 / 150 year anniversary'
			/>
			<main className='container mx-auto '>
				<h1 className='font-bold text-2xl'>Home</h1>
			</main>
		</>
	);
}

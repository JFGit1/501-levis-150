import Link from 'next/link';

export default function Header() {
	return (
		<div className='bg-white mb-4'>
			<header className='container mx-auto flex items-center justify-between py-2'>
				<div className='font-black text-2xl text-black uppercase'>
					501 LEVI'S 150<sup className='text-xs ml-1'>th</sup>
				</div>
				<nav>
					<ul className='m-0 flex gap-5 p-0 text-base'>
						<li>
							<Link className='font-medium' href='/'>
								Login
							</Link>
						</li>
						<li>
							<Link className='font-medium' href='/splash-page'>
								Splash Page
							</Link>
						</li>
						<li>
							<Link className='font-medium' href='/home'>
								Home
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}

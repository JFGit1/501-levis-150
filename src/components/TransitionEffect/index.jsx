import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
	return (
		<>
			<motion.div
				className='fixed left-0 top-0 z-[99] h-screen w-screen origin-top-left bg-primary'
				initial={{ scaleX: '0%' }}
				animate={{ scaleX: '0%' }}
				exit={{ scaleX: ['0%', '100%'] }}
				transition={{ duration: 0.6, ease: [1, 0, 0.47, 0.77] }}
			/>

			<motion.div
				className='fixed right-0 bottom-0 z-[99] h-screen w-screen origin-bottom-right bg-primary'
				initial={{ scaleX: '100%' }}
				animate={{ scaleX: '0%' }}
				transition={{ duration: 0.4, ease: [0.365, 0.215, 0.215, 0.955] }}
			/>
			<motion.div
				className='fixed right-0 bottom-0 z-[98] h-screen w-screen origin-bottom-right bg-white'
				initial={{ scaleX: '100%' }}
				animate={{ scaleX: '0%' }}
				transition={{
					delay: 0.1,
					duration: 0.5,
					ease: [0.365, 0.215, 0.215, 0.955],
				}}
			/>
			<motion.div
				className='fixed bottom-0 z-[97] h-screen w-screen origin-bottom-right bg-neutral-300 opacity-95'
				initial={{ scaleX: '100%' }}
				animate={{ scaleX: '0%' }}
				transition={{
					delay: 0.3,
					duration: 0.6,
					ease: [0.365, 0.215, 0.215, 0.955],
				}}
			/>
		</>
	);
};

export default TransitionEffect;

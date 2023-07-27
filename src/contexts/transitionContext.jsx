import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
	const primaryVideoUrls = [
		'/videos/Video-Transition-06-3--22.mp4',
		'/videos/Video-Transition-07--22.mp4',
		'/videos/501-denim-workshop-v1--32.mp4',
		'/videos/501-one-take-v1--32.mp4',
	];

	const [isFirstAccess, setIsFirstAccess] = useState(true);
	const [isMutedVideos, setIsMutedVideos] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [isStartingTransition, setIsStartingTransition] = useState(false);
	const [isTransitionInProgress, setIsTransitionInProgress] = useState(false);
	const [isTransitionEnded, setIsTransitionEnded] = useState(false);

	const [indexBgTransitions, setIndexBgTransitions] = useState(0);
	const [linkNextPage, setLinkNextPage] = useState('');

	const handleFirstAccess = value => {
		setIsFirstAccess(value);
		console.log('isFirstAccess:', isFirstAccess);
	};

	const handleMutedVideos = value => {
		console.log('STEP - handleMutedVideos');
		setIsMutedVideos(value);
	};

	const handleFadingOut = value => {
		console.log('STEP - handleFadingOut');
		setIsFadingOut(value);
	};

	const handleMenuOpen = value => {
		console.log('Menu: ', value);
		setIsMenuOpen(value);
	};

	const handleVideoPreloaderRun = value => {
		console.log('STEP - handleVideoPreloaderRun');
		setIsVideoPreloaderRun(value);
	};

	const handleStartingTransition = (value, link, index) => {
		if (value) {
			console.log('STEP - 02');
			setIndexBgTransitions(index);
			setLinkNextPage(link);
		} else {
			console.log('STEP - 05');
		}
		setIsStartingTransition(value);
	};

	const handleTransitionInProgress = value => {
		console.log('STEP - handleTransitionInProgress');
		setIsTransitionInProgress(value);
	};

	const handleSetTransitionEnded = value => {
		console.log('STEP - handleSetTransitionEnded');
		setIsTransitionEnded(value);
	};

	const handleIndexBgTransitions = value => {
		// console.log('STEP - handleIndexBgTransitions');
		setIndexBgTransitions(value);
	};

	return (
		<TransitionContext.Provider
			value={{
				isFirstAccess,
				handleFirstAccess,

				primaryVideoUrls,

				isMenuOpen,
				handleMenuOpen,

				indexBgTransitions,
				handleIndexBgTransitions,

				isMutedVideos,
				handleMutedVideos,

				isFadingOut,
				handleFadingOut,

				isStartingTransition,
				handleStartingTransition,

				isTransitionInProgress,
				handleTransitionInProgress,

				isTransitionEnded,
				handleSetTransitionEnded,

				linkNextPage,
			}}>
			{children}
		</TransitionContext.Provider>
	);
};

export const useTransition = () => useContext(TransitionContext);

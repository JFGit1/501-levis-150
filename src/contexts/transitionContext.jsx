import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
	const primaryVideoUrls = [
		'/videos/Video-Transition-06-3--22.mp4',
		'/videos/Video-Transition-07--22.mp4',
		'/videos/501-denim-workshop-v1--32.mp4',
		'/videos/501-one-take-v1--32.mp4',
	];

	const [isFirstAccess, isSetFirstAccess] = useState(true);
	const [isMutedVideos, isSetMutedVideos] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	const [isStartingTransition, isSetStartingTransition] = useState(false);
	const [isTransitionInProgress, isSetTransitionInProgress] = useState(false);
	const [isTransitionEnded, isSetTransitionEnded] = useState(false);

	const [indexBgTransitions, setIndexBgTransitions] = useState(0);
	const [linkNextPage, setLinkNextPage] = useState('');

	const handleFirstAccess = value => {
		isSetFirstAccess(value);
		console.log('isFirstAccess:', isFirstAccess);
	};

	const handleMutedVideos = value => {
		console.log('STEP - handleMutedVideos');
		isSetMutedVideos(value);
	};

	const handleFadingOut = value => {
		console.log('STEP - handleFadingOut');
		setIsFadingOut(value);
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
		isSetStartingTransition(value);
	};

	const handleTransitionInProgress = value => {
		console.log('STEP - handleTransitionInProgress');
		isSetTransitionInProgress(value);
	};

	const handleSetTransitionEnded = value => {
		console.log('STEP - handleSetTransitionEnded');
		isSetTransitionEnded(value);
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

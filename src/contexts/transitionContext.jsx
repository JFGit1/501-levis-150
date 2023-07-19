import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
	// const [isTransitioning, setIsTransitioning] = useState(false);
	// const [isStarting, setIsStarting] = useState(true);

	const [isOpening, isSetOpening] = useState(true);
	const [isStartingTransition, isSetStartingTransition] = useState(false);
	const [isHasBgVideo, isSetHasBgVideo] = useState(false);
	const [linkNextPage, setLinkNextPage] = useState('');

	const setOpening = value => {
		isSetOpening(value);
	};
	console.log('isOpening:', isOpening);

	const checkPageConditions = value => {
		isSetHasBgVideo(value);
	};
	console.log('isHasBgVideo:', isHasBgVideo);

	const startingTransition = (value, link) => {
		isSetStartingTransition(value);
		setLinkNextPage(link);
	};

	return (
		<TransitionContext.Provider
			value={{
				isOpening,
				setOpening,
				isHasBgVideo,
				checkPageConditions,
				isStartingTransition,
				startingTransition,
				linkNextPage,
			}}>
			{children}
		</TransitionContext.Provider>
	);
};

export const useTransition = () => useContext(TransitionContext);

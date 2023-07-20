import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
	const [isFirstAccess, isSetFirstAccess] = useState(true);
	const [isStartingTransition, isSetStartingTransition] = useState(false);
	const [isTransitionInProgress, isSetTransitionInProgress] = useState(false);
	const [isStartCapture, isSetStartCapture] = useState(false);

	const [linkNextPage, setLinkNextPage] = useState('');
	const [bgCapturedImage, setBgCapturedImage] = useState(null);

	const setFirstAccess = value => {
		isSetFirstAccess(value);
		// console.log('isFirstAccess:', isFirstAccess);
	};

	const startCapture = (value, link) => {
		console.log('STEP - 2');
		isSetStartCapture(value);
		setLinkNextPage(link);
	};

	function transitionInProgress(value) {
		console.log('STEP - 5');
		isSetTransitionInProgress(value);
	}

	const handleBgCapturedImage = value => {
		console.log('STEP - 7');
		setBgCapturedImage(value);
	};

	const startingTransition = value => {
		console.log('STEP - 9', value);
		isSetStartingTransition(value);
	};

	return (
		<TransitionContext.Provider
			value={{
				isStartCapture,
				startCapture,
				isFirstAccess,
				setFirstAccess,
				isStartingTransition,
				startingTransition,
				isTransitionInProgress,
				transitionInProgress,
				bgCapturedImage,
				handleBgCapturedImage,
				linkNextPage,
			}}>
			{children}
		</TransitionContext.Provider>
	);
};

export const useTransition = () => useContext(TransitionContext);

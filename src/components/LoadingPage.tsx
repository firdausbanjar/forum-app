'use client';

import { LoadingBar } from 'react-redux-loading-bar';

const LoadingPage = () => {
	return (
		<div className="sticky top-0">
			<LoadingBar />
			<h1 className="text-3xl">{'Loading...'}</h1>
		</div>
	);
};

export default LoadingPage;

'use client';

import { LoadingBar } from 'react-redux-loading-bar';

const LoadingPage = () => {
	return (
		<div>
			<h1 className="text-3xl">{'Loading...'}</h1>
			<LoadingBar />
		</div>
	);
};

export default LoadingPage;

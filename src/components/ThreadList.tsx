'use client';

import { useEffect } from 'react';
import { IThread } from '@/Declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { asyncReceiveThreads } from '@/redux/threads/action';

const ThreadList = () => {
	const threads: IThread[] = useAppSelector((states: RootState) => states.threads);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreads());
		console.log(threads);
	}, [dispatch]);

	return (
		<div>
			<ul>
				{threads.map((thread) => (
					<li key={thread.id}><p>{thread.title}</p></li>
				))}
			</ul>
		</div>
	);
};

export default ThreadList;

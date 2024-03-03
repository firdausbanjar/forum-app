'use client';

import { useEffect } from 'react';
import ThreadList from '@/components/ThreadList';
import { IProfile, IThread } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { asyncReceiveThreadsAndUser } from '@/redux/shared/action';
import { RootState } from '@/redux/store';

const Home = () => {
	const threads: IThread[] = useAppSelector((states: RootState) => states.threads);
	const users: IProfile[] = useAppSelector((states: RootState) => states.users);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadsAndUser());
	}, [dispatch]);

	const threadList = threads.map((thread) => ({
		...thread,
		users: users.find((user) => user.id === thread.ownerId)!,
	}));

	return (
		<div>
			<ThreadList threads={threadList} />
		</div>
	);
};

export default Home;

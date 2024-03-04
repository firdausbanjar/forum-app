'use client';

import { useEffect } from 'react';
import Categories from '@/components/Categories';
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

	const categories = threads.map((thread) => ({
		id: thread.id,
		category: thread.category,
	}));

	if (threads.length === 0 || users.length === 0) {
		return null;
	}

	return (
		<div className="container flex justify-center">
			<ThreadList threads={threadList} />
			<Categories categories={categories} />
		</div>
	);
};

export default Home;

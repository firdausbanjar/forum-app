'use client';

import { useEffect } from 'react';
import CategoryList from '@/components/CategoryList';
import ThreadList from '@/components/ThreadList';
import { IProfile, IThread } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { asyncReceiveThreadsAndUser } from '@/redux/shared/action';
import { RootState } from '@/redux/store';

const Home = () => {
	const threads: IThread[] = useAppSelector((states: RootState) => states.threads);
	const users: IProfile[] = useAppSelector((states: RootState) => states.users);
	const category: string = useAppSelector((states: RootState) => states.category);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadsAndUser());
	}, [dispatch]);

	const threadList = threads.map((thread) => ({
		...thread,
		users: users.find((user) => user.id === thread.ownerId)!,
	}));

	const categories = threadList.map((thread) => thread.category);
	const setCategories = categories.filter((value, index) => categories.indexOf(value) === index);
	const threadFilter = threadList.filter((thread) => thread.category.includes(category));

	if (threadFilter.length <= 0) {
		return null;
	}

	return (
		<div className="flex justify-end">
			<ThreadList threads={threadFilter} />
			<CategoryList categories={setCategories} />
		</div>
	);
};

export default Home;

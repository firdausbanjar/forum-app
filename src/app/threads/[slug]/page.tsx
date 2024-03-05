'use client';

import { useEffect } from 'react';
import CommentList from '@/components/CommentList';
import ThreadDetail from '@/components/ThreadDetail';
import { IThreadDetail } from '@/declarations/interfaces';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { asyncReceiveThreadDetail } from '@/redux/threadDetail/action';

const Detail = ({ params }: { params: { slug: string } }) => {
	const threadDetail: IThreadDetail = useAppSelector((states: RootState) => states.threadDetail);
	const threadId = params.slug;
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(asyncReceiveThreadDetail(threadId));
	}, [dispatch, threadId]);

	if (!threadDetail) {
		return null;
	}

	return (
		<div className="flex justify-center">
			<div className="w-3/6">
				<ThreadDetail thread={threadDetail} />
				<CommentList comments={threadDetail.comments} />
			</div>
		</div>
	);
};

export default Detail;

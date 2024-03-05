'use client';

import { useEffect } from 'react';
import CommentInput from '@/components/CommentInput';
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
				<div className="bg-white shadow-2xl p-10 text-wrap rounded-2xl mt-2">
					<h4 className="text-xl font-semibold mb-4">{'Komentar'}</h4>
					<CommentInput />
					<CommentList comments={threadDetail.comments} />
				</div>
			</div>
		</div>
	);
};

export default Detail;

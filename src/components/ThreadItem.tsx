import Link from 'next/link';
import { IThreadsAndUsers } from '@/declarations/interfaces';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadItemProps = {
	thread: IThreadsAndUsers
};

const ThreadItem = ({ thread }: ThreadItemProps) => {
	return (
		<div className="mt-2 bg-white shadow-2xl p-10 text-wrap rounded-2xl">
			<Link
				href="/threads/[slug]"
				as={`/threads/${thread.id}`}
			><h3 className="text-2xl text-blue-700 font-bold">{thread.title}</h3>
			</Link>
			<UserInfo
				createdAt={thread.createdAt}
				{...thread.users}
			/>
			<span className="bg-slate-200 py-2 px-4 rounded-full">{`#${thread.category}`}</span>
			<div
				className="mt-6 line-clamp-4"
				dangerouslySetInnerHTML={{ __html: thread.body }}
			/>
			<ThreadAction
				totalComments={thread.totalComments}
				totalLike={thread.upVotesBy.length}
				totalDislike={thread.downVotesBy.length}
			/>
		</div>
	);
};

export default ThreadItem;

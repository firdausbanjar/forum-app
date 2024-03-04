import parse from 'html-react-parser';
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
				as={`/threads/${1}`}
			><h3 className="text-2xl text-black font-bold">{thread.title}</h3>
			</Link>
			<UserInfo
				createdAt={thread.createdAt}
				{...thread.users}
			/>
			<span className="bg-slate-200 py-2 px-4 rounded-full">{`#${thread.category}`}</span>
			<p
				className="mt-6"
				dangerouslySetInnerHTML={{ __html: parse(thread.body) }}
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

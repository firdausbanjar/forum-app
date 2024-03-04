import { IThreadDetail } from '@/declarations/interfaces';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadDetailProps = {
	thread: IThreadDetail
};

const ThreadDetail = ({ thread }: ThreadDetailProps) => {
	return (
		<div className="w-3/6">
			<div className="mt-2 bg-white shadow-2xl p-10 text-wrap rounded-2xl">
				<h3 className="text-2xl font-bold">{thread.title}</h3>
				<UserInfo
					createdAt={thread.createdAt}
					{...thread.owner}
				/>
				<span className="bg-slate-200 py-2 px-4 rounded-full">{`#${thread.category}`}</span>
				<div
					className="mt-6 line-clamp-4"
					dangerouslySetInnerHTML={{ __html: thread.body }}
				/>
				<ThreadAction
					totalComments={thread.comments.length}
					totalLike={thread.upVotesBy.length}
					totalDislike={thread.downVotesBy.length}
				/>
			</div>
		</div>
	);
};

export default ThreadDetail;

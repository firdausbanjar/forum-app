import { IThreadsAndUsers } from '@/declarations/interfaces';
import ThreadItem from './ThreadItem';

type ThreadListProps = {
	threads: IThreadsAndUsers[]
};

const ThreadList = ({ threads }: ThreadListProps) => {
	return (
		<div className="container flex justify-center">
			<div className="w-4/6">
				{threads?.map((thread) => (
					<ThreadItem
						key={thread.id}
						thread={thread}
					/>
				))}
			</div>
		</div>
	);
};

export default ThreadList;

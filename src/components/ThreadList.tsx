import { IThreadsAndUsers } from '@/declarations/interfaces';

type ThreadListProps = {
	threads: IThreadsAndUsers[]
};

const ThreadList = ({ threads }: ThreadListProps) => {
	return (
		<div>
			<ul>
				{threads?.map((thread) => (
					<div key={thread.id}>
						<p>{thread.users.name}</p>
					</div>
				))}
			</ul>
		</div>
	);
};

export default ThreadList;

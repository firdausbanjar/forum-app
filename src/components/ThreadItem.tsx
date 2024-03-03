import Link from 'next/link';
import ThreadAction from './ThreadAction';
import UserInfo from './UserInfo';

type ThreadItemProps = {
	title: string
	body: string
	category: string
	createdAt: string
	totalComments: number
	user: {
		name: string
		avatar: string
	}
};

const ThreadItem = ({
	title, category, body, createdAt, totalComments, user,
}: ThreadItemProps) => {
	return (
		<div>
			<UserInfo
				createdAt={createdAt}
				{...user}
			/>
			<Link
				href="/threads/[slug]"
				as={`/threads/${1}`}
			><h3>{title}</h3>
			</Link>
			<span>{category}</span>
			<p>{body}</p>
			<ThreadAction totalComments={totalComments} />
		</div>
	);
};

export default ThreadItem;

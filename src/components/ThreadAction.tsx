import { BiComment, BiDislike, BiLike } from 'react-icons/bi';

type ThreadActionProps = {
	totalComments: number
};

const ThreadAction = ({ totalComments }: ThreadActionProps) => {
	return (
		<div>
			<BiLike />
			<BiDislike />
			<div>
				<BiComment />
				{` ${totalComments}`}
			</div>
		</div>
	);
};

export default ThreadAction;

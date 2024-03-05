import { IThreadDetailComment } from '@/declarations/interfaces';
import CommentItem from './CommentItem';

type CommentListProps = {
	comments: IThreadDetailComment[]
};

const CommentList = ({ comments }: CommentListProps) => {
	console.log(comments);
	return (
		<div className="mt-2 bg-white shadow-2xl p-10 text-wrap rounded-2xl">
			<h4 className="text-xl font-semibold mb-4">{'Komentar'}</h4>
			<div>
				{comments.map((comment) => (
					<CommentItem
						key={comment.id}
						comment={comment}
					/>
				))}
			</div>
		</div>
	);
};

export default CommentList;

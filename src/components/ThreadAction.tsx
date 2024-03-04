import { BiComment, BiDislike, BiLike } from 'react-icons/bi';

type ThreadActionProps = {
	totalComments: number
	totalLike: number
	totalDislike: number
};

const ThreadAction = ({ totalComments, totalLike, totalDislike }: ThreadActionProps) => {
	return (
		<div className="flex justify-end items-center mt-8">
			<div className="flex justify-center items-center rounded-full py-2 px-4 bg-slate-200 mr-3">
				<div className="flex justify-center items-center">
					<BiLike className="size-6 mr-3" />
					<p className="text-lg">{totalLike}</p>
				</div>
				<span
					className="h-7 bg-black mx-3"
					style={{ width: 2 }}
				>
				</span>
				<div className="flex justify-center items-center">
					<BiDislike className="size-6 mr-3" />
					<p className="text-lg">{totalDislike}</p>
				</div>
			</div>
			<div className="flex justify-center items-center rounded-full py-2 px-4 bg-slate-200">
				<BiComment className="mr-2 size-6" />
				<p className="text-lg">{totalComments}</p>
			</div>
		</div>
	);
};

export default ThreadAction;

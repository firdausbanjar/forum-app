import useContentEditable from '@/hooks/useContentEditable';

const CommentInput = () => {
	const [comment, onInputComment] = useContentEditable('');

	const handleSendComment = () => {
		console.log(comment);
	};

	return (
		<div className="flex flex-row justify-center items-center mb-7">
			<div
				className="w-11/12 h-16 p-2 caret-black outline-none border border-black mr-2 rounded-xl scroll-bar"
				contentEditable
				onInput={onInputComment}
			/>
			<button
				onClick={handleSendComment}
				className="bg-black text-white px-4 h-16 rounded-xl"
			>{'Kirim'}
			</button>
		</div>
	);
};

export default CommentInput;

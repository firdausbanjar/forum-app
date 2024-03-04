type UserInfoProps = {
	avatar: string
	name: string
	createdAt: string
};

const UserInfo = ({ name, createdAt, avatar }: UserInfoProps) => {
	return (
		<div className="flex items-center bg-slate-400 w-fit mt-3 mb-6">
			<img
				src={avatar}
				alt={name}
				className="object-cover rounded-full mr-2 w-14 h-14"
			/>
			<div>
				<p className="font-semibold">{name}</p>
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default UserInfo;

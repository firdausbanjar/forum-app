type UserInfoProps = {
	avatar: string
	name: string
	createdAt: string
};

const UserInfo = ({ name, createdAt, avatar }: UserInfoProps) => {
	return (
		<div>
			<img
				src={avatar}
				alt={name}
			/>
			<div>
				<p>{name}</p>
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default UserInfo;

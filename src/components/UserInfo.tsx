import { showFormattedDate } from '@/utils/utils';

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
				className="object-cover rounded-full mr-2 w-12 h-12"
			/>
			<div>
				<p className="text-xl font-semibold">{name}</p>
				<p>{ showFormattedDate(createdAt, 'id-ID')}</p>
			</div>
		</div>
	);
};

export default UserInfo;

'use client';

import { useRouter } from 'next/navigation';
import LoginInput from '@/components/LoginInput';
import { LoginT } from '@/declarations/types';
import { asyncSetAuthUser } from '@/redux/auth/action';
import { useAppDispatch } from '@/redux/hooks';

const Login = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleLogin = ({ email, password }: LoginT) => {
		const result = dispatch(asyncSetAuthUser({ email, password }));
		result.then((response) => {
			if (response === 'success') router.push('/');
		});
	};

	return (
		<section className="h-screen flex justify-center items-center">
			<LoginInput onLogin={handleLogin} />
		</section>
	);
};

export default Login;

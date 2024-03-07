'use client';

import { useRouter } from 'next/navigation';
import ThreadInput from '@/components/ThreadInput';
import { ThreadT } from '@/declarations/types';
import { useAppDispatch } from '@/states/hooks';
import { asyncAddThread } from '@/states/threads/action';

const NewThread = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();

	const handleUpload = ({ title, category, body }: ThreadT) => {
		dispatch(asyncAddThread({ title, category, body }));
		router.push('/');
	};

	return (
		<section className="h-screen flex justify-center pt-7">
			<ThreadInput onUpload={handleUpload} />
		</section>
	);
};

export default NewThread;

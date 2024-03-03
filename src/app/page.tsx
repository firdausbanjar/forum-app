import { redirect } from 'next/navigation';
import ThreadList from '@/components/ThreadList';

export default async function Home() {
	const auth = true;

	if (!auth) {
		return redirect('/login');
	}

	return (
		<div>
			{'ini dari src/app/page.tsx'}
			<ThreadList />
		</div>
	);
}

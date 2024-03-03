import {
	IResponseAllThreads,
	IResponseCreateComment,
	IResponseCreateThread,
	IResponseLogin,
	IResponseProfile,
	IResponseRegister,
	IResponseThreadDetail,
} from '@/Declarations/interfaces';
import {
	CommentT,
	LoginT,
	RegisterT,
	ThreadT,
} from '@/Declarations/types';

const api = (() => {
	const BASE_URL = 'https://forum-api.dicoding.dev/v1';
	const accessToken: string = 'accessToken';

	const getAccessToken = () => localStorage.getItem(accessToken);

	const putAccessToken = (token: string) => {
		localStorage.setItem(accessToken, token);
	};

	const _fetchWithAuth = async (url: string, options?: RequestInit) => fetch(url, {
		...options,
		headers: {
			...options?.headers,
			Authorization: `Bearer ${getAccessToken()}`,
		},
	});

	const register = async ({ name, email, password }: RegisterT) => {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});

		const responseJson: IResponseRegister = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { user } } = responseJson;

		return user;
	};

	const login = async ({ email, password }: LoginT) => {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const responseJson: IResponseLogin = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { token } } = responseJson;

		return token;
	};

	const getOwnProfile = async () => {
		const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
		const responseJson: IResponseProfile = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { user } } = responseJson;

		return user;
	};

	const getAllThreads = async () => {
		const response = await fetch(`${BASE_URL}/threads`);
		const responseJson: IResponseAllThreads = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { threads } } = responseJson;

		return threads;
	};

	const getThreadDetail = async (id: string) => {
		const response = await fetch(`${BASE_URL}/threads/${id}`);
		const responseJson: IResponseThreadDetail = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { detailThread } } = responseJson;

		return detailThread;
	};

	const createThread = async ({ title, body, category }: ThreadT) => {
		const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ title, body, category }),
		});

		const responseJson: IResponseCreateThread = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { thread } } = responseJson;

		return thread;
	};

	const createComment = async ({ threadId, content }: CommentT) => {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ content }),
		});

		const responseJson: IResponseCreateComment = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const { data: { comment } } = responseJson;

		return comment;
	};

	return {
		getAccessToken,
		putAccessToken,
		register,
		login,
		getOwnProfile,
		getAllThreads,
		getThreadDetail,
		createThread,
		createComment,
	};
})();

export default api;

import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { IThread } from '@/declarations/interfaces';
import { ThreadT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_THREADS: 'RECEIVE_THREADS',
	ADD_THREAD: 'ADD_THREAD',
};

const receiveThreadsActionCreator = (threads: IThread[]) => {
	return {
		type: ActionType.RECEIVE_THREADS,
		payload: {
			threads,
		},
	};
};

const addThreadActionCreator = (thread: IThread) => {
	return {
		type: ActionType.ADD_THREAD,
		payload: {
			thread,
		},
	};
};

const asyncAddThread = ({ title, body, category }: ThreadT) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			const thread: IThread = await api.createThread({ title, body, category });
			dispatch(addThreadActionCreator(thread));
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

export {
	ActionType,
	asyncAddThread,
	receiveThreadsActionCreator,
};

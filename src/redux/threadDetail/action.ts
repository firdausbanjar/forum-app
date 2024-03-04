import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { IThreadDetail } from '@/declarations/interfaces';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
	CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
};

const receiveThreadDetailActionCreator = (threadDetail: IThreadDetail) => {
	return {
		type: ActionType.RECEIVE_THREAD_DETAIL,
		payload: {
			threadDetail,
		},
	};
};

const clearThreadDetailActionCreator = () => {
	return {
		type: ActionType.CLEAR_THREAD_DETAIL,
	};
};

const asyncReceiveThreadDetail = (threadId: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());
		dispatch(clearThreadDetailActionCreator());

		try {
			const threadDetail: IThreadDetail = await api.getThreadDetail(threadId);
			dispatch(receiveThreadDetailActionCreator(threadDetail));
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

export {
	ActionType,
	asyncReceiveThreadDetail,
	clearThreadDetailActionCreator,
	receiveThreadDetailActionCreator,
};

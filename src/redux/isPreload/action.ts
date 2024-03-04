import { Dispatch } from '@reduxjs/toolkit';
import { showLoading } from 'react-redux-loading-bar';
import { setAuthUserActionCreator } from '../auth/action';

const ActionType = {
	SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

const setIsPreloadActionCreator = (isPreload: boolean) => {
	return {
		type: ActionType.SET_IS_PRELOAD,
		payload: {
			isPreload,
		},
	};
};

const asyncPreloadProccess = () => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			const authUser = 'agam';
			console.log(authUser);
		} catch (error: any) {
			dispatch(setAuthUserActionCreator(null));
		} finally {
			dispatch(setIsPreloadActionCreator(false));
		}
	};
};

export {
	ActionType,
	asyncPreloadProccess,
	setIsPreloadActionCreator,
};

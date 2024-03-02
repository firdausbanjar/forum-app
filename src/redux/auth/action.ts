import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { IProfile } from '@/Declarations/interfaces';
import { LoginT } from '@/Declarations/types';
import api from '@/utils/api';

const ActionType = {
	SET_AUTH_USER: 'SET_AUTH_USER',
	UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

const setAuthUserActionCreator = (authUser: IProfile) => {
	return {
		type: ActionType.SET_AUTH_USER,
		payload: {
			authUser,
		},
	};
};

const unsetAuthActionCreator = () => {
	return {
		type: ActionType.UNSET_AUTH_USER,
		payload: {
			authUser: null,
		},
	};
};

const asyncSetAuthUser = ({ email, password }: LoginT) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			const token: string = await api.login({ email, password });
			api.putAccessToken(token);
			const authUser: IProfile = await api.getOwnProfile();
			dispatch(setAuthUserActionCreator(authUser));
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

const asyncUnsetAuthUser = () => {
	return (dispatch: Dispatch) => {
		dispatch(showLoading());
		dispatch(unsetAuthActionCreator());
		api.putAccessToken('');
		dispatch(hideLoading());
	};
};

export {
	ActionType,
	asyncSetAuthUser,
	asyncUnsetAuthUser,
	setAuthUserActionCreator,
	unsetAuthActionCreator,
};

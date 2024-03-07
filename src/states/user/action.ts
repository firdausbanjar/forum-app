import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { IProfile } from '@/declarations/interfaces';
import { RegisterT } from '@/declarations/types';
import api from '@/utils/api';

const ActionType = {
	RECEIVE_USERS: 'RECEIVE_USERS',
};

const receiveUsersActionCreator = (users: IProfile[]) => {
	return {
		type: ActionType.RECEIVE_USERS,
		payload: {
			users,
		},
	};
};

const asyncRegisterUser = ({ name, email, password }: RegisterT) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			const { status } = await api.register({ name, email, password });
			return status;
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

export { ActionType, asyncRegisterUser, receiveUsersActionCreator };

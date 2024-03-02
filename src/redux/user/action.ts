import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { RegisterT } from '@/Declarations/types';
import api from '@/utils/api';

const asyncRegisterUser = ({ name, email, password }: RegisterT) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			await api.register({ name, email, password });
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

export { asyncRegisterUser };

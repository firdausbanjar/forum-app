import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
	SET_CATEGORY: 'SET_CATEGORY',
	CLEAR_CATEGORY: 'CLEAR_CATEGORY',
};

const setCategoryActionCreator = (category: string) => {
	return {
		type: ActionType.SET_CATEGORY,
		payload: {
			category,
		},
	};
};

const clearCategoryActionCreator = () => {
	return {
		type: ActionType.CLEAR_CATEGORY,
	};
};

const asyncSetCategory = (category: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());
		dispatch(clearCategoryActionCreator());
		dispatch(setCategoryActionCreator(category));
		dispatch(hideLoading());
	};
};

const asyncClearCategory = () => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());
		dispatch(clearCategoryActionCreator());
		dispatch(hideLoading());
	};
};

export {
	ActionType,
	asyncClearCategory,
	asyncSetCategory,
	clearCategoryActionCreator,
	setCategoryActionCreator,
};

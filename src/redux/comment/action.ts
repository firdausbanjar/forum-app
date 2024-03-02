import { Dispatch } from '@reduxjs/toolkit';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ICreateComment } from '@/Declarations/interfaces';
import { CommentT } from '@/Declarations/types';
import api from '@/utils/api';

const ActionType = {
	ADD_COMMENT: 'ADD_COMMENT',
};

const addCommentActionCreator = (comment: ICreateComment) => {
	return {
		type: ActionType.ADD_COMMENT,
		payload: {
			comment,
		},
	};
};

const asyncAddComment = ({ threadId, content }: CommentT) => {
	return async (dispatch: Dispatch) => {
		dispatch(showLoading());

		try {
			const comment = await api.createComment({ threadId, content });
			addCommentActionCreator(comment);
		} catch (error: any) {
			alert(error.message);
		}

		dispatch(hideLoading());
	};
};

export {
	ActionType,
	addCommentActionCreator,
	asyncAddComment,
};

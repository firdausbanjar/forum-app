import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authReducer from './auth/reducer';
import categoryReducer from './category/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './user/reducer';

export const store = configureStore({
	reducer: {
		authUser: authReducer,
		users: usersReducer,
		threads: threadsReducer,
		threadDetail: threadDetailReducer,
		category: categoryReducer,
		loadingBar: loadingBarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

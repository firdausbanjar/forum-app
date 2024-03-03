import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';

export const store = configureStore({
	reducer: {
		threads: threadsReducer,
		loadingBar: loadingBarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

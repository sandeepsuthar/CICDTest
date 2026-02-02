import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import AppSlice from './slices/AppSlice';
import logger from 'redux-logger';

const combinedReducer = combineReducers({
  auth: AuthSlice,
  app: AppSlice,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  action: AnyAction,
) => {
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

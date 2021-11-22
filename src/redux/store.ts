import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import { newsApiSlice } from './reducers/news';
import { boardApiSlice } from './reducers/board';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
    [boardApiSlice.reducerPath]: boardApiSlice.reducer,
  },
  middleware:
    getDefaultMiddleware => getDefaultMiddleware()
      .concat(newsApiSlice.middleware)
      .concat(boardApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

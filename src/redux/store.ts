import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import { newsApiSlice } from './reducers/news';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [newsApiSlice.reducerPath]: newsApiSlice.reducer,
  },
  middleware:
    getDefaultMiddleware => getDefaultMiddleware()
      .concat(newsApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import {configureStore} from '@reduxjs/toolkit';
import {tvSeriesReducer} from '../store/tvSeriesSlice';

export const store = configureStore({
  reducer: {
    tvSeries: tvSeriesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
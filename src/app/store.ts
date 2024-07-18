import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // tvSeries: TvSeriesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
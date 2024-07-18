import {createSlice} from '@reduxjs/toolkit';
import {TvShow} from '../types';
import {fetchTvSeries, fetchTvSeriesId} from './tvSeriesThunk';

export interface TvSeriesState {
  series: TvShow[];
  currentShow: TvShow | null;
  isLoading: boolean;
  error: boolean;
}

const initialState: TvSeriesState = {
  series: [],
  currentShow: null,
  isLoading: false,
  error: false,
};

const tvSeriesSlice = createSlice({
  name: 'tvSeries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTvSeries.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTvSeries.fulfilled, (state, action) => {
        state.series = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTvSeries.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchTvSeriesId.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchTvSeriesId.fulfilled, (state, action) => {
        state.currentShow = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTvSeriesId.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const {} = tvSeriesSlice.actions;
export const tvSeriesReducer = tvSeriesSlice.reducer;

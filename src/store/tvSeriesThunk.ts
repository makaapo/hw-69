import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {TvShow, TvShows} from '../types';
import {RootState} from '../app/store';

const URL = 'http://api.tvmaze.com/';

export const fetchTvSeries = createAsyncThunk<TvShow[], string, {state: RootState}>(
  'tvSeries/fetch',
  async (value: string) => {
    const {data} = await axios.get<TvShows[]>(`${URL}search/shows?q=${value}`);
    return data.map(item => item.show);
  }
);

export const fetchTvSeriesId = createAsyncThunk<TvShow | null, string, {state: RootState}>(
  'tvSeries/id/fetch',
  async (value: string) => {
    const {data} = await axios.get<TvShow>(`${URL}shows/${value}`);
    return data;
  }
);

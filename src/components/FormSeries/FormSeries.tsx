import {ChangeEvent} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {fetchTvSeries} from '../../store/tvSeriesThunk';
import {selectIsLoading, selectSeries} from '../../store/tvSeriesSlice';
import {TvShow} from '../../types';

const FormSeries = () => {
  const movies = useAppSelector(selectSeries);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFieldChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    await dispatch(fetchTvSeries(event.target.value));
  };

  const selectChange = (value: TvShow | null) => {
    if (value && value.id) {
      navigate(`/shows/${value.id}`);
    }
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        loading={isLoading}
        options={movies}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={(_, value) => selectChange(value)}
        sx={{width: 300}}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={onFieldChange}
            label="Search for TV show"
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
      />
      <hr/>
      {movies.length > 0 ? (
        <Outlet/>
      ) : (
        <h1 className="text-center">Please search series</h1>
      )}
    </div>
  );
};

export default FormSeries;

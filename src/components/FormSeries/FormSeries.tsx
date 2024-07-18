import { ChangeEvent, useState } from 'react';
import {Link} from 'react-router-dom';
import {fetchTvSeries} from '../../store/tvSeriesThunk';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

const FormSeries = () => {
  const movies = useAppSelector((state) => state.tvSeries.series);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');

  const onFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      dispatch(fetchTvSeries(value));
    }
  };

  return (
    <div className="position-relative" style={{width: '300px'}}>
      <form>
        <div className="mb-3">
          <input
            type="text"
            value={inputValue}
            onChange={onFieldChange}
            className="form-control"
            placeholder="Search for TV Show"
          />
        </div>
      </form>
      {movies.length > 0 && (
        <div
          className="position-absolute top-100 start-0 w-100 bg-white border border-dark"
          style={{zIndex: 1000}}
        >
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/shows/${movie.id}`}
              className="d-block p-2 text-decoration-none cursor-pointer"
            >
              {movie.name}
            </Link>
          ))}
        </div>
      )}
      <hr className="mt-3"/>
    </div>
  );
};

export default FormSeries;

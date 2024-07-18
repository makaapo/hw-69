import {useParams} from 'react-router-dom';
import {fetchTvSeriesId} from '../../store/tvSeriesThunk';
import {useEffect} from 'react';
import Spinner from '../../components/UI/Spinner';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCurrentShow, selectIsLoading} from '../../store/tvSeriesSlice';


const SeriesInfo = () => {
  const currentShow = useAppSelector(selectCurrentShow);
  const isLoading = useAppSelector(selectIsLoading);
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect ( () => {
    if (params.id) {
      dispatch(fetchTvSeriesId(params.id));
    }
  }, [params.id]);

  return (
    <div>
      {isLoading ? <Spinner/> : <>
        {currentShow ?
          <div className="show d-flex">
            <div className="w-50">
              {currentShow.image === null ? <p>No image</p> :
                <img src={currentShow.image.medium} alt={currentShow.name}/>
              }
            </div>
            <div className='w-50'>
              <h4>{currentShow.name}</h4>
              {currentShow.genres.length === 0 ? <p>No genres</p> :
                <p><b>Genres:</b> {currentShow.genres.join(', ')}</p>
              }
              <p><b>Language:</b> {currentShow.language}</p>
              <p><b>Premiered:</b> {currentShow.premiered}</p>
              <div dangerouslySetInnerHTML={{__html: currentShow.summary}}/>
            </div>
          </div>
          : <p>Not found</p>}
      </> }
    </div>
  );
};

export default SeriesInfo;
import {useParams} from 'react-router-dom';
import {fetchTvSeriesId} from '../../store/tvSeriesThunk';
import {useEffect} from 'react';
import Spinner from '../../components/UI/Spinner';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {Box, Grid, Paper, Typography} from '@mui/material';
import {selectCurrentShow, selectIsLoading} from '../../store/tvSeriesSlice';

const SeriesInfo = () => {
  const currentShow = useAppSelector(selectCurrentShow);
  const isLoading = useAppSelector(selectIsLoading);
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchTvSeriesId(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <Spinner/>
      ) : (
        <>
          {currentShow ? (
            <Paper elevation={3} sx={{padding: 2, marginTop: 2}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {currentShow.image ? (
                    <img src={currentShow.image.medium} alt={currentShow.name}/>
                  ) : (
                    <Typography variant="body1">No image</Typography>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                    {currentShow.name}
                  </Typography>
                  {currentShow.genres.length === 0 ? (
                    <Typography variant="body1">No genres</Typography>
                  ) : (
                    <Typography variant="body1">
                      <b>Genres:</b> {currentShow.genres.join(', ')}
                    </Typography>
                  )}
                  <Typography variant="body1">
                    <b>Language:</b> {currentShow.language}
                  </Typography>
                  <Typography variant="body1">
                    <b>Premiered:</b> {currentShow.premiered}
                  </Typography>
                  <Box mt={2}>
                    <b>Summary:</b>
                    <Typography variant="body1" dangerouslySetInnerHTML={{__html: currentShow.summary}}/>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          ) : (
            <Typography variant="body1">Not found</Typography>
          )}
        </>
      )}
    </>
  );
};

export default SeriesInfo;

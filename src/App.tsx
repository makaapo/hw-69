import {Route, Routes} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import SeriesInfo from './containers/SeriesInfo/SeriesInfo';
import {Container} from '@mui/material';

const App = () => {

  return (
    <>
      <header className="mb-5">
          <Toolbar/>
        </header>
      <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shows" element={<Home />}>
              <Route path=":id" element={<SeriesInfo/>}/>
            </Route>
            <Route path="*" element={(<h1 className="text-center">Not found</h1>)}/>
          </Routes>
      </Container>
    </>
  );
};

export default App;
import {Route, Routes} from 'react-router-dom';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './containers/Home/Home';
import SeriesInfo from './containers/SeriesInfo/SeriesInfo';

const App = () => {

  return (
    <>
        <header className="bg-primary ">
          <Toolbar/>
        </header>
        <main className="container pt-5">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/shows" element={<Home />}>
              <Route path=":id" element={<SeriesInfo/>}/>
            </Route>
            <Route path="*" element={(<h1 className="text-center">Not found</h1>)}/>
          </Routes>
        </main>
    </>
  );
};

export default App;
import {NavLink} from 'react-router-dom';

const Toolbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">

      <div className="container">
        <NavLink to='/' className="navbar-brand d-flex fs-2">
          Tv shows
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;
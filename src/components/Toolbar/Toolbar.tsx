import {AppBar, Toolbar as MuiToolbar, Typography, Container} from '@mui/material';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <MuiToolbar>
          <NavLink to='/' style={{textDecoration: 'none', color: 'inherit'}}>
            <Typography variant="h6" component="div">
              TV Shows
            </Typography>
          </NavLink>
        </MuiToolbar>
      </Container>
    </AppBar>
  );
};

export default Toolbar;

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { styled as MUIstyled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomNav = MUIstyled(Paper)`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const BottomNavAction = MUIstyled(BottomNavigationAction)`
  font-size: 2em;
`;

const BottomNavBar = () => {
  return (
    <BottomNav
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon fontSize="inherit" />}
        />
        <BottomNavAction
          component={Link}
          label="As"
          icon={<HomeIcon fontSize="inherit" />}
        />
        <BottomNavAction
          component={Link}
          label="asd"
          icon={<AccountCircleIcon fontSize="inherit" />}
        />
        <BottomNavAction
          component={Link}
          to="/profile"
          label="Profile"
          icon={<AccountCircleIcon fontSize="inherit" />}
        />
      </BottomNavigation>
    </BottomNav>
  );
};

export default BottomNavBar;

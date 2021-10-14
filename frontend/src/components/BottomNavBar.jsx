import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';

const BottomNav = styled(BottomNavigation)`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const BottomNavAction = styled(BottomNavigationAction)`
  font-size: 2em;
`;

const BottomNavBar = () => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNav showLabels sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavAction label="Home" icon={<HomeIcon fontSize="inherit" />} />
        <BottomNavAction label="As" icon={<HomeIcon fontSize="inherit" />} />
        <BottomNavAction
          label="asd"
          icon={<AccountCircleIcon fontSize="inherit" />}
        />
        <BottomNavAction
          label="Profile"
          icon={<AccountCircleIcon fontSize="inherit" />}
        />
      </BottomNav>
    </Paper>
  );
};

export default BottomNavBar;

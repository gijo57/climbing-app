import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import styled from 'styled-components';

const TopNav = styled(AppBar)`
  font-size: 2em;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TopNavBar = ({ onSideBarOpen, isSideBarOpen }) => {
  return (
    <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
      <TopNav>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ...(isSideBarOpen && { display: 'none' }) }}
            onClick={onSideBarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </TopNav>
    </Paper>
  );
};

export default TopNavBar;

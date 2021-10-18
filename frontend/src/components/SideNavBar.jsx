import Drawer from '@mui/material/Drawer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MuiLink from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SideNav = styled(Paper)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const DrawerHeader = styled.div`
  padding: 0 1em;
  display: flex;
  justify-content: flex-start;
`;

const SideNavBar = ({ isOpen, onSideBarOpen, onLogout }) => {
  const handleClose = (event) => {
    const element = document.getElementById('menuButton');
    if (!element.contains(event.target)) onSideBarOpen(false);
  };

  return (
    <SideNav>
      <ClickAwayListener onClickAway={handleClose}>
        <Drawer
          sx={{
            width: '20%',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: '20%',
              boxSizing: 'border-box'
            }
          }}
          variant="persistent"
          anchor="left"
          open={isOpen}
        >
          <DrawerHeader>
            <div>
              <h3>Pekka</h3>
              <h4>See profile</h4>
            </div>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <FitnessCenterIcon fontSize="inherit" />
              </ListItemIcon>
              <ListItemText primary="Training programs" />
            </ListItem>
          </List>
          <Divider />
          <MuiLink
            sx={{ padding: '1em' }}
            color="inherit"
            underline="none"
            component={Link}
            to="/"
            onClick={onLogout}
          >
            Log out
          </MuiLink>
        </Drawer>
      </ClickAwayListener>
    </SideNav>
  );
};

export default SideNavBar;

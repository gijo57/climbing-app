import Drawer from '@mui/material/Drawer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import styled from 'styled-components';

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SideNavBar = ({ isOpen, onSideBarOpen }) => {
  const handleClose = (event) => {
    const element = document.getElementById('menuButton');
    if (!element.contains(event.target)) onSideBarOpen(false);
  };

  return (
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
      </Drawer>
    </ClickAwayListener>
  );
};

export default SideNavBar;

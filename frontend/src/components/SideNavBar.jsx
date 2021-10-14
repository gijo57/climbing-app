import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';

import styled from 'styled-components';

const DrawerHeader = styled.div``;

const SideNavBar = ({ isOpen, onSideBarOpen }) => {
  return (
    <Drawer variant="persistent" open={isOpen}>
      <DrawerHeader>
        <IconButton onClick={() => onSideBarOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <ul>
        <li>j</li>
      </ul>
    </Drawer>
  );
};

export default SideNavBar;

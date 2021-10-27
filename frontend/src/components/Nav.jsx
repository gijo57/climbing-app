import { useState } from 'react';
import SideNavBar from './SideNavBar';
import BottomNavBar from './BottomNavBar';
import TopNavBar from './TopNavBar';
import Backdrop from '@mui/material/Backdrop';

const Nav = ({ onLogout, user }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBarOpen = (value) => {
    if (typeof value === 'boolean') setIsSideBarOpen(value);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSideBarOpen}
        onClick={handleSideBarOpen}
      >
        <SideNavBar
          user={user}
          isOpen={isSideBarOpen}
          onSideBarOpen={handleSideBarOpen}
          onLogout={onLogout}
        />
      </Backdrop>
      <TopNavBar
        isSideBarOpen={isSideBarOpen}
        onSideBarOpen={handleSideBarOpen}
      />
      <BottomNavBar />
    </div>
  );
};

export default Nav;

import { useState } from 'react';
import SideNavBar from './SideNavBar';
import BottomNavBar from './BottomNavBar';
import TopNavBar from './TopNavBar';

const Nav = ({ onLogout }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBarOpen = (value) => {
    setIsSideBarOpen(value);
  };

  return (
    <div>
      <TopNavBar
        isSideBarOpen={isSideBarOpen}
        onSideBarOpen={handleSideBarOpen}
      />
      <SideNavBar
        isOpen={isSideBarOpen}
        onSideBarOpen={handleSideBarOpen}
        onLogout={onLogout}
      />
      <h1>Hello World!</h1>
      <BottomNavBar />
    </div>
  );
};

export default Nav;

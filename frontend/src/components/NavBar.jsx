import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const NavBar = () => {
  return (
    <h1>
      <SwipeableDrawer open>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </SwipeableDrawer>
    </h1>
  );
};

export default NavBar;

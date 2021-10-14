import AppBarElem from '@mui/material/AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';

const IconGroup = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 1em;
`;

const IconWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 2.5em;
`;

const AppBar = () => {
  return (
    <AppBarElem sx={{ top: 'auto', bottom: 0 }} position="fixed">
      <IconGroup>
        <IconWrapper>
          <HomeIcon fontSize="inherit" />
        </IconWrapper>
        <IconWrapper>
          <HomeIcon fontSize="inherit" />
        </IconWrapper>
        <IconWrapper>
          <AccountCircleIcon fontSize="inherit" />
        </IconWrapper>
        <IconWrapper>
          <AccountCircleIcon fontSize="inherit" />
        </IconWrapper>
      </IconGroup>
    </AppBarElem>
  );
};

export default AppBar;

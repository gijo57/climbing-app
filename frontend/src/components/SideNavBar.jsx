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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import { styled as MUIstyled } from '@mui/material/styles';
import styled from 'styled-components';

const SideNav = MUIstyled(Paper)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const DrawerHeader = styled.div`
  padding: 0 1em;
  display: flex;
  justify-content: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SideNavBar = ({ isOpen, onSideBarOpen, onLogout, user }) => {
  const handleClose = (event) => {
    const element = document.getElementById('menuButton');
    if (!element.contains(event.target) || event.target.tagName === 'A') {
      onSideBarOpen(false);
    }
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
              <h3>{user.firstName}</h3>
              <MuiLink
                color="inherit"
                underline="none"
                component={Link}
                to="/profile"
                onClick={handleClose}
              >
                See profile
              </MuiLink>
            </div>
          </DrawerHeader>
          <Divider />
          <List sx={{ padding: 0 }}>
            <Accordion disableGutters square sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="my-programs-nav-content"
                id="my-programs-nav"
              >
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon fontSize="inherit" />
                  </ListItemIcon>
                  <ListItemText primary="My programs" />
                </ListItem>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters square sx={{ boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon fontSize="inherit" />
                  </ListItemIcon>
                  <ListItemText primary="Training programs" />
                </ListItem>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                  <ListItem>
                    <StyledLink to="/">
                      <ListItemText primary="Training program" />
                    </StyledLink>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
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

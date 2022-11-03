// import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  // Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import InputIcon from '@mui/icons-material/Input';
import Logo from './Logo';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useStateContext } from '../contexts/ContextProvider';
import { useEffect } from 'react';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {

const {toggleMenuIcon, setToggleMenuIcon } = useStateContext()

const location = useLocation();
// console.log(location)
useEffect(() => {
  if (location.pathname === ("/")) {
    setToggleMenuIcon(true)
  } else {
    setToggleMenuIcon(false)
  }
}, [location.pathname, setToggleMenuIcon]);

  // const [notifications] = useState([]);
  const { orgDetails } = useStateContext()

  return (
    <AppBar position='relative' sx={{ backgroundColor: 'white', boxShadow: 'none'}} >
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" style={{textDecoration: "none"}} >
        <Box sx={{ paddingLeft: 1, color: 'navy'}} >
          <Typography variant="h5" >{orgDetails.name}</Typography>
        </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden smDown>
          {/* <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* <Link to="/member-dashboard" color='inherit'>
            <IconButton color="inherit" size="large">
              <InputIcon />
            </IconButton>
          </Link>
          <Link to="/admin-dashboard">
            <IconButton color="inherit" size="large">
              <AdminPanelSettingsIcon />
            </IconButton>
          </Link> */}
        </Hidden>
        <Hidden lgUp={!toggleMenuIcon}>
          <IconButton color="primary" onClick={onMobileNavOpen} size="large">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;

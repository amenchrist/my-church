import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import InputIcon from '@mui/icons-material/Input';
import Logo from './Logo';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useStateContext } from '../contexts/ContextProvider';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  const { orgDetails } = useStateContext()

  return (
    <AppBar position='relative' >
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/" underline="none" >
        <Box sx={{ paddingLeft: 1 , color: 'white'}}>
          <Typography variant="h6" >{orgDetails.name}</Typography>
        </Box>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Hidden smDown>
          <IconButton color="inherit" size="large">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Link to="/member-dashboard" color='inherit'>
            <IconButton color="inherit" size="large">
              <InputIcon />
            </IconButton>
          </Link>
          <Link to="/admin-dashboard">
            <IconButton color="inherit" size="large">
              <AdminPanelSettingsIcon />
            </IconButton>
          </Link>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
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

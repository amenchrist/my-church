import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Grid, Hidden, List, MenuItem, TextField, Typography } from '@mui/material';
import {
  BarChart as BarChartIcon,
  Briefcase,
  LogOut as Out,
} from 'react-feather';
import NavItem from '../NavItem';
import { useStateContext } from '../../contexts/ContextProvider';

let items = [
  {
    href: '/member-dashboard',
    icon: Briefcase,
    title: 'To Member Dashboard'
  },
  {
    href: '/',
    icon: Out,
    title: 'To Watch Page'
  },
  {
    href: '/admin-dashboard/summary',
    icon: BarChartIcon,
    title: 'To Admin Dashboard'
  }

];

const WatchPageSidebar = ({ onMobileClose, openMobile }) => {

  const { currentMember, isAdmin, orgDetails } = useStateContext();

  const { title, firstName, lastName, church } = currentMember;

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    org: church? church: orgDetails.name,
    name: firstName? `${title} ${firstName} ${lastName} `: 'Unknown Member'
  };

  useEffect(()=> {
    if(!isAdmin){
      items = items.filter(item => item.href !== '/admin-dashboard/summary')
    }
  }, [isAdmin])
  


  const location = useLocation();

  // console.log(location)
  // useEffect(() => {
  //   if (openMobile && onMobileClose) {
  //     onMobileClose();
  //   }
  // }, [openMobile, onMobileClose, location.pathname]);
 

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography
          color="textPrimary"
          variant="h5"
          align='center'
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align='center'
        >
          {user.org}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      {/* <Hidden lgUp> */}
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      {/* </Hidden> */}
      {/* <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden> */}
    </>
  );
};

WatchPageSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

WatchPageSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default WatchPageSidebar;

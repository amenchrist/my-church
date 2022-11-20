import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Hidden, List, Typography } from '@mui/material';
import {
  // AlertCircle as AlertCircleIcon,
  // Lock as LockIcon,
  // UserPlus as UserPlusIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
  LogOut
} from 'react-feather';
import NavItem from '../NavItem';
import { useStateContext } from '../../contexts/ContextProvider';

let items = [
  {
    href: '/member-dashboard/summary',
    icon: BarChartIcon,
    title: 'Summary'
  },
  {
    href: '/member-dashboard/tithes',
    icon: UsersIcon,
    title: 'Tithes'
  },
  {
    href: '/member-dashboard/offerings',
    icon: ShoppingBagIcon,
    title: 'Offerings'
  },
  {
    href: '/member-dashboard/partnership',
    icon: UserIcon,
    title: 'Partnership'
  },
  {
    href: '/member-dashboard/special-seeds',
    icon: SettingsIcon,
    title: 'Special Seeds'
  },
  {
    href: '/member-dashboard/other-giving',
    icon: UserIcon,
    title: 'Other Giving'
  },
  {
    href: '/',
    icon: LogOut,
    title: 'Back to Watch Page'
  },
  {
    href: '/admin-dashboard/summary',
    icon: BarChartIcon,
    title: 'To Admin Dashboard'
  }
  // {
  //   href: '/login',
  //   icon: LockIcon,
  //   title: 'Login'
  // },
  // {
  //   href: '/register',
  //   icon: UserPlusIcon,
  //   title: 'Register'
  // },
  // {
  //   href: '/404',
  //   icon: AlertCircleIcon,
  //   title: 'Error'
  // }
];

const MemberSidebar = ({ onMobileClose, openMobile }) => {

  const { user, isAdmin } = useStateContext();
  const { church, avatar, name } = user;
  
   useEffect(()=> {
    if(!isAdmin){
      items = items.filter(item => item.href !== '/admin-dashboard/summary')
    }
  }, [isAdmin])
  

  const location = useLocation();

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
          src={avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="#"
        />
        <Typography
          color="textPrimary"
          variant="h5"
          align='center'
        >
          {name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {church}
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
      <Hidden lgUp>
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
      </Hidden>
      <Hidden lgDown>
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
      </Hidden>
    </>
  );
};

MemberSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

MemberSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default MemberSidebar;

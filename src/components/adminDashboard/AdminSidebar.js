import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Grid, Hidden, List, MenuItem, TextField, Typography } from '@mui/material';
import {
  // AlertCircle as AlertCircleIcon,
  // UserPlus as UserPlusIcon,
  Lock as LockIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  Users as UsersIcon,
  LogOut as Out,
  Briefcase
} from 'react-feather';
import NavItem from '../NavItem';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';
import { useStateContext } from '../../contexts/ContextProvider';
import { ArrowBack } from '@mui/icons-material';


const items = [
  {
    href: '/admin-dashboard/summary',
    icon: BarChartIcon,
    title: 'Summary'
  },
  {
    href: '/admin-dashboard/attendees',
    icon: UsersIcon,
    title: 'Attendees'
  },
  {
    href: '/admin-dashboard/first-timers',
    icon: UserIcon,
    title: 'First Timers'
  },
  {
    href: '/admin-dashboard/giving-records',
    icon: LockIcon,
    title: 'Giving Records'
  },
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
  // {
  //   href: '/admin-dashboard/absentees',
  //   icon: UserIcon,
  //   title: 'Absentees'
  // }
  // {
  //   href: '/admin-dashboard/members',
  //   icon: UserIcon,
  //   title: 'Members'
  // },
  // {
  //   href: '/admin-dashboard/overview',
  //   icon: LockIcon,
  //   title: 'Yearly Overview'
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

const AdminSidebar = ({ onMobileClose, openMobile }) => {

  const { currentMember, serviceDateObjects } = useStateContext()

  const { title, firstName, lastName, role } = currentMember;
  const { setServiceDate, serviceDate, setLastWeeksServiceDate  } = useAdminStateContext();

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: role? role: 'Unknown',
    name: firstName? `${title} ${firstName} ${lastName} `: 'Unknown Member'
  };


  const location = useLocation();

  console.log(location)
  // useEffect(() => {
  //   if (openMobile && onMobileClose) {
  //     onMobileClose();
  //   }
  // }, [openMobile, onMobileClose, location.pathname]);

  let services = [
    "Midweek Service - Wednesday, 29th June 2022",
    "Sunday Service - Sunday, 26th June 2022",
    "Midweek Service - Wednesday, 23rd June 2022",
    "Sunday Service - Sunday, 19th June 2022"
  ]

  useEffect(() => {
    //set initial service date
    if(!serviceDate.length && serviceDateObjects.length > 0){
      setServiceDate(serviceDateObjects[0].date)
      setLastWeeksServiceDate(serviceDateObjects[0].weekBeforeDate)
    }
  }, [setServiceDate, serviceDateObjects, serviceDate, setLastWeeksServiceDate])

  function changeDate(e){
    const selectedServiceDate = e.target.value;
    setServiceDate(selectedServiceDate);
    setLastWeeksServiceDate(serviceDateObjects.find(dateObj => dateObj.date === selectedServiceDate).weekBeforeDate)
  }

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
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} >
            <TextField required select fullWidth id="service-date" label="Select Date" name="service-date" value={serviceDate} autoFocus onChange={(e) => changeDate(e)} >
              {serviceDateObjects.map((date, i) => (<MenuItem key={i} value={date.date}>{date.fullDateString}</MenuItem>))}
            </TextField>
          </Grid>
        </Grid>
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

AdminSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

AdminSidebar.defaultProps = {
  onMobileClose: () => {
  },
  openMobile: false
};

export default AdminSidebar;

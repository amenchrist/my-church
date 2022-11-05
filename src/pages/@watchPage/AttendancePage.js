import * as React from 'react';
import { Avatar, Link, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useStateContext } from '../../contexts/ContextProvider';
import { useEffect } from 'react';
import useEmailChecker from '../../hooks/useEmailChecker';
import EmailForm from '../../components/WatchPage/EmailForm';
import AttendanceForm from '../../components/WatchPage/AttendanceForm';
import FirstTimersForm from '../../components/WatchPage/FirstTimersForm';
import useAttendanceLogger from '../../hooks/useAttendanceLogger';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Powered by '}
      <Link color="inherit" href="#">
        Evangel Ltd
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}
export default function AttendancePage() {

  const { setAttendanceSubmitted, user } = useStateContext();

  const [ emailExists, emailChecked, isAnAdmin ] = useEmailChecker(user.email);  
  const attendanceLogged = useAttendanceLogger(user.attendanceRecords);

  useEffect(() => {
    setAttendanceSubmitted(attendanceLogged)
  }, [attendanceLogged, setAttendanceSubmitted])
  
  return (
      <Container component="main" maxWidth="xs" 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: "space-between", 
          height: '100%', 
          border: '2px solid red',
          py: 2
        }} 
        >
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: "auto",
            // maxHeight: '70%',
            border: '2px solid black'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          {!emailChecked? <EmailForm /> : emailExists? <AttendanceForm isAnAdmin={isAnAdmin} /> : <FirstTimersForm /> }
        </Box>
        <Copyright />
      </Container>
  );
}
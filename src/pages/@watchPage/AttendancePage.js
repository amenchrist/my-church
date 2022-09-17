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
      {'Brought to you by '}
      <Link color="inherit" href="#">
        Evangel
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}
export default function AttendancePage() {

    const { setAttendanceSubmitted, currentMember, attendanceSubmitted} = useStateContext();

    const [ emailExists, responseReceived ] = useEmailChecker(currentMember.email);  
    const attendanceLogged = useAttendanceLogger(currentMember.attendanceRecords);
   
    useEffect(() => {
      if(attendanceLogged && attendanceSubmitted === false){
          setAttendanceSubmitted(true)
      }
  }, [attendanceSubmitted, attendanceLogged, setAttendanceSubmitted])
  
    return (
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome
            </Typography>
            {!responseReceived? <EmailForm /> : emailExists? <AttendanceForm /> : <FirstTimersForm /> }
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}
import React, { useEffect, useState }  from 'react';
import { Avatar, Link, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useStateContext } from '../../contexts/ContextProvider';
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
        Evangel
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </Typography>
  );
}
export default function AttendancePage() {

  const [ height, setHeight ] = React.useState('90%');

  useEffect(() => {
    if(window.innerWidth > 900){
      setHeight('80%');
    }
  }, [])  

  const { setAttendanceSubmitted, user } = useStateContext();

  const [ ready, setReady ] = useState(false);

  const [ emailExists, emailChecked, isAnAdmin ] = useEmailChecker(user.email);  
  // console.log(user.attendanceRecords)
  const attendanceLogged = useAttendanceLogger(user.attendanceRecords, ready);
  

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
          width: '100%',
          pb:2, m:0,
          overflowY: "auto",
          alignItems: 'center'
        }} 
        >
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: height,
            width: '100%',
            justifyContent: "center",          
          }}
        >
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <div style={{ overflowY: "auto", width: '100%' }}>
            {!emailChecked? <EmailForm /> : emailExists? <AttendanceForm isAnAdmin={isAnAdmin} /> : <FirstTimersForm /> }
          </div>
        </Box>
        <Copyright />
      </Container>
  );
}
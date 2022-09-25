import React, { useState } from 'react';
import { Button, TextField,  Grid, Box,  } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';
import { getDateValues } from '../../functions';
import { attendanceRegex } from '../regex';
import { Link } from 'react-router-dom';

export default function AttendanceForm({isAnAdmin}) {

    const { currentMember, churchName, orgDetails, setCurrentMember, geolocation } = useStateContext();    

    const [ attendance, setAttendance ] = useState(1)
    const [ valid, setValid ] = useState(true);

    const handleValidation = (value) => {
        //set email to user input
        setAttendance(value);
        
        //define regex     
        const reg = new RegExp(attendanceRegex); 
        
        //test whether input is valid
        setValid(reg.test(value));
    };

    function handleAttendance(event){
      event.preventDefault();
      handleValidation(attendance)
      if(valid){
        const data = new FormData(event.currentTarget);

        const dateValues = getDateValues(new Date());

        const payload = {
            id: dateValues.time.toString(),
            email: currentMember.email ,
            date: dateValues.date,
            day: dateValues.day,
            time: dateValues.time,
            church: churchName,
            attendance: parseInt(data.get('attendance')),
            origin: orgDetails.url,
            ip: geolocation.IPv4,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight
        }

        setCurrentMember({...currentMember, attendanceRecords: [payload]})
      }
      
    }
    
    return (
      <>
      <Box component="form" onSubmit={handleAttendance} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={currentMember.email}
              disabled
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="attendance"
              label="Number of People Watching"
              id="attendance"
              type='number'
              value={attendance}
              autoFocus
              onChange={(e) => handleValidation(e.target.value)}
              error={!valid}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
      
      {isAnAdmin ? <Link to={'/admin-dashboard'} style={{textDecoration: 'none'}} >
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Visit Admin Portal
        </Button>
        </Link>
        :
        <></>
      }
      </>
    )
}
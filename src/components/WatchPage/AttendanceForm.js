import React, { useState } from 'react';
import { Button, TextField,  Grid, Box, MenuItem,  } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';
import { getDateValues } from '../../functions';
import { attendanceRegex } from '../regex';
import { Link } from 'react-router-dom';

export default function AttendanceForm({isAnAdmin}) {

    const { user, setUser, orgDetails, geolocation } = useStateContext();    

    const [ attendance, setAttendance ] = useState(1)
    const [ valid, setValid ] = useState(true);
    const [ church, setChurch ] = useState('CE BARKING')

    const handleValidation = (value) => {
              
        //define regex     
        const reg = new RegExp(attendanceRegex); 
        
        //test whether input is valid
        setValid(reg.test(value) );

        //set email to user input
        setAttendance(value);
    };

    function handleAttendance(event){
      event.preventDefault();
      handleValidation(attendance)
      if(valid){
        const data = new FormData(event.currentTarget);

        const dateValues = getDateValues(new Date());

        const payload = {
            id: dateValues.time.toString(),
            email: user.email ,
            date: dateValues.date,
            day: dateValues.day,
            time: dateValues.time,
            church: church,
            attendance: parseInt(data.get('attendance')),
            origin: orgDetails.url,
            ip: geolocation.IPv4,
            deviceWidth: window.innerWidth,
            deviceHeight: window.innerHeight
        }

        // console.log(payload)

        setUser({...user, attendanceRecords: [payload]})
      }
      
    }

    const churches = [
      'CE LOVE CHURCH BARKING', 'CE BARKING', 'CE EAST HAM', 'CE ILFORD', 'CE MEDWAY', 'CE PORTSMOUTH', 'CE HARLOW',
      'CE BELFAST', 'CE BRISTOL 1', 'CE BRISTOL 2', 'CE LOVE CHURCH BRISTOL', 'CE THURROCK', 'CE COLCHESTER',
      'CE DOCKLANDS', 'CE GLOUCESTER', 'CE BATH', 'CE BASILDON', 'CE ROMFORD', 'CE STRATFORD',
      'CE CYPRUS', 'CE LOVE CHURCH DAGENHAM', 'OTHER'
    ]
    
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
              value={user.email}
              disabled
              
            />
          </Grid>
          <Grid item xs={12} >
          <TextField required select fullWidth id="title" label="Select Your Church" name="church" value={church} autoComplete="church" autoFocus onChange={(e) => setChurch(e.target.value)} >
            {churches.map((church) => (<MenuItem key={church} value={church}>{church}</MenuItem>))}
          </TextField>
        </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="attendance"
              label="Number of People Watching"
              id="attendance"
              type='number'
              min='1'
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
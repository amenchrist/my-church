import React from 'react';
import { Button, TextField,  Grid, Box,  } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';

export default function AttendanceForm() {

    const { currentMember, churchName, url, setCurrentMember, geolocation } = useStateContext();



    function handleAttendance(event){
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const d = new Date()

      const payload = {
        id: (d.getTime()/1000).toString(),
        email: currentMember.email ,
        date: d.getDate(),
        day: d.getDay(),
        time: d.getTime().toLocaleString(),
        church: churchName,
        attendees: data.get('attendance'),
        origin: url,
        ip: geolocation.IPv4
      }

      setCurrentMember({...currentMember, attendanceRecords: [payload]})
    }
    
    return (
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
              autoFocus
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
    )
}
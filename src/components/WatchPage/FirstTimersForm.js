import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';

export default function FirstTimersForm() {

  const { currentMember, setCurrentMember, churchName, url, geolocation } = useStateContext();


  const handleSubmit = (event) => {
    event.preventDefault();
      const data = new FormData(event.currentTarget);

      const d = new Date()

      const attendanceRecord = {
        id: (d.getTime()/1000).toString(),
        email: data.get('email') ,
        date: d.getDate(),
        day: d.getDay(),
        time: d.getTime().toLocaleString(),
        church: churchName,
        attendees: data.get('attendance'),
        origin: url,
        primaryAttendee: data.get('firstName'),
        lastName: data.get('lastName'),
        primaryAttendeeTitle: data.get('title'),
        phone: data.get('phone'),
        ip: geolocation.IPv4
      }

      setCurrentMember({...currentMember, attendanceRecords: [attendanceRecord]})
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
        <Grid item xs={12} >
          <TextField
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            autoComplete="family-name"
            name="lastName"
            required
            fullWidth
            id="lastName"
            label="Last Name"
          />
        </Grid>            
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
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
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
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

import React, { useEffect, useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Grid, Box, MenuItem } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';
import { getDateValues } from '../functions';
import { attendanceRegex, nameRegex, phoneRegex } from '../regex';

export default function FirstTimersForm() {

  const { currentMember, setCurrentMember, churchName, url, geolocation } = useStateContext();

  const [ attendance, setAttendance ] = useState(1)
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('')
  const [ title, setTitle ] = useState('')
    
  const [ validAttendance, setValidAttendance ] = useState(true);
  const [ validFirstName, setValidFirstName ] = useState(false);
  const [ validLastName, setValidLastName ] = useState(false);
  const [ validPhone, setValidPhone ] = useState(false);

  const [ valid, setValid ] = useState(false);

  useEffect(() => {
    console.log("Valid = ", valid)
    if(validFirstName && validLastName && validPhone && validAttendance ){
      setValid(true)
    } else {
      setValid(false)
    }
  }, [validFirstName, validLastName, validPhone, validAttendance, valid ])

  const handleValidation = (value, setFunc, valFunc, regex) => {
      //set email to user input
      setFunc(value);
      
      //define regex     
      const reg = new RegExp(regex); 
      
      //test whether input is valid
      valFunc(reg.test(value));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    if(valid){

      const dateValues = getDateValues(new Date());

      const attendanceRecord = {
        id: dateValues.time.toString(),
        email:currentMember.email,
        date: dateValues.date,
        day: dateValues.day,
        time: dateValues.time,
        church: churchName,
        attendance: parseInt(data.get('attendance')),
        origin: url,
        primaryAttendee: data.get('firstName'),
        lastName: data.get('lastName'),
        primaryAttendeeTitle: data.get('title'),
        phone: data.get('phone'),
        ip: geolocation.IPv4
      }

      setCurrentMember({...currentMember, attendanceRecords: [attendanceRecord]})
    }

    
      
  };

  const titles = [
    {
      value: 'Mr.',
      label: 'Mr.',
    },
    {
      value: 'Ms.',
      label: 'Ms.',
    },
    {
      value: 'Mrs.',
      label: 'Mrs.',
    },
    {
      value: 'Brother',
      label: 'Brother',
    },
    {
      value: 'Sister',
      label: 'Sister',
    },
    {
      value: 'Pastor',
      label: 'Pastor',
    },

    {
      value: 'Deacon',
      label: 'Deacon',
    },
    {
      value: 'Deaconess',
      label: 'Deaconess',
    },
    {
      value: 'Rev.',
      label: 'Rev.',
    },
    {
      value: 'Dr.',
      label: 'Dr.',
    },
  ]

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
            disabled
          />
        </Grid>
        <Grid item xs={12} >
          <TextField required select fullWidth id="title" label="Title" name="title" value={title} autoComplete="title" autoFocus onChange={(e) => setTitle(e.target.value)} >
            {titles.map((title) => (<MenuItem key={title.value} value={title.value}>{title.label}</MenuItem>))}
          </TextField>
        </Grid>
        <Grid item xs={12} >
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            error={!validFirstName}
            value={firstName}
            onChange={(e) => handleValidation(e.target.value, setFirstName, setValidFirstName, nameRegex)}
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
            error={!validLastName}
            value={lastName}
            onChange={(e) => handleValidation(e.target.value, setLastName, setValidLastName, nameRegex)}
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
            error={!validPhone}
            value={phone}
            onChange={(e) => handleValidation(e.target.value, setPhone, setValidPhone, phoneRegex)}
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
              error={!validAttendance}
              value={attendance}
              onChange={(e) => handleValidation(e.target.value, setAttendance, setValidAttendance, attendanceRegex)}
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

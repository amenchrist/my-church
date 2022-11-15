import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Box } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';
import { emailRegex } from '../regex';
import useEmailChecker from '../../hooks/useEmailChecker';

export default function EmailForm() {

  const { setUser, serverIsOnline, setServerIsOnline } = useStateContext();
  const [ email, setEmail ] = useState('')
  const [ valid, setValid ] = useState(true);

   // Check if server is online
   const emailChecked = useEmailChecker('et@test.com')[1]; 

  //  useEffect(() => {
  //   if(!emailChecked){
  //     setInterval(setServerIsOnline(false), 3000)
      
  //   } 
  // })

   useEffect(() => {
     if(emailChecked){
       setServerIsOnline(true)
     } else{
      setServerIsOnline(false)
     }
   }, [emailChecked, setServerIsOnline])

  const handleValidation = (value) => {
      //set email to user input
      setEmail(value.toLowerCase());
      
      //define regex     
      const reg = new RegExp(emailRegex); 
      
      //test whether input is valid
      setValid(reg.test(value));
  };

  function submitEmail(event){
    event.preventDefault();
    handleValidation(email)
    if(valid){
      const data = new FormData(event.currentTarget);
      const userEmail = data.get('email').toLowerCase();
      setUser({email: userEmail})
    }
  }

  return (
    <>
      <Box component="form" noValidate onSubmit={submitEmail} sx={{ mt: 3, width: '100%' }}  >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              error={!valid}
              autoFocus
              onChange={(e) => handleValidation(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!serverIsOnline}
        >
          Submit
        </Button>
      </Box>
    </>
  )
}
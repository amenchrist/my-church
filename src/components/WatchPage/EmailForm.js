import React from 'react';
import { Button, TextField, Grid, Box } from '@mui/material';
import { useStateContext } from '../../contexts/ContextProvider';

export default function EmailForm() {

    const { setCurrentMember } = useStateContext();

    function submitEmail(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userEmail = data.get('email').toLowerCase();
        
        if (userEmail.length > 5){
            setCurrentMember({email: userEmail});
        }
      }

      return (
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
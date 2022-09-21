import React, { useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStateContext } from '../contexts/ContextProvider';
import useServiceDatesRetriever from '../hooks/useServiceDatesRetriever';
import { convertDateToDateStringObj } from '../functions';
import useAuthenticator from '../hooks/useAuthenticator';
import { emailRegex } from '../components/regex';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Loveworldnation.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const { setIsAdmin, serviceDateObjects, setServiceDateObjects, awaitingServerResponse, setAuthRequested } = useStateContext();
  const [ serviceDatesReceived, serviceDatesList ] = useServiceDatesRetriever();
  const [ payload, setPayload ] = useState({});
  
  const [ emailExists, responseReceived ] = useAuthenticator(payload);

  useEffect(() => {
    if(emailExists) {
      setIsAdmin(true)
    }
  }, [emailExists, setIsAdmin]);

  useEffect(() => {
    if (serviceDatesReceived && !serviceDateObjects.length && !awaitingServerResponse ) {
        const serviceDateObjects = serviceDatesList.map(date => convertDateToDateStringObj(date))
      setServiceDateObjects(serviceDateObjects)
    } 
  }, [serviceDatesReceived, serviceDateObjects.length, serviceDatesList, setServiceDateObjects, awaitingServerResponse]);


  const handleSubmit = (event) => {
    event.preventDefault();
    if(valid){
      const data = new FormData(event.currentTarget);
    
      setPayload({
        email: data.get('email'),
        password: data.get('password'),
      });
      // console.log(awaitingServerResponse);
      setAuthRequested(true)

      // setPayload({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
    }
    
  };

  const [ valid, setValid ] = useState(false);
  const [ validEmail, setValidEmail ] = useState(false);
  const [ validPassword, setValidPassword ] = useState(false);
  const [ email, setEmail ] = useState('');
  

  useEffect(() => {
    console.log("Valid = ", valid)
    if(validEmail && validPassword){
      setValid(true)
    } else {
      setValid(false)
    }
  }, [validEmail, validPassword, valid])


  const handleValidation = (value) => {
      //set email to user input
      setEmail(value);
      
      //define regex     
      const reg = new RegExp(emailRegex); 
      
      //test whether input is valid
      setValidEmail(reg.test(value));
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                autoFocus
                error={!validEmail}
                onChange={(e) => handleValidation(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => e.target.value.length < 3?  setValidPassword(false) : setValidPassword(true) }
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
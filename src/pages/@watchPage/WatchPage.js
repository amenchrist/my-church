import React from 'react'
import FullWidthTabs from '../../components/WatchPage/FullWidthTabs'
import VideoPlayer from '../../components/WatchPage/VideoPlayer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AttendancePage from './AttendancePage';
import { useStateContext } from '../../contexts/ContextProvider';
import WatchPageSidebar from '../../components/WatchPage/WatchPageSidebar';
import { Hidden } from '@mui/material';

function WatchPage() {

  const { attendanceSubmitted, isMobileNavOpen, setMobileNavOpen } = useStateContext();

  return (
    <>
      <Box sx={{ flexGrow: 1, height: '90vh' }}>
        <WatchPageSidebar 
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        />
        <Hidden mdDown>
        <Grid container sx={{ height: "100%" }} >
          <Grid item xs={12} md={8} sx={{ border: '2px solid green' }} >        
            <VideoPlayer />
          </Grid>
          <Grid item xs={12} md={4} sx={{border: '2px solid blue'}} >
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </Grid>
        </Grid>
        </Hidden>
        <Hidden mdUp>
        <Grid container sx={{ height: "" }} >
          <Grid item xs={12} md={8} sx={{ border: '2px solid green' }} >        
            <VideoPlayer />
          </Grid>
          <Grid item xs={12} md={4} sx={{border: '2px solid blue'}} >
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </Grid>
        </Grid>
        </Hidden>
      </Box>
    </>
  )
}

export default WatchPage
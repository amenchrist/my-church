import React from 'react'
import FullWidthTabs from '../../components/WatchPage/FullWidthTabs'
// import GivingForm from '../components/GivingForm'
// import LiveChat from '../components/LiveChat'
import VideoPlayer from '../../components/WatchPage/VideoPlayer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AttendancePage from './AttendancePage';
import { useStateContext } from '../../contexts/ContextProvider';
import WatchPageSidebar from '../../components/WatchPage/WatchPageSidebar';

function WatchPage() {

  const { attendanceSubmitted } = useStateContext();
  const { isMobileNavOpen, setMobileNavOpen } = useStateContext();

  return (
    <>
      <Box sx={{ flexGrow: 1, maxHeight: '100vh' }}>
        <WatchPageSidebar 
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        />
        <Grid container>
          <Grid item xs={12} md={8}>        
                <VideoPlayer />
          </Grid>
          <Grid item xs={12} md={4} sx={{ overflowY: "hidden"}} >
          {/* <FullWidthTabs /> */}
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default WatchPage
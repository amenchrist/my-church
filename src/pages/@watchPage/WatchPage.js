import React from 'react'
import FullWidthTabs from '../../components/WatchPage/FullWidthTabs'
import VideoPlayer from '../../components/WatchPage/VideoPlayer'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AttendancePage from './AttendancePage';
import { useStateContext } from '../../contexts/ContextProvider';
import WatchPageSidebar from '../../components/WatchPage/WatchPageSidebar';
import { useMemo } from 'react';

function WatchPage() {

  const { attendanceSubmitted, isMobileNavOpen, setMobileNavOpen } = useStateContext();

  const PersistentVideoPlayer = useMemo(() => {
    return (
      <Grid item xs={12} md={8}>        
        <VideoPlayer />
      </Grid>
    )
  }, [attendanceSubmitted])

  return (
    <>
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <WatchPageSidebar 
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        />
        <Grid container sx={{ height: "100%"}}>
          {PersistentVideoPlayer}
          <Grid item xs={12} md={4} sx={{ overflowY: "hidden"}} >
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default WatchPage
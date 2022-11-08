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
  // const [ height, setHeight ] = React.useState('100%')

  // React.useEffect(() => {
  //   if(window.innerWidth < 900){
  //     setHeight(document.getElementById("attendance-div").clientHeight)
  //   }
  // })

  return (
    <>
      <Box sx={{ flexGrow: 1, height: '90vh' }}>
        <WatchPageSidebar 
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        />
        <Hidden mdDown>
        <Grid container sx={{ height: "100%" }} >
          <Grid item xs={12} md={8}  >        
            <VideoPlayer />
          </Grid>
          <Grid item xs={12} md={4} style={{display: 'flex', width: "100%", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </Grid>
        </Grid>
        </Hidden>
        <Hidden mdUp>
        <div style={{display: 'flex', height: "100%", flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{width:'100%'}}>
            <VideoPlayer />
          </div>
          <div id='attendance-div' style={{ flexGrow: 1, overflowY: "auto", margin: 0, width: "100%" }}>
            {attendanceSubmitted? <FullWidthTabs /> : <AttendancePage /> }
          </div>
        </div>
        </Hidden>
      </Box>
    </>
  )
}

export default WatchPage
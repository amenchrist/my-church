import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { useTheme, AppBar, Tabs, Tab, Box } from '@mui/material';
// import Typography from '@mui/material/Typography';
import LiveChat from './LiveChat';
import GivingForm from './GivingForm';
import Announcements from './Announcements';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  React.useEffect(() => {
    document.getElementById('tab-panellll').parentElement.parentElement.height = '100%'
    console.log(document.getElementById('tab-panellll').parentElement.parentElement.parentElement.height)
  
  }, [])
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        // <Box sx={{ p: 1 }}>
          
        // </Box>
        <div style={{  height: '100%', border: '2px solid white', backgroundColor: "red", overflowY: 'hidden' }}>            
            {children}
          </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: "100%", height: '100%' }}>
      <AppBar position="static" style={{height:'10%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Chat" {...a11yProps(0)} />
          <Tab label="Announcements" {...a11yProps(1)} />
          <Tab label="Giving" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div id='test tab' style={{ height: '90%', border: '2px solid red', backgroundColor: "pink", overflowY: 'auto'}}>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{height: '100%'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction} id='tab-panellll' style={{ height: '100%', border: '2px solid black', backgroundColor: "blue", overflowY: 'hidden'  }}  >
          <LiveChat />
          {/* <div style={{backgroundColor: "green", height: '400px' }} >
          </div> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Announcements />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <GivingForm />
        </TabPanel>
      </SwipeableViews>
      </div>
    </Box>
  );
}

import { Box, Container, Grid } from '@mui/material';
import TotalAttendance from '../../components/adminDashboard/TotalAttendance';
// import LatestOrders from '../components/adminDashboard/LatestOrders';
// import LatestProducts from '../components/dashboard/LatestProducts';
// import Sales from '../components/adminDashboard/Sales';
// import TasksProgress from '../components/adminDashboard/TasksProgress';
import TotalFirstTimers from '../../components/adminDashboard/TotalFirstTimers';
import TotalGiving from '../../components/adminDashboard/TotalGiving';
// import TrafficByDevice from '../../components/adminDashboard/ServiceSummary/TrafficByDevice'
import AppWebsiteVisits from '../../components/charts/AppWebsiteVisits';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

const ServiceSummary = () => {
  const { serviceSummary } = useAdminStateContext();
  console.log(serviceSummary.attendanceOverviewChartLabels)

  
  return (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        // minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3} >
          <Grid item lg={4} sm={6} xl={4} xs={12} >
            <TotalAttendance />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12} >
            <TotalFirstTimers />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12} >
            <TotalGiving sx={{ height: '100%' }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12} >
            {/* <Sales /> */}
          </Grid>
          <Grid item lg={4} sm={6} xl={3} xs={12} >
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid item lg={12} sm={12} xl={12} xs={12} >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
            <AppWebsiteVisits
              title="Attendance trend this year "
              subheader="Average monthly attendance"
              chartLabels={serviceSummary.attendanceOverviewChartLabels}
              chartData={[
                // {
                //   name: 'Team A',
                //   type: 'column',
                //   fill: 'solid',
                //   data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                // },
                {
                  name: 'Sunday Services',
                  type: 'line',
                  fill: 'solid',
                  data: serviceSummary.averageSundayAttendanceByMonth,
                },
                {
                  name: 'Wednesday Services',
                  type: 'line',
                  fill: 'solid',
                  data: serviceSummary.averageWednesdayAttendanceByMonth,
                },
              ]}
            />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={4}
            xs={12}
          >
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
)};

export default ServiceSummary;
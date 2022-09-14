import { Box, Container, Grid } from '@mui/material';
import Budget from '../../components/adminDashboard/TotalAttendance';
// import LatestOrders from '../components/adminDashboard/LatestOrders';
// import LatestProducts from '../components/dashboard/LatestProducts';
// import Sales from '../components/adminDashboard/Sales';
// import TasksProgress from '../components/adminDashboard/TasksProgress';
import TotalCustomers from '../../components/adminDashboard/TotalCustomers';
import TotalGiving from '../../components/adminDashboard/TotalGiving';
// import TrafficByDevice from '../../components/adminDashboard/ServiceSummary/TrafficByDevice'
import AppWebsiteVisits from '../../components/adminDashboard/ServiceSummary/AppWebsiteVisits';

const ServiceSummary = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        // minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <TotalGiving sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice sx={{ height: '100%' }} /> */}
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
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
);

export default ServiceSummary;
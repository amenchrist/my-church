import { Box, Container, Grid } from '@mui/material';
import TotalTithes from '../../components/memberDashboard/GivingSummary/TotalTithes';
import TotalOfferings from '../../components/memberDashboard/TotalOfferings';
import TotalPartnership from '../../components/memberDashboard/TotalPartnership';
import GivingTrend from '../../components/memberDashboard/GivingSummary/GivingTrend';
import MemberTotalGiving from '../../components/memberDashboard/MemberTotalGiving';

const GivingSummary = () => (
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
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalTithes />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalOfferings />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalPartnership />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <MemberTotalGiving sx={{ height: '100%' }} />
          </Grid>
         
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            {/* <LatestProducts sx={{ height: '100%' }} /> */}
            <GivingTrend
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

export default GivingSummary;
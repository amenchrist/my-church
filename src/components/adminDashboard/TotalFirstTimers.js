import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { green, red } from '@mui/material/colors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

const TotalFirstTimers = (props) => {

  const { serviceSummary } = useAdminStateContext();
  const amount = serviceSummary.firstTimersList.length

  const { lastWeeksFirstTimersTotal } = serviceSummary;

  const percentageChange = Math.abs(Math.ceil((amount - lastWeeksFirstTimersTotal)/lastWeeksFirstTimersTotal * 100))


  return (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            FIRST-TIMERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {amount}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        {amount > lastWeeksFirstTimersTotal ? 
          <ArrowUpwardIcon sx={{ color: green[900] }} /> : <ArrowDownwardIcon sx={{ color: red[900] }} />}
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          {percentageChange === Infinity  || isNaN(percentageChange) ? '' : `${percentageChange} %`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last week
        </Typography>
      </Box>
    </CardContent>
  </Card>
)};

export default TotalFirstTimers;

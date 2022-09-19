import { Avatar, Box, Card, CardContent, Grid, Typography 
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MoneyIcon from '@mui/icons-material/Money';
import { red, green } from '@mui/material/colors';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

const TotalAttendance = (props) => {

  const { serviceSummary } = useAdminStateContext();
  const { totalAttendance, lastWeeksTotalAttendance } = serviceSummary;

  const percentageChange = Math.abs(Math.ceil((totalAttendance - lastWeeksTotalAttendance)/lastWeeksTotalAttendance * 100))
  
  return (
    <Card
      sx={{ height: '100%' }}
      {...props}
    >
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
              TOTAL ATTENDANCE
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {totalAttendance}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: red[600],
                height: 56,
                width: 56
              }}
            >
              <MoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {totalAttendance > lastWeeksTotalAttendance ? 
          <ArrowUpwardIcon sx={{ color: green[900] }} /> : <ArrowDownwardIcon sx={{ color: red[900] }} />}
          <Typography
            sx={{
              mr: 1
            }}
            variant="body2"
          >
            {percentageChange === Infinity || isNaN(percentageChange) ? "" : `${percentageChange} %`}
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
  )
};

export default TotalAttendance;

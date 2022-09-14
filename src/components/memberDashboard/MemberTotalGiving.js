import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { indigo } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const MemberTotalGiving = (props) => (
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
            TOTAL GIVING
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            £6,283.45
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
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
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default MemberTotalGiving;

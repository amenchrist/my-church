import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { indigo } from '@mui/material/colors';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const TotalGiving = (props) => (
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
            £2,200
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
    </CardContent>
  </Card>
);

export default TotalGiving;

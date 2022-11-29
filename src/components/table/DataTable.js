import { DataGrid } from '@mui/x-data-grid';
import Iconify from './Iconify';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Stack, Typography, Button } from '@mui/material';

export default function DataTable({title, columns, rows}) {

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 70, hide: true },
  //   { field: 'title', headerName: 'Title', width: 70 },
  //   { field: 'name', headerName: 'Name', width: 200 },
  //   // { field: 'email', headerName: 'Email', width: 200 },
  //   { field: 'church', headerName: 'Church', width: 200 },
  //   {
  //     field: 'attendance',
  //     headerName: 'Attendance',
  //     type: 'number',
  //     width: 90,
  //   },
  //   { field: 'phone', headerName: 'Phone Number', width: 200 },
  //   // {
  //   //   field: 'fullName',
  //   //   headerName: 'Full name',
  //   //   description: 'This column has a value getter and is not sortable.',
  //   //   sortable: false,
  //   //   width: 160,
  //   //   valueGetter: (params) =>
  //   //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   // },
  // ];

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        // minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Typography variant="h4" gutterBottom>
              {title}
            </Typography>
            <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
              New Entry
            </Button>
          </Stack>
        <Grid container spacing={3} >
          <Grid item lg={12} sm={12} xl={12} xs={12} >
          <div style={{ height: "80vh", width: '100%', backgroundColor: "white" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={100}
              rowsPerPageOptions={[20]}
            />
          </div>
          </Grid>
          </Grid>
      </Container>
    </Box>   
    
  );
}
import DataTable from '../../components/table/DataTable';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

export default function FirstTimers(){

    const { serviceSummary } = useAdminStateContext ();
    console.log(serviceSummary);

    const columns = [
      { field: 'id', headerName: 'ID', width: 70, hide: true },
      { field: 'title', headerName: 'Title', width: 70 },
      { field: 'name', headerName: 'Name', width: 200 },
      // { field: 'email', headerName: 'Email', width: 200 },
      { field: 'church', headerName: 'Church', width: 200 },
      {
        field: 'attendance',
        headerName: 'Attendance',
        type: 'number',
        width: 90,
      },
      { field: 'phone', headerName: 'Phone Number', width: 200 },
    ];

  const rows = serviceSummary.firstTimersList.map(rec => {

    return {
        id: rec.attendanceRecords[0].id,
        title: rec.title,
        name: rec.firstName,
        email: rec.email,
        phone: rec.phone? rec.phone : "Not provided" ,
        attendance: rec.attendanceRecords[0].attendance,
        church: rec.attendanceRecords[0].church
    }
  })

  return(
    <DataTable rows={rows} title={"First Timers"} columns={columns} />
  )
}
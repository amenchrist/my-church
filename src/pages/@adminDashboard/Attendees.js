import { useAdminStateContext } from '../../contexts/AdminContextProvider';
import DataTable from '../../components/table/DataTable';

export default function Attendees(){

  const { serviceSummary } = useAdminStateContext();
  const columns = [
    { field: 'id', headerName: 'ID', width: 150, hide: true },
    { field: 'time', headerName: 'Time', width: 100 },
    { field: 'title', headerName: 'Title', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'church', headerName: 'Church', width: 200 },
    {
      field: 'attendance',
      headerName: 'Attendance',
      type: 'number',
      width: 90,
    },
    { field: 'phone', headerName: 'Phone Number', width: 200 }
  ];
  
  const rows = serviceSummary.attendanceList.map(rec => {
   return rec.attendanceRecords.map((att, i) => {
      return {
          id: att.id+i,
          time: new Date(parseInt(att.id)*1000).toTimeString().substr(0,5), 
          title: rec.title,
          name: rec.firstName,
          email: rec.email,
          phone: rec.phone? rec.phone : "Not provided" ,
          attendance: att.attendance,
          church: att.church
        }
    })
  }).flat()
  return(
   <DataTable rows={rows} title={"Attendees"} columns={columns} />
  )
}
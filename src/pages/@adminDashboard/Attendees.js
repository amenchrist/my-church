import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';
import DataTable from '../../components/table/DataTable';

export default function Attendees(){

    const { serviceSummary } = useAdminStateContext ();
    console.log(serviceSummary)
    const rows = serviceSummary.attendanceList.map(rec => {
        
        return {
            id: rec.id,
            name: rec.firstName,
            email: rec.email,
            attendance: rec.attendance,
            church: rec.church
        }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'church', headerName: 'Church', width: 130 },
        {
          field: 'attendance',
          headerName: 'Attendance',
          type: 'number',
          width: 90,
        },
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];
      
      const rows1 = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];

    

    //serviceSummary.attendanceList

    return(
        // <RecordsTable TableContent={serviceSummary.attendanceList} title={"Attendees"} />
        <DataTable columns={columns} rows={rows} />
    )
}
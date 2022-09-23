import DataTable from '../../components/table/DataTable';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

export default function FirstTimers(){

    const { serviceSummary } = useAdminStateContext ();
    console.log(serviceSummary)

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
    <DataTable rows={rows} title={"First Timers"} />
  )
}
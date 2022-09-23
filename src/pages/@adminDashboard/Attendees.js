import { useAdminStateContext } from '../../contexts/AdminContextProvider';
import DataTable from '../../components/table/DataTable';

export default function Attendees(){

  const { serviceSummary } = useAdminStateContext ();
  const rows = serviceSummary.attendanceList.map(rec => {
    return rec.attendanceRecords.map(att => {
      return {
          id: att.id,
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
    <DataTable rows={rows} title={"Attendees"} />
  )
}
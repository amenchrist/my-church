import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';
import { useAdminStateContext } from '../../contexts/AdminContextProvider';

export default function Attendees(){

    const { serviceSummary } = useAdminStateContext ();

    //serviceSummary.attendanceList

    return(
        <RecordsTable TableContent={serviceSummary.attendanceList} title={"Attendees"} />
    )
}
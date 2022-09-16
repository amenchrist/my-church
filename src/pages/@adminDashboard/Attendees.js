import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function Attendees(){

    return(
        <RecordsTable TableContent={TableContent} title={"Attendees"} />
    )
}
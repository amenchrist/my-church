import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function GivingRecord(){

    return(
        <RecordsTable TableContent={TableContent} title={"Giving Record"} />
    )
}
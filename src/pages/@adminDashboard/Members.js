import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function Members(){

    return(
        <RecordsTable TableContent={TableContent} title={"Members"} />
    )
}
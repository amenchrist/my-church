import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function Partnerships(){

    return(
        <RecordsTable TableContent={TableContent} title={"Partnerships"} />
    )
}
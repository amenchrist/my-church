import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function Offerings(){

    return(
        <RecordsTable TableContent={TableContent} title={"Offerings"} />
    )
}
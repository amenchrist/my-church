import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function Tithes(){

    return(
        <RecordsTable TableContent={TableContent} title={"Tithes"} />
    )
}
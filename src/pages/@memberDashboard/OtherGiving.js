import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function OtherGiving(){

    return(
        <RecordsTable TableContent={TableContent} title={"Other Givings"} />
    )
}
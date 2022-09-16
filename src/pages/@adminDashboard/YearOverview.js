import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function YearOverview(){

    return(
        <RecordsTable TableContent={TableContent} title={"Year Overview"} />
    )
}
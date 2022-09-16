import TableContent from '../../_mock/user';
import RecordsTable from '../../components/table/RecordsTable';

export default function SpecialSeeds(){

    return(
        <RecordsTable TableContent={TableContent} title={"Special Seeds"} />
    )
}
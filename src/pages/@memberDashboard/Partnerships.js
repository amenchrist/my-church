import DataTable from '../../components/table/DataTable';
import { givings } from '../../_mock/mockGiving';

export default function Partnerships(){

    const title = 'Partnership'

    const rows  = givings.filter(rec => rec.category === title.toUpperCase() ).map(rec => {
        const { amount, id, currency, recipient, time, date, reference} = rec
        return {
            id,
            amount,
            currency,
            recipient,
            time,
            date,
            reference
        }
    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 50, hide: true },
        { field: 'currency', headerName: 'Currency', type: 'number', width: 100 },
        { field: 'amount', headerName: 'Amount', type: 'number', width: 70 },
        { field: 'recipient', headerName: 'Recipient', width: 200 },
        { field: 'time', headerName: 'Email', width: 150 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'description',headerName: 'Attendance', width: 150 },
        { field: 'reference', headerName: 'reference', width: 150 },
      ];

      
    return(
        <DataTable rows={rows} title={title} columns={columns} />
    )
}
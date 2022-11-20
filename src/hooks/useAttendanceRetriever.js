import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAttendanceRetriever() {

  const { server, orgDetails, isAdmin } = useStateContext();

  const [ attendanceRecords, setAttendanceRecords ] = useState([])

  const [ responseReceived, setResponseReceived ] = useState(false);  
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(isAdmin && !responseReceived){
        console.log("Retrieving Attendance Records")

        const options = {
            signal: signal
        }

        //${orgDetails.url}
    
        fetch(`${server}/attendance/test.amenslibrary.com`, options).then(res => res.json()).then(res => {
          setAttendanceRecords(res);
          setResponseReceived(true)
        }).catch(e => {
            console.log(e);
        });
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, responseReceived, isAdmin, orgDetails ])

  return [ responseReceived, attendanceRecords ]
}


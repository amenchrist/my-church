import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAttendanceRetriever() {

  const { server, orgDetails, user } = useStateContext();

  const [ attendanceRecords, setAttendanceRecords ] = useState([])

  const [ responseReceived, setResponseReceived ] = useState(false);  
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(user.isAnAdmin && !responseReceived){
        console.log("Retrieving Attendance Records")

        const options = {
            signal: signal
        }

        //${orgDetails.url}
    
        fetch(`${server}/attendance/`, options).then(res => res.json()).then(res => {
          
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
    }, [ server, responseReceived, user.isAnAdmin, orgDetails ])

  return [ responseReceived, attendanceRecords ]
}


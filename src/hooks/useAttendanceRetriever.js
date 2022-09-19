import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAttendanceRetriever() {

  const { server, url, isAdmin, setAwaitingServerResponse } = useStateContext();

  const [ attendanceRecords, setAttendanceRecords ] = useState([])

  const [ responseReceived, setResponseReceived ] = useState(false);

  useEffect(() => {
    setAwaitingServerResponse(true)
  }, [])
  
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(isAdmin && !responseReceived){
        console.log("Retrieving Attendance Records")

        const options = {
            signal: signal
        }

        setAwaitingServerResponse(true)
    
        fetch(`${server}/attendance/${url}`, options).then(res => res.json()).then(res => {
          setAttendanceRecords(res);
          setResponseReceived(true)
          setAwaitingServerResponse(false)
        }).catch(e => {
            console.log(e);
        });
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
        setAwaitingServerResponse(false)
      }
    }, [ server, responseReceived, isAdmin, url ])

  return [ responseReceived, attendanceRecords ]
}


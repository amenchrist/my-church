import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAttendanceLogger(attendanceRecord, processingRequested ) {

  const {server, attendanceSubmitted } = useStateContext();

  const [attendanceLogged, setAttendanceLogged] = useState(false);
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;

      console.log('attendance record id = ', attendanceRecord.id)
 
      if(attendanceRecord.id !== undefined && processingRequested ){
        console.log("submitting attendance record")
        const options = {
            signal: signal,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(attendanceRecord)
          }
    
          fetch(`${server}/attendance`, options).then(res => res.json()).then( response => {
            if(response){
                setAttendanceLogged(true);
            }else {
              console.log("Attendance not submitted")
            }
    
          }).catch(err => {
            console.log(err)
          })
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, attendanceRecord, processingRequested])

  return attendanceLogged
}


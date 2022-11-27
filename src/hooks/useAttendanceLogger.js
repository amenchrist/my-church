import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAttendanceLogger(attendanceRecords) {

  const {server, attendanceSubmitted } = useStateContext();

  const [attendanceLogged, setAttendanceLogged] = useState(false);
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(attendanceRecords !== undefined && attendanceRecords.length && !attendanceSubmitted){
        console.log("submitting attendance record")
        const options = {
            signal: signal,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(attendanceRecords[0])
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
    }, [ server, attendanceRecords, attendanceLogged, attendanceSubmitted])

  return attendanceLogged
}


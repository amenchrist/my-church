import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAuthenticator(authRequested, payload) {

  const {server, user, setUser } = useStateContext();
  // const [emailExists, setEmailExists] = useState(false)
  // const [responseReceived, setResponseReceived] = useState(false)
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;

      if(authRequested){
        // console.log('Authentication has been requested')
        //fetch user
        // const payload = {
        //   email: email,
        // }    

        const options = {
          signal: signal,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }

        fetch(`${server}/members/signin`, options).then(res => res.json()).then( userObj => {
          if(userObj.id){
            // setIsAdmin(userObj.role === "Admin");
            const { firstName, lastName, id, role, title, attendanceRecords, church, email } = userObj;
            setUser({
              ...user, 
              email,
              emailExists: true,
              isSignedIn: true,
              isRegistered: true,
              isAnAdmin: role === "Admin"? true : false,
              title, firstName, lastName, attendanceRecords, id, 
              name: firstName? `${title} ${firstName} ${lastName} `: 'Unknown User',
              church: church? church: 'No Church Assigned'         
            })
          }else {
            console.log("Member not found")
          }
          // setResponseReceived(true)

        }).catch(err => {
          console.log(err)
        })
      } else {
        // console.log('Authentication has not been requested')
      }
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, authRequested, payload, setUser, user ])

  return //[emailExists, responseReceived]
}


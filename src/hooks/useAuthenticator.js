import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useAuthenticator(payload) {

  const {server, authRequested, setAuthRequested } = useStateContext();
  const [emailExists, setEmailExists] = useState(false)
  const [responseReceived, setResponseReceived] = useState(false)
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;

      if(authRequested){
        console.log('Authentication has been requested')
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

        fetch(`${server}/members/signin`, options).then(res => res.json()).then( response => {
            setAuthRequested(false)
          if(response){
            setEmailExists(true);     
          }else {
            console.log("Member not found")
          }
          setResponseReceived(true)

        }).catch(err => {
          console.log(err)
        })
      }
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, authRequested])

  return [emailExists, responseReceived]
}


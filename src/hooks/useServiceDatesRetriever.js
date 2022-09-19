import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useServiceDatesRetriever() {

  const { server, url, isAdmin, setAwaitingServerResponse, awaitingServerResponse } = useStateContext();

  const [ serviceDates, setServiceDates ] = useState([])

  const [ responseReceived, setResponseReceived ] = useState(false);

  useEffect(() => {
    console.log("mounted service dates retriever")
    setAwaitingServerResponse(true);
    return () => {
      console.log(awaitingServerResponse);
      console.log("Unmounting Service Retriever")
      setAwaitingServerResponse(false)
    }
  }, [])
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(!responseReceived){
        console.log("Retrieving Service Dates")

        const options = {
            signal: signal
        }

        setAwaitingServerResponse(true)
    
        fetch(`${server}/attendance/`, options).then(res => res.json()).then(res => {
          console.log("Service Dates received")
            setServiceDates(res);
            setResponseReceived(true)
            setAwaitingServerResponse(false)
        }).catch(e => {
            console.log(e);
            setAwaitingServerResponse(false)
        });
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
        setAwaitingServerResponse(false)
      }
    }, [ server, responseReceived, isAdmin, url,setAwaitingServerResponse ])

  return [ responseReceived, serviceDates ]
}


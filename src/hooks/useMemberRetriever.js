import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useMemberRetriever() {

  const { server, churchName, isAdmin } = useStateContext();

  const [ members, setMembers ] = useState([])

  const [ responseReceived, setResponseReceived ] = useState(false);
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;
 
      if(isAdmin && !responseReceived){
        console.log("Retrieving Members")

        const options = {
            signal: signal
        }
    
        const allMembersUrl = `${server}/members/${churchName}`;
        fetch(allMembersUrl, options).then(res => res.json()).then(res => {
            setMembers(res);
            setResponseReceived(true)
        }).catch(e => {
            console.log(e);
        });
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, responseReceived, isAdmin, churchName ])

  return [ responseReceived, members ]
}


import { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';

export default function useEmailChecker(email, processingRequested) {

  const {server} = useStateContext();
  
  const [emailExists, setEmailExists] = useState(false)
  const [phoneExists, setPhoneExists] = useState(false)
  const [emailChecked, setEmailChecked] = useState(false)
  const [isAnAdmin, setIsAnAdmin] = useState(false)
  
  useEffect(() => {

      const controller = new AbortController();
      const signal = controller.signal;

      if(email && processingRequested){

        console.log('Authentication has been requested')
        
        //fetch user
        const payload = {
          email: email,
        }    

        const options = {
          signal: signal,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }

        fetch(`${server}/members/attendance`, options).then(res => res.json()).then( response => {
          if(response.emailExists){
            setEmailExists(true);
            setIsAnAdmin(response.isAnAdmin)
            setPhoneExists(response.phoneExists)
          }else {
            // console.log("Member not found")
          }
          setEmailChecked(true)

        }).catch(err => {
          console.log(err)
        })
      }
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
      }
    }, [ server, email, processingRequested])

  return [emailExists, emailChecked, isAnAdmin, phoneExists]
}


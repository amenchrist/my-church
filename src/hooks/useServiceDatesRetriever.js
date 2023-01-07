import { useState, useEffect, useRef } from 'react';
import { useAdminStateContext } from '../contexts/AdminContextProvider';
import { useStateContext } from '../contexts/ContextProvider';
import { convertDateToDateStringObj } from '../functions';

export default function useServiceDatesRetriever() {

  const rendered = useRef(0)

  useEffect(() => {
    rendered.current++
    // console.log(`Service Retriever Renders = ${rendered.current}`)
  })

  const { server, serviceDateObjects, setServiceDateObjects } = useStateContext();
  
  useEffect(() => {
    // console.log("mounted service dates retriever")

      const controller = new AbortController();
      const signal = controller.signal;

      if(serviceDateObjects.length === 0){
        console.log("Retrieving Service Dates")

        const options = {
            signal: signal
        }
    
        fetch(`${server}/attendance/dates`, options).then(res => res.json()).then(serviceDatesList => {
          console.log("Service Dates received")
          setServiceDateObjects(serviceDatesList.map(date => convertDateToDateStringObj(date)))
        }).catch(e => {
            // console.log(e);
            // console.log("Error retrieving Service Dates")
        });
      }      
  
      return () => {
        //cancel the request before the component unmounts
        controller.abort();
        // console.log("Unmounting Service Retriever")
      }
    }, [ server, setServiceDateObjects, serviceDateObjects.length ])

  return [ serviceDateObjects.length ]
}
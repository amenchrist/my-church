import React, { createContext, useContext, useState, useEffect } from 'react';
import {getAttendees, getFirstTimers, getAbsentees, getParentUrl } from '../functions';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  
  const [churchName, setChurchName] = useState('Christ Embassy');
  const [url, setUrl] = useState('');
  const [geolocation, setGeolocation] = useState('');
  const [church, setChurch] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentMember, setCurrentMember] = useState({});

  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [serviceDate, setServiceDate] = useState('');
  const [ serviceDateObjects, setServiceDateObjects ] = useState([])
  const [dates, setDates] = useState([]);
  const [lastWeekDate, setLastWeekDate] = useState('');
  const [members, setMembers] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [firstTimers, setFirstTimers] = useState([]);
  const [absentees, setAbsentees] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isNewSite, setIsNewSite] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);

  const [ awaitingServerResponse, setAwaitingServerResponse ] = useState(false)

  const [ authRequested, setAuthRequested ] = useState(false)

  const localHost = "http://localhost:5000";
  const host = 'https://arcane-anchorage-41306.herokuapp.com';

  const [server, setServer] = useState(host)
  
  useEffect(() => {
    setUrl(getParentUrl())
    console.log("Device Width is ", window.innerWidth)
  }, [])

  //get ip and location info
  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    if(geolocation.IPv4 === undefined){

      console.log("Getting Geolocation")

      const options = {
        signal: signal,
        method: 'GET',
        mode: 'no-cors', //no-cors
        referrerPolicy: 'strict-origin-when-cross-origin',//no-referrer
        headers: {
          'Content-Type': 'application/json'
        },
      }

      fetch(`https://geolocation-db.com/json/`, options).then(res => res.json()).then( data => {
        console.log(data)
        setGeolocation(data)
      }).catch(err => {
        console.log(err)
        setGeolocation({IPv4: 'IP UNAVAILABLE'})
      })
      
    }

    return () => {
      //cancel the request before the component unmounts
      controller.abort();
    }
  }, [ geolocation ])

  useEffect(() => {
    if(window.location.href.includes('localhost') && server !== localHost){
      setServer(localHost)
    }
  }, [localHost, server])

  useEffect(() => {
    switch(url){
      case "christembassy-eastham.org":
        setChurchName("Christ Embassy East Ham");
        setChurch("East-Ham")
      break;
      case "ceilford.org/":
        setChurchName("Christ Embassy Ilford");
        setChurch("Ilford")
      break;
      case "christembassybarking.org":
        setChurchName("Christ Embassy Barking");
        setChurch("Barking")
      break;
      case "christembassystratford.org":
        setChurchName("Christ Embassy Stratford");
        setChurch("Stratford")
      break;
      case "localhost:3000":
        setChurchName("Christ Embassy Barking");
        setChurch("Barking")
      break;
      default:
        console.log("No church identified")
    }
  }, [url])

  
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   const options = {
  //     signal: signal
  //   }

  //   // if(isAdmin){
  //   //   const allMembersUrl = `${server}/members/${church}`;
  //   //   fetch(allMembersUrl, options).then(res => res.json()).then(res => {
  //   //     setMembers(res);
  //   //   }).catch(e => {
  //   //     console.log(e);
  //   //   });
  //   // }

  //   // const allMembersUrl = `${server}/members/${church}`;
  //   //   fetch(allMembersUrl, options).then(res => res.json()).then(res => {
  //   //     setMembers(res);
  //   //   }).catch(e => {
  //   //     console.log(e);
  //   //   });

  //   return () => {
  //     //cancel the request before the component unmounts
  //     controller.abort();
  //   }
  // }, [server, church, isAdmin]);


  useEffect(() => {
    setAttendees(getAttendees(members, serviceDate));
    setFirstTimers(getFirstTimers(members, serviceDate));
    setAbsentees(getAbsentees(members, serviceDate));
  },[serviceDate, members])

  //EXPORT
  
  const contextStateVars = {

    attendanceRecords, setAttendanceRecords,
    serviceDate, setServiceDate,
    serviceDateObjects, setServiceDateObjects,
    server, url, geolocation,
    dates, setDates,
    members, setMembers,
    lastWeekDate,setLastWeekDate,
    attendees, absentees, firstTimers, churchName,
    isSignedIn, setIsSignedIn, isRegistered, setIsRegistered, currentMember, setCurrentMember,
    isNewSite, setIsNewSite, isAdmin, setIsAdmin, attendanceSubmitted, setAttendanceSubmitted,
    awaitingServerResponse, setAwaitingServerResponse, authRequested, setAuthRequested

  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
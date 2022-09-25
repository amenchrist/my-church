import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { getOrgDetails } from '../functions';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const rendered = useRef(0)
  useEffect(() => {
    rendered.current++
    console.log(`Context provider Renders = ${rendered.current}`)
  })

  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [geolocation, setGeolocation] = useState({IPv4: 'IP UNAVAILABLE'});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentMember, setCurrentMember] = useState({});
  const [orgDetails, setOrgDetails] = useState({
    name: '',
    url: ''
  })
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [serviceDate, setServiceDate] = useState('');
  const [serviceDateObjects, setServiceDateObjects] = useState([])
  const [dates, setDates] = useState([]);
  const [isRegistered, setIsRegistered] = useState(true);
  const [isNewSite, setIsNewSite] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [awaitingServerResponse, setAwaitingServerResponse] = useState(false)
  const [authRequested, setAuthRequested] = useState(false)
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false)

  const localHost = "http://localhost:5000";
  const host = 'https://arcane-anchorage-41306.herokuapp.com';
  let server = host
  if(window.location.href.includes('localhost') && server !== localHost){
    console.log("Setting Server");
    server = (localHost)
  }
  
  useEffect(() => {
    //Getting Organisation Details
    console.log("Getting Org Details");
    setOrgDetails(getOrgDetails())
  }, [])

 

  //get ip and location info
  // useEffect(() => {

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   if(geolocation.IPv4 === undefined){

  //     console.log("Getting Geolocation")

  //     const options = {
  //       signal: signal,
  //       method: 'GET',
  //       mode: 'no-cors', //no-cors
  //       referrerPolicy: 'strict-origin-when-cross-origin',//no-referrer
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     }

  //     fetch(`https://geolocation-db.com/json/`, options).then(res => res.json()).then( data => {
  //       console.log(data)
  //       console.log("Geolocation received")
  //       setGeolocation(data)
  //     }).catch(err => {
  //       console.log("Geolocation failed")
  //       console.log(err)
  //       // setGeolocation({IPv4: 'IP UNAVAILABLE'})
  //     })
      
  //   }

  //   return () => {
  //     //cancel the request before the component unmounts
  //     controller.abort();
  //   }
  // }, [ geolocation ])

  //EXPORT
  
  const contextStateVars = {

    attendanceRecords, setAttendanceRecords,
    serviceDate, setServiceDate,
    serviceDateObjects, setServiceDateObjects,
    server, geolocation, orgDetails,
    dates, setDates,
    isSignedIn, setIsSignedIn, isRegistered, setIsRegistered, currentMember, setCurrentMember,
    isNewSite, setIsNewSite, isAdmin, setIsAdmin, attendanceSubmitted, setAttendanceSubmitted,
    awaitingServerResponse, setAwaitingServerResponse, authRequested, setAuthRequested,
    isMobileNavOpen, setMobileNavOpen, toggleMenuIcon, setToggleMenuIcon

  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
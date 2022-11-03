import React, { createContext, useContext, useState, useEffect, useRef, useMemo } from 'react';
import { getOrgDetails } from '../functions';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  //Track number of rerenders
  const rendered = useRef(0);
  useEffect(() => {
    rendered.current++
    console.log(`Context provider Renders = ${rendered.current}`)
  }, []);

  //Set server location
  const server = useMemo(() => {
    console.log("Setting Server");
    const localHost = "http://localhost:5000";
    const host = 'https://arcane-anchorage-41306.herokuapp.com';
    
    if(window.location.href.includes('localhost')){
      return localHost
    } else {
      return host
    }
  }, []);

  //Get info on parent website
  const orgDetails = useMemo(() => getOrgDetails(), []);

  // const [orgDetails, setOrgDetails] = useState({
  //   name: '',
  //   url: ''
  // })
  // useEffect(() => {
  //   //Getting Organisation Details
  //   console.log("Getting Org Details");
  //   setOrgDetails(getOrgDetails())
  // }, [])

  //Set app default values
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);
  const [awaitingServerResponse, setAwaitingServerResponse] = useState(false)
  const [authRequested, setAuthRequested] = useState(false)

  //Set user defaults
  const [currentMember, setCurrentMember] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [geolocation, setGeolocation] = useState({IPv4: 'IP UNAVAILABLE'});
  const [isAdmin, setIsAdmin] = useState(false);
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);
  const [user, setUser] = useState({
    email: '',
    isAdmin: false,
    isSignedIn: false,
    isRegistered: false,
    attendanceSubmitted: false
  })

  //Set church dashboard defaults
  const [dates, setDates] = useState([]);
  const [serviceDate, setServiceDate] = useState('');
  const [serviceDateObjects, setServiceDateObjects] = useState([])
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  //Set member dashboard defaults  
  const [isNewSite, setIsNewSite] = useState(true); 

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
    isMobileNavOpen, setMobileNavOpen, toggleMenuIcon, setToggleMenuIcon,
    user, setUser

  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
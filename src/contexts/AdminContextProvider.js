import React, { createContext, useContext, useState, } from 'react';
import { getAttendees, getFirstTimers, getGivingsList, getListOfMembers, getServiceDates, getTotalAttendance, getTotalGiven } from '../functions';
import useMemberRetriever from '../hooks/useMemberRetriever';

const StateContext = createContext();

export const AdminContextProvider = ({ children }) => {

    //Retrieves members and creates service summary object

    const [ membersRetrieved, fullMemberRecords ] = useMemberRetriever();
    const [ serviceDate, setServiceDate ] = useState('')
    const [ lastWeeksServiceDate, setLastWeeksServiceDate ] = useState('');
    const [ dates, setDates ] = useState([]);
    const [ membersList, setMembersList ] = useState([]);
    const [ serviceSummary, setServiceSummary ] = useState({});

    if(!membersRetrieved){
        // setDates(getServiceDates(fullMemberRecords));
        // setMembersList(getListOfMembers(fullMemberRecords));
        // setServiceSummary({
        //     serviceDate: serviceDate,
        //     totalAttendance: getTotalAttendance(fullMemberRecords, serviceDate),
        //     lastWeeksTotalAttendance: getTotalAttendance(fullMemberRecords, lastWeeksServiceDate),
        //     attendanceList: getAttendees(fullMemberRecords, serviceDate),
        //     firstTimersList: getFirstTimers(fullMemberRecords, serviceDate),
        //     totalGiven: getTotalGiven(serviceDate),
        //     lastWeeksTotalGiven: getTotalGiven(lastWeeksServiceDate),
        //     givingsList: getGivingsList(serviceDate)
        // })
    }


  const contextStateVars = {
    dates, membersList, serviceSummary, setServiceDate, setLastWeeksServiceDate
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useAdminStateContext = () => useContext(StateContext);
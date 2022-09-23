import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAttendees, getAverageMonthlyAttendance, getFirstTimers, getGivingsList, getListOfMembers, getMonthsForChartLabel, getServiceDates, getTotalAttendance, getTotalGiven } from '../functions';
import useAttendanceRetriever from '../hooks/useAttendanceRetriever';

const StateContext = createContext();

export const AdminContextProvider = ({ children }) => {

    //Retrieves members and creates service summary object

    const [ membersRetrieved, fullMemberRecords ] = useAttendanceRetriever();
    const [ serviceDate, setServiceDate ] = useState('')
    const [ lastWeeksServiceDate, setLastWeeksServiceDate ] = useState('');
    const [ membersList, setMembersList ] = useState([]);
    const [ serviceSummary, setServiceSummary ] = useState({
      serviceDate: "",
      totalAttendance: 0,
      lastWeeksTotalAttendance: 0,
      attendanceList: [],
      firstTimersList: [],
      lastWeeksFirstTimersTotal: 0,
      totalGiven: 0,
      lastWeeksTotalGiven: 0,
      givingsList: [],
      averageSundayAttendanceByMonth: [],
      averageWednesdayAttendanceByMonth: []
  });



    useEffect(()=> {
      
      if(membersRetrieved){
        setMembersList(getListOfMembers(fullMemberRecords));
        setServiceSummary({
            serviceDate: serviceDate,
            totalAttendance: getTotalAttendance(fullMemberRecords, serviceDate),
            lastWeeksTotalAttendance: getTotalAttendance(fullMemberRecords, lastWeeksServiceDate),
            attendanceList: getAttendees(fullMemberRecords, serviceDate),
            firstTimersList: getFirstTimers(fullMemberRecords, serviceDate),
            lastWeeksFirstTimersTotal: getFirstTimers(fullMemberRecords, lastWeeksServiceDate).length,
            totalGiven: getTotalGiven(serviceDate),
            lastWeeksTotalGiven: getTotalGiven(lastWeeksServiceDate),
            givingsList: getGivingsList(serviceDate),
            averageSundayAttendanceByMonth: getAverageMonthlyAttendance(fullMemberRecords),
            averageWednesdayAttendanceByMonth: getAverageMonthlyAttendance(fullMemberRecords, 3),
            attendanceOverviewChartLabels: getMonthsForChartLabel(getAverageMonthlyAttendance(fullMemberRecords).length)
        })

        getAverageMonthlyAttendance(fullMemberRecords)
        
      }
      
    }, [serviceDate, fullMemberRecords, lastWeeksServiceDate, membersRetrieved])

    console.log(serviceSummary)

  const contextStateVars = {
    membersList, serviceSummary, serviceDate, setServiceDate, setLastWeeksServiceDate, lastWeeksServiceDate

  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={contextStateVars}>
      {children}
    </StateContext.Provider>
  );
};

export const useAdminStateContext = () => useContext(StateContext);
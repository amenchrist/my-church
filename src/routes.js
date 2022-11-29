import {  useRoutes, Navigate } from 'react-router-dom';
import DashboardLayout from './components/adminDashboard/DashboardLayout';
import MemberDashboardLayout from './components/memberDashboard/MemberDashboardLayout';
import { Offerings, Tithes, Partnerships, SpecialSeeds, OtherGiving, GivingSummary } from './pages/@memberDashboard';
import { ServiceSummary, Attendees, FirstTimers, Absentees, GivingRecord, Members, YearOverview } from './pages/@adminDashboard';
import WatchPage from './pages/@watchPage/WatchPage';
import SignInSide from './pages/SignIn';
import { useStateContext } from './contexts/ContextProvider';



export default function Router() {

  const { user, awaitingServerResponse } = useStateContext()
  const routes = [
    {
      path: '/',
      element: <WatchPage />
    },
    {
      path: 'admin-dashboard',
      element: user.isAnAdmin && user.isSignedIn && !awaitingServerResponse? <DashboardLayout />:  <SignInSide />,
      children: [
          { path: 'summary', element: <ServiceSummary />},
          { path: 'attendees', element: <Attendees />  },
          { path: 'first-timers', element: <FirstTimers />  },
          { path: 'absentees', element: <Absentees /> },
          { path: 'giving-records', element: <GivingRecord /> },
          { path: 'members', element: <Members /> },
          { path: 'overview', element: <YearOverview /> },
          { path: '/admin-dashboard', element: <Navigate to="/admin-dashboard/summary" /> },

      ]
    },
    {
      path: 'member-dashboard',
      element: user.isSignedIn && !awaitingServerResponse? <MemberDashboardLayout />:  <SignInSide />,
      children: [
          { path: 'summary', element: <GivingSummary />},
          { path: 'tithes', element: <Tithes />  },
          { path: 'offerings', element: <Offerings />  },
          { path: 'partnership', element: <Partnerships /> },
          { path: 'special-seeds', element: <SpecialSeeds /> },
          { path: 'other-giving', element: <OtherGiving /> },
          { path: '/member-dashboard', element: <Navigate to="/member-dashboard/summary" /> },
      ]
    },
    { path: 'sign-in', element: <SignInSide />}
    
  ];


  return useRoutes(routes);

}


import {  useRoutes, Navigate } from 'react-router-dom';
import DashboardLayout from './components/adminDashboard/DashboardLayout';
import MemberDashboardLayout from './components/memberDashboard/MemberDashboardLayout';
import { Offerings, Tithes, Partnerships, SpecialSeeds, OtherGiving, GivingSummary } from './pages/@memberDashboard';
import { ServiceSummary, Attendees, FirstTimers, Absentees, GivingRecord, Members, YearOverview } from './pages/@adminDashboard';
import WatchPage from './pages/@watchPage/WatchPage';


export default function Router() {
  const routes = [
    {
      path: '/',
      element: <WatchPage />
    },
    {
      path: 'admin-dashboard',
      element: <DashboardLayout />,
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
      element: <MemberDashboardLayout />,
      children: [
          { path: 'summary', element: <GivingSummary />},
          { path: 'tithes', element: <Tithes />  },
          { path: 'offerings', element: <Offerings />  },
          { path: 'partnership', element: <Partnerships /> },
          { path: 'special-seeds', element: <SpecialSeeds /> },
          { path: 'other-giving', element: <OtherGiving /> },
          { path: '/member-dashboard', element: <Navigate to="/member-dashboard/summary" /> },
      ]
    }
  ];


  return useRoutes(routes);

}


import {  useRoutes, Navigate } from 'react-router-dom';
import DashboardLayout from './components/adminDashboard/DashboardLayout';
import MemberDashboardLayout from './components/memberDashboard/MemberDashboardLayout';
import { Offerings, Tithes, Partnerships, SpecialSeeds, OtherGiving, GivingSummary } from './pages/@memberDashboard';
import { ServiceSummary, Attendees, FirstTimers, Absentees, GivingRecord, Members, YearOverview } from './pages/@adminDashboard';
// import GivingSummary from './pages/@memberDashboard/GivingSummary';
import WatchPage from './pages/@watchPage/WatchPage';
// import Offerings from './pages/@memberDashboard/Offerings';
// import Partnerships from './pages/@memberDashboard/Partnerships';
// import SpecialSeeds from './pages/@memberDashboard/SpecialSeeds';
// import OtherGiving from './pages/@memberDashboard/OtherGiving';
// import Attendees from './pages/@adminDashboard/Attendees';
// import FirstTimers from './pages/@adminDashboard/FirstTimers';
// import Absentees from './pages/@adminDashboard/Absentees';
// import GivingRecord from './pages/@adminDashboard/GivingRecord';
// import Members from './pages/@adminDashboard/Members';
// import YearOverview from './pages/@adminDashboard/YearOverview';
// import WatchPage from "./pages/WatchPage";
// import MemberDashboard from "./pages/memberDashboard/MemberDashboard";
// import AdminDashboard from "./pages/adminDashboard/AdminDashboard";
// import { AdminContextProvider } from "./contexts/AdminContextProvider";
// import Home from './pages/adminDashboard/home/Home';
// import FirstTimersList from './pages/adminDashboard/first-timers/FirstTimersList';
// import AbsenteesList from './pages/adminDashboard/absentees/AbsenteesList';
// import UserList from './pages/adminDashboard/userList/UserList';
// import User from './pages/adminDashboard/user/User';
// import NewUser from './pages/adminDashboard/newUser/NewUser';
// import ComingSoon from './pages/adminDashboard/comingSoon/ComingSoon';
// import Overview from './pages/adminDashboard/overview/Overview';
// import AttendeesList from './pages/adminDashboard/attendees/AttendeesList';

export default function Router() {
  const routes = [
    {
      path: '/',
      element: <WatchPage />//<h1 style={{fontSize: '50px'}} >Hello home</h1>//<WatchPage />
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
    },
    // {
    //   path: '/admin-dashboard',
    //   element: <><AdminDashboard /></>,
    //   children: [
    //       {path: '/', element: <Home />},
    //       {path: 'attendees', element: <AttendeesList />},
    //       {path: 'first-timers', element: <FirstTimersList />},
    //       {path: 'absentees', element: <AbsenteesList />},
    //       {path: 'users', element: <UserList />},
    //       {path: 'user/:userId', element: <User />},
    //       {path: 'newUser', element: <NewUser />},
    //       {path: 'givings', element: <ComingSoon />},
    //       {path: 'overview', element: <Overview />}
    //   ]
    // },
    // {
    //   path: '/member-dashboard',
    //   element: <MemberDashboard />
    // }
  ];


  return useRoutes(routes);
//   return (
//     <Routes>
//       <Route exact path="/">
//       <WatchPage />
//     </Route>
//     <Route exact path="/admin-dashboard">
//       <AdminContextProvider>
//         <AdminDashboard />
//       </AdminContextProvider>
//     </Route>
//     <Route exact path="/member-dashboard">
//       <MemberDashboard />
//     </Route>   
//     </Routes>
//   )
}

// export default routes;

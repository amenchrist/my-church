import {  useRoutes, } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import ServiceSummary from './compositions/ServiceSummary';
import WatchPage from './pages/WatchPage';
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
          {path: 'hello', element: <h2>Hello o</h2> },
          { path: 'summary', element: <ServiceSummary />}
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

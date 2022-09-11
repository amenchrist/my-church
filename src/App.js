import { useState } from 'react';
import './App.css';
import DashboardNavbar from './components/DashboardNavbar';
import Router from './routes';

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <>
    
      <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} isMobileNavOpen={isMobileNavOpen} setMobileNavOpen={() => setMobileNavOpen } />
      <Router />
    </>
  );
}

export default App;
